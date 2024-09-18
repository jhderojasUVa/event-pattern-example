<script setup>

const props = defineProps(['data']);

const { id, title, completed } = props.data;

/*
We can do the event like this too

const emit = defineEmits(['remove']);

function handleClick() {
    emit('remove', id);
}
*/

</script>

<template>
    <div>
        {{ completed ? `COMPLETED: ` : ``}} {{ title }} [<a @click="$emit('remove', id)">remove me</a>] - [<a @click="$emit('completeme', id)">change complete</a>]
    </div>
</template>

<style>
a:hover {
    cursor: pointer;
}
</style>