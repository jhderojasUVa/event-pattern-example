<script setup>
const props = defineProps(['data']);

const { placeholder } = props.data;

</script>

<template>
    <span class="container">
        <input type="text" :placeholder="placeholder" width="100" />
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