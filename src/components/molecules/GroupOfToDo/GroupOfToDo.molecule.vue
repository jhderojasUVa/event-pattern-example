<script setup>
import { ref, watch } from 'vue';
import ToDoAtom from '../../atoms/ToDo/ToDo.atom.vue';

const props = defineProps(['todos']);
const emit = defineEmits(['remove', 'complete'])

const data = ref(props.todos);

// Remember always to use arrow functions!
const handleRemove = (id) => {
    console.log(`> Received from ToDoAtom remove with id ${id}`);
    emit('remove', id);
}

const handleComplete = (id) => {
    console.log(`> Received from ToDoAtom complete with id ${id}`)
    emit('complete', id);
}

watch(() => data, () => {
    console.log('GroupOfTodos has seen a change on the props data');
});

</script>

<template>
   <div v-for="data in todos">
        <!-- remember to set the key -->
        <ToDoAtom :data="data" @remove="handleRemove" @completeme="handleComplete" :key="data.id"/>
    </div>
</template>