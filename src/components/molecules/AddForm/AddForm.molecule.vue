<script setup>
import ButtonAdd from '../../atoms/Buttom/Buttom.atom.vue';
import InputText from '../../atoms/Input/Input.atom.vue';

// This will hold the text of the input
let textOnInput = '';

const dataForInput = {
    placeholder: 'Add a new todo'
}
const dataForButton = {
    text: 'Addme, please'
}

const emit = defineEmits(['newTodo']);

const getText = (text) => {
    textOnInput = text;
}

const addMe = () => {
    // this compose and emit to the parent
    emit('newTodo', {
        title: textOnInput
    });
}

</script>

<template>
    <div class="grey">
        <InputText :data="dataForInput" @text="getText"/><ButtonAdd :data="dataForButton" @add="addMe"/>
    </div>
</template>

<style>
.grey {
    background-color: rgba(100, 100, 100, 0.2);
    padding: 0.5em;
    border-radius: 4px;
}
</style>