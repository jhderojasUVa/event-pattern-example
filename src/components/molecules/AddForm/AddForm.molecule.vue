<script setup>
import ButtonAdd from '../../atoms/Buttom/Buttom.atom.vue';
import InputText from '../../atoms/Input/Input.atom.vue';

const dataForInput = {
    placeholder: 'Add a new todo'
}
const dataForButton = {
    text: 'Addme, please'
}
</script>

<template>
    <div class="grey">
        <InputText :data="dataForInput" /><ButtonAdd :data="dataForButton"/>
    </div>
</template>

<style>
.grey {
    background-color: rgba(100, 100, 100, 0.2);
    padding: 0.5em;
    border-radius: 4px;
}
</style>