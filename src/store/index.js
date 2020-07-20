import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

const state = {}

const getters = {}

const actions = {}

const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    user,
  },
})
