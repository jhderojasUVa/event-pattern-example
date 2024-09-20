<script setup>
const props = defineProps(['data']);
const emit = defineEmits(['text']);

const { placeholder, title } = props.data;

</script>

<template>
    <div class="input">
        <v-text-field class="input-field" variant="outlined" :label="title" type="text"
            @input="event => emit('text', event.target.value)" :placeholder="placeholder"></v-text-field>
    </div>
</template>

<style>
div.input {
    margin: auto;
}
input[type="text"] {
    font-size: 2em;
    background-color: white;
}
</style>