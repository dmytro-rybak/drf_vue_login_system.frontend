import { createStore } from 'vuex'
import axios from "axios";
import router from "../router";
export default createStore({
  state: {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  },
  getters: {
    isAuth(state){
      return !!state.accessToken
    }
  },
  mutations: {
    setTokens(state, tokens){
      state.accessToken = tokens.accessToken;
      state.refreshToken = tokens.refreshToken;
    },
    removeTokens(state){
      state.accessToken = null
      state.refreshToken = null
    },
    setAccess(state, accessToken){
      state.accessToken = accessToken;
    }
  },
  actions: {
    login({commit}, credentials){
      axios.post('http://localhost:8000/api/v1/jwt/create', {
        "username": credentials.username,
        "password": credentials.password
      }).then(response => {
        localStorage.setItem('accessToken', response.data.access)
        localStorage.setItem('refreshToken', response.data.refresh)
        commit('setTokens', {'accessToken': response.data.access, 'refreshToken': response.data.refresh})
        router.push({name: 'Home'})
      }).catch(function (error){
        console.log(error)
      })
    },
    logout({commit}){
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      commit('removeTokens')
      router.push({name: 'Login'})
    },
    verifyToken({commit, state}, tokens){
      axios.post('http://localhost:8000/api/v1/jwt/verify', {
        "token": tokens.accessToken
      }).then(function (){
        axios.defaults.headers.common['Authorization'] = "JWT " + tokens.accessToken;
      }).catch(function (){
        axios.post('http://localhost:8000/api/v1/jwt/refresh', {
          "refresh": tokens.refreshToken
        }).then(response => {
          localStorage.setItem('accessToken', response.data.access)
          axios.defaults.headers.common['Authorization'] = "JWT " + response.data.access;
        }).catch(function (){
          router.push({name: 'Login'})
        })
      })
    }
  },
  modules: {
  },
})
