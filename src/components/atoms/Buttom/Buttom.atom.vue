<script setup>
const props = defineProps(['data']);

const { text } = props.data;
</script>

<template>
    <button :click="addTodo" @click="$emit('add', true)">{{ text }}</button>
</template>