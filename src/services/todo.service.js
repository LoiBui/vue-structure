export default class TodoService{
    static getTodos(){
        const todos = JSON.parse(localStorage.getItem('todos'))
        return todos || [];
    }
}