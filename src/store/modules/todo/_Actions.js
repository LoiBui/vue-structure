export default {
  addTask ({ commit }, payload) {
    commit('ADD_NEW_TASK', payload)
  },
  setTodos({commit}, todos) {
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
