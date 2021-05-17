import {DONE_TASK, PENDING_TASK} from '@/config/todo'

export default {
  todos: state => {
    return state.todos
  },
  doneTask: state => {
    return state.todos.filter(item => item.status == DONE_TASK)
  },
  pendingTask: state => {
    return state.todos.filter(item => item.status == PENDING_TASK)
  }
}
