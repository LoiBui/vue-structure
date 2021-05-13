
// single pages
import homePage from '../views/pages/Home'
import notFoundPage from '../views/pages/NotFound'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: 'home' }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: 'not found' }
  }
]
