import  Vue  from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listMembersHouse: null,
    membersText: null
  },
  mutations: {
    setListMembers(state, val){
      state.listMembersHouse = val
    },
    setMembersText(state, val){
      state.membersText = val
    }
  },
  actions: {
    clearData({commit}) {
      commit('setListMembers', null)
      commit('setMembersText', null)
    }
  },
  modules: {
  }
})
