<script setup>
// import { VBtn } from 'vuetify/components';
const props = defineProps(['data']);

const { text } = props.data;
</script>

<template>
    <!-- We can use Vuetify as a atoms -->
    <v-btn max-with="100" :click="addTodo" @click="$emit('add', true)">{{ text }}</v-btn>
</template>