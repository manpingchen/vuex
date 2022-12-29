const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload.value;
    },
  },
  actions: {
    increment({ commit }, payload) {
      commit("increment", payload);
    },
    decrement({ commit }, payload) {
      commit("decrement", payload);
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
};

export default counterModule;
