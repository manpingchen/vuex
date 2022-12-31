const productsModule = {
  namespaced: true,
  state() {
    return [
      {
        id: 1,
        name: "The Tools",
        category: "Book",
        price: 6,
        description: "5 Life-changing techniques to unlock your potential",
      },
      {
        id: 2,
        name: "Time machine Pen",
        category: "Stationery",
        price: 103.5,
        description: "A Pen makes time reversed while writing, so more letters written more time created",
      },
    ];
  },
  mutations: {},
  actions: {},
  getters: {
    products: (state) => state,
    productById: (state) => (productId) => {
      return state.find(({ id }) => id === productId);
    },
  },
};

export default productsModule;
