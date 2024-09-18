// Reponsible of getting the todos
import axios from 'axios';

export const getToDos = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return {
            success: true,
            data: response.data
        }
    } catch (e) {
        return {
            success: false,
            data: e
        }
    }
}