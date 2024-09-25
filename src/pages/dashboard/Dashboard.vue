<script setup>
import { watch,ref } from 'vue';
import { storeToRefs } from 'pinia';
// Molecules
import GroupOfToDoMolecule from '../../components/molecules/GroupOfToDo/GroupOfToDo.molecule.vue';
import AddTodoForm from '../../components/molecules/AddForm/AddForm.molecule.vue';
// Stores
import { useToDoStore } from '../../stores/todoStore';

// Controller actions
import { changeComplete, removeTodo, addToDo } from './Controller';

// store
const storeTodos = useToDoStore();
const { todos } = storeToRefs(storeTodos);

// error handling
let response = ref({sucess: true});

function handleRemove(id) {
  console.log(`> Received from GroupOfToDoMolecule remove with id: ${id}`);
  // send to the controller
  response.value = removeTodo(storeTodos, id);
  console.log(response)
}

function handleComplete(id) {
  console.log(`> Received from GroupOfToDoMolecule complete with id: ${id}`);
  // send to the controller
  response.value = changeComplete(storeTodos, id);
  console.log(response);
}

function handleAddNewTodo(data) {
  console.log('> Received from AddTodoForm a new todo with title:', data);
  const { title } = data;

  // send to the controller
  response.value = addToDo(storeTodos, {
    userId: 1,
    title,
    completed: false,
  });
}

watch(() => todos, (newValue) => {
  console.log('Dashboard has seen a change on the store... so let\'s react');
  todos.value = storeTodos.getTodos;
}, { deep: true});

</script>

<template>
  <div>
    <h1>Todo example</h1>
    <div class="error" v-if="response.success === false">
      Sorry, we had an error: {{ response.data }}
    </div>
    <h2>Add a new Todo with this</h2>
    <AddTodoForm @newTodo="handleAddNewTodo"/>
    
    <h2>This shows all the TODOs</h2>
    <GroupOfToDoMolecule :todos="todos" @remove="handleRemove" @complete="handleComplete"/>
  </div>
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

.error {
  color: white;
  background-color: red;
  border: 1px solid red;
  padding: 0.5em;
  border-radius: 4px;
}
</style>
