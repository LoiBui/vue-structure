const todoPlugin = store => {
    store.subscribe((mutation, state) => {
        //called when the store is initialized
    })

    store.watch(function (state) {
        return state.todo.todos
    }, function (todos) {
        localStorage.setItem('todos', JSON.stringify(todos))
    });
}

export default todoPlugin