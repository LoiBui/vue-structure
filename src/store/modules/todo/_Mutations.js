import {DONE_TASK} from '@/config/todo'
import _ from 'lodash'

export default {
  ADD_NEW_TASK: (state, payload)=>{
    state.todos.push(payload)
  },
  SET_TODOS: (state, todos) => {
    state.todos = [...todos]
  },
  UPDATE_STATUS_TASK: (state, {id, status}) => {
    const index = state.todos.findIndex(item => item.id === id)
    if(index !== -1){
      state.todos[index].status = status
      state.todos = [...state.todos]
    }
  },
  DONE_TASK: (state, id) => {
    const index = state.todos.findIndex(item => item.id === id)
    if(index !== -1){
      state.todos[index].status = DONE_TASK
      state.todos = [...state.todos]
    }
  },
  DELETE_TASK: (state, id) => {
    state.todos = _.remove(state.todos, item => item.id !== id);
  }
}
