import TodoService from "@/services/todo.service";

export default {
  addTask ({ commit }, payload) {
    commit('ADD_NEW_TASK', payload)
  },
  getTodos({commit}) {
    const todos = TodoService.getTodos();
    commit('SET_TODOS', todos)
  },
  doneTask ({commit}, {id}) {
    commit('DONE_TASK', id)
  },
  deleteTask ({commit}, {id}) {
    commit('DELETE_TASK', id)
  },
  updateStatusTask ({commit}, {id, status}) {
    commit('UPDATE_STATUS_TASK', {id, status})
  },
}
