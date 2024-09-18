<script setup>
import { ref, watch } from 'vue';
import ToDoAtom from '../../atoms/ToDo/ToDo.atom.vue';

const props = defineProps(['todos']);
const emit = defineEmits(['remove', 'complete'])

const { todos } = props;

console.log(todos.length)

// Remember always to use arrow functions!
const handleRemove = (id) => {
    emit('remove', id);
}

const handleComplete = (id) => {
    emit('complete', id);
}

watch(() => todos, () => {
    console.log('GroupOfTodos has seen a change on the props data');
});

</script>

<template>
   <div v-for="todo in todos">
        <ToDoAtom :data="todo" @remove="handleRemove" @completeme="handleComplete" />
    </div>
</template>