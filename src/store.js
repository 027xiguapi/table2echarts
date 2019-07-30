import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    xlsxJson: []
  },
  getters: {
    getStateXlsxJson: function (state){
        return state.xlsxJson
    }
  },
  mutations: {

  },
  actions: {

  }
})
