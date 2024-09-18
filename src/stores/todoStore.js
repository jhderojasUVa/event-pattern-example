import { defineStore } from "pinia";
import { getToDos } from "../services/ToDo.service";
/*
ToDo structure https://jsonplaceholder.typicode.com/todos

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

export const useToDoStore = defineStore('todos', {
    id: 'todos',
    state: () => ({
        todos: []
    }),
    getters: {
        getTodos() { return this.todos },
        getTotal() { return this.todos.length },
        getCompleted: (state) => state.todos.filter((todo) => todo.completed === true),
        getIncompleted: (state) => state.todos.filter((todo) => todo.completed === false),
    },
    actions: {
        async addAllTodoFromService() {
            console.log(`> Storage: getting all ToDos from service...`);
            const { success, data } = await getToDos(); 

            if (success) {
                this.addAllToDo(data);
                return true;
            }

            return false;
        },
        addAllToDo(data) {
            data.forEach((item) => this.todos.push(item));

            return true;
        },
        addToDo(data) {
            const { userId, id, title, completed} = data;
            this.todos.push({
                userId,
                id,
                title,
                completed
            });
            
            return true;
        },
        removeToDo(id) {
            console.log(`> Storage: removeToDo ${id}`);
            this.todos = this.todos.filter((element) => {
                return element.id != id;
            })
            return true;
        },
        shoutMessage(id) {
            console.log(id)
            console.log('spomething')
        },
        changeComplete(id) {
            console.log(`> Storage: changeComplete ${id}`);
            this.getTodoByID(id).completed = this.getTodoByID(id).completed ? false : true;
            
            return true;
        },
        getTodoByID(id) {
            return this.todos.find((element) => element.id === id);
        },
        getTodoByTitle(title) {
            return this.todos.find((element) => element.title === title);
        },
        getTodoByUser(userId) {
            return this.todos.find((element) => element.userId === userId);
        },
    }
})