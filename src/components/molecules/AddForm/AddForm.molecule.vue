<script setup>
import ButtonAdd from '../../atoms/Buttom/Buttom.atom.vue';
import InputText from '../../atoms/Input/Input.atom.vue';

// This will hold the text of the input
let textOnInput = '';

const dataForInput = {
    placeholder: 'Write here to add something',
    title: 'Add a todo'
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
    <!-- again, use the vuetify as an atoms -->
    <v-card class="mx-auto grey" max-width="700" title="Add a new todo">
        <InputText :data="dataForInput" @text="getText" />
        <ButtonAdd :data="dataForButton" @add="addMe" />
    </v-card>
</template>

<style>
.grey {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.5em;
    border-radius: 4px;
}
</style>