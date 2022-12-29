const productsModule = {
  namespaced: true,
  state() {
    return [
      { id: 1, name: "Book", price: 6 },
      { id: 2, name: "Pen", price: 1.5 },
    ];
  },
  mutations: {},
  actions: {},
  getters: {},
};

export default productsModule;
