<script setup>
import ButtonAdd from '../../atoms/Buttom/Buttom.atom.vue';
import InputText from '../../atoms/Input/Input.atom.vue';
</script>

<template>
    <div class="grey">
        <InputText /><ButtonAdd />
    </div>
</template>

<style>
.grey {
    background-color: rgba(100, 100, 100, 0.2);
    padding: 0.5em;
    border-radius: 4px;
}
</style>