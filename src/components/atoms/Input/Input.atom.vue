<script setup>
const props = defineProps(['data']);
const emit = defineEmits(['text']);

const { placeholder } = props.data;

</script>

<template>
    <span class="container">
        <input type="text" @input="event => emit('text', event.target.value)"  :placeholder="placeholder" width="100" />
    </span>
</template>

<style>
.container {
    padding: 0 1.5em;
}
input {
    padding: 0.5em
}
</style>