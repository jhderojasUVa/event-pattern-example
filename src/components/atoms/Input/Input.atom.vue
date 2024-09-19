<script setup>
const props = defineProps(['data']);
const emit = defineEmits(['text']);

const { placeholder } = props.data;

</script>

<template>
    <v-text-field max-width="300" :label="placeholder" type="text" @input="event => emit('text', event.target.value)"
        :placeholder="placeholder" width="100"></v-text-field>
</template>

<style>
</style>