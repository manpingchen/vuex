import { createStore } from "vuex";
import counterModule from "./counter";
import productsModule from "./cart/products";
import cartModule from "./cart/cart";

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    counter: counterModule,
    products: productsModule,
    cart: cartModule
  },
});

export default store;
