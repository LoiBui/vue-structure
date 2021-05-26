
// single pages
import homePage from '../views/pages/Home'
import notFoundPage from '../views/pages/NotFound'
import todos from '@/views/pages/todo'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: 'Trang Chủ' }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: 'not found' }
  },
  {
    path: '/todos',
    name: 'todos',
    component: todos
  }
]
