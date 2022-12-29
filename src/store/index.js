import { createStore } from "vuex";
import counterModule from "./counter";

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    counter: counterModule,
  },
});

export default store;
