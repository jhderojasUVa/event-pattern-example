<script setup>
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
// Molecules
import GroupOfToDoMolecule from '../../components/molecules/GroupOfToDo/GroupOfToDo.molecule.vue';
import AddTodoForm from '../../components/molecules/AddForm/AddForm.molecule.vue';
// Stores
import { useToDoStore } from '../../stores/todoStore';


// Controller actions
// import { getTodos, changeComplete, removeTodo } from './Controller';

const storeTodos = useToDoStore();

const { todos } = storeToRefs(storeTodos);

onMounted(() => {
  storeTodos.addAllTodoFromService();
})

function handleRemove(id) {
  console.log(`> Received from GroupOfToDoMolecule remove with id: ${id}`);
  storeTodos.removeToDo(id);
}

function handleComplete(id) {
  console.log(`> Received from GroupOfToDoMolecule complete with id: ${id}`);
  storeTodos.changeComplete(id);
}

function handleAddNewTodo(data) {
  console.log('> Received from AddTodoForm a new todo with title:', data);
  const { title } = data;
  storeTodos.addToDo({
    title,
    completed: false,
  })
}

watch(() => todos, (newValue) => {
  console.log('Dashboard has seen a change on the store... so let\'s react');
  todos.value = storeTodos.getTodos;
}, { deep: true });

</script>

<template>
  <v-app>
    <v-main>
      <div>
        <h1>Todo example</h1>
        <AddTodoForm @newTodo="handleAddNewTodo" />
        <h2>This shows all the TODOs</h2>
        <GroupOfToDoMolecule :todos="todos" @remove="handleRemove" @complete="handleComplete" />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
