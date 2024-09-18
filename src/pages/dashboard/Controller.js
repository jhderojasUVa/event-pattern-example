import { ref } from 'vue';
import { useToDoStore } from '../../stores/todoStore';

const storeToDo = useToDoStore();

const store = ref(storeToDo)

// controller code
const checkIdIsValid = (id) => {
    if (!id) {
        return false;
    }

    return true;
}

export const getTodos = () => {
    return store.getTodos();
}

// we set some defaults
export const addToDo = (store, { userId = 1, id = null, title = null, completed = false  } = {}) => {
    // check some basic values
    if (id === null|| title === null) {
        // something is bad
        return {
            sucess: false,
            data: 'Id or title is empty'
        }
    }

    const response = store.addToDo(store, { userId, id, title, completed});

    if (response) {
        return {
            success: true
        }
    }
}

export const changeComplete = (store, id) => {
    if (!checkIdIsValid(id)) {
        return {
            sucess: false,
            data: 'Id is not valid'
        }
    }
    
    const response = store.changeComplete(id);

    if (response) {
        return {
            success: true
        }
    }

    return {
        success: false,
        data: 'Error changing the complete status'
    }
}

export const removeTodo = (id) => {
    if (!checkIdIsValid(id)) {
        return {
            sucess: false,
            data: 'Id is not valid'
        }
    }

    const response = store.removeToDo(id);

    if (response) {
        return {
            success: true
        }
    }

    return {
        success: false,
        data: 'Error removing todo'
    }
}