import { createStore } from 'vuex'
import DataService from '@/service/DataService'

export default createStore({
  state: {
    dataService: new DataService(),
    utilisateur: {},
    medecin:{},
    rapport:{},
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
