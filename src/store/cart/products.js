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
  getters: {
    products: (state) => state,
    productById: (state) => (productId) => {
        return state.find(({id}) => id === productId)}
  },
};

export default productsModule;
