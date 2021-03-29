import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isAuth: false
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    }
  },
  mutations: {
    validLogin(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }
  }
});
