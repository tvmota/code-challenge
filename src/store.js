import Vue from 'vue'
import Vuex from 'vuex'
import { charactersList } from './services/CharactersService'
import { getPage } from './persistense/LocalPersistence'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageNumber: 1,
    page: [],
    totalPage: 0,
    showLoader: true
  },
  mutations: {
    SET_PAGE (state, payload) {
      state.page = payload
    },
    SET_PAGE_NUMBER (state, payload) {
      state.pageNumber = payload
    },
    SET_TOTAL_PAGE (state, payload) {
      state.totalPage = payload
    },
    SET_SHOW_LOADER (state, payload) {
      state.showLoader = payload
    }
  },
  getters: {
    getCharacters: state => state.page,
    getPageNumber: state => state.pageNumber,
    getTotalPage: state => state.totalPage,
    getShowLoader: state => state.showLoader
  },
  actions: {
    updatePage ({ commit, state }, pageNumber) {
      if (navigator.onLine) {
        commit('SET_SHOW_LOADER', true)
        charactersList(pageNumber).then(resp => {
          commit('SET_PAGE', resp)
          commit('SET_PAGE_NUMBER', pageNumber)
          commit('SET_TOTAL_PAGE', pageNumber)
          commit('SET_SHOW_LOADER', false)
        })
      } else {
        if (pageNumber <= state.totalPage) {
          commit('SET_SHOW_LOADER', true)
          getPage(pageNumber).then(resp => {
            if (resp) {
              commit('SET_PAGE', resp)
              commit('SET_PAGE_NUMBER', pageNumber)
              commit('SET_SHOW_LOADER', false)
            }
          })
        }
      }
    }
  }
})
