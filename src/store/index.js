import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isAuth: false,
    address: "",
    phone: "",
    email: ""
  },
  plugins: [
    new VuexPersistence({
      modules: ["address", "phone", "email"]
    }).plugin
  ],
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
    getContactInformation(state) {
      return {
        address: state.address,
        phone: state.phone,
        email: state.email
      };
    }
  },
  mutations: {
    validLogin(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
    setContactInformation(state, payload) {
      state.address = payload.address;
      state.phone = payload.phone;
      state.email = payload.email;
    }
  }
});
