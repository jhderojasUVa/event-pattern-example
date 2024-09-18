<script setup>
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import GroupOfToDoMolecule from '../../components/molecules/GroupOfToDo/GroupOfToDo.molecule.vue';
import { useToDoStore } from '../../stores/todoStore';

import { useCounterStore } from '../../stores/countStore';
// Controller actions
// import { getTodos, changeComplete, removeTodo } from './Controller';

const storeTodos = useToDoStore();

const { todos } = storeToRefs(storeTodos);
const { removeToDo, changeComplete } = storeTodos;

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

watch(() => todos, (newValue) => {
  console.log('Dashboard has seen a change on the store... so let\'s react');
  todos.value = storeTodos.getTodos;
}, { deep: true});

</script>

<template>
  <h1>Menu</h1>
  <hr>
  <div>
    <h1>Todo example</h1>
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
</style>
