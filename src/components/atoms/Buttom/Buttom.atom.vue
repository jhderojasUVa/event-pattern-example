<script setup>
const props = defineProps(['data']);

const { text } = props.data;
console.log(props)
</script>

<template>
    <button :click="addTodo">{{ text }}</button>
</template>