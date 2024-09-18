<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['data']);
const data = ref(props.data);

/*
We can do the event like this too

const emit = defineEmits(['remove']);

function handleClick() {
    emit('remove', id);
}
*/

watch(() => data, () => {
    console.log('> ToDo Atom is getting new data from the molecule GroupOfToDoMolecule')
}, { deep: true});

</script>

<template>
    <div v-if="data.completed">
        <span>{{ data.title }} [<a @click="$emit('remove', data.id)">remove me</a>] - [<a @click="$emit('completeme', data.id)">change complete</a>]</span>
    </div>
    <div v-if="!data.completed">
        <span class="completed">{{ data.title }} [<a @click="$emit('remove', data.id)">remove me</a>] - [<a @click="$emit('completeme', data.id)">change complete</a>]</span>
    </div>
</template>

<style>
a:hover {
    cursor: pointer;
}
.completed {
    text-decoration: line-through;
}
</style>