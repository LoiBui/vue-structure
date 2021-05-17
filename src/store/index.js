import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import todo from '@/plugins/vuex/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV === 'development',
  plugins: [todo]
})
