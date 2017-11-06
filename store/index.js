import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isMember: false,
  userInfo: {}
}

const mutations = {
  beMember (state) {
    state.isMember = true
  },
  beNoMember (state) {
    state.isMember = false
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  beMember: ({commit}) => commit('beMember'),
  beNoMember: ({commit}) => commit('beNoMember')
}

// getters are functions
const getters = {
  isMember: state => state.isMember,
  userInfo: state => state.userInfo
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
