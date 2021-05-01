import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectHouse: '',
    listMembersHouse: null,
    countMembers: null
  },
  mutations: {
    setHouse(state, val){
      state.selectHouse = val
    },
    setListMembers(state, val){
      state.listMembersHouse = val
    },
    setCountMembers(state, val){
      state.countMembers = val
    },
  },
  actions: {
    clearData({commit}) {
      commit('setHouse', null)
      commit('setListMembers', null)
      commit('setCountMembers', null)
    }
  },
  modules: {
  }
})
