const cartModule = {
  namespaced: true,
  state() {
    return {
      items: [],
      totalPrice: 0,
      quantity: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const product = payload.product;
      const productInCartIndex = state.items.findIndex(
        (cartiItems) => cartiItems.id === product.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].quantity++;
      } else {
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        };

        state.items.push(newItem);
      }

      state.quantity++;
      state.totalPrice += product.price;
    },

    removeProductFromCart(state, payload) {
      const productId = payload.id;
      const productIdCartIndex = state.items.findIndex(
        (cartItem) => cartItem.id === productId
      );
      const product = state.items[productIdCartIndex];
      state.items.splice(productIdCartIndex, 1);
      state.totalPrice -= product.price * product.quantity;
      state.quantity -= product.quantity;
    },
  },
  actions: {
    addToCart({ commit, rootGetters }, payload) {
      const productId = payload.id;
      const product = rootGetters['products/productById'](productId);
      commit("addProductToCart", {product});
    },
    removeFromCart({ commit }, payload) {
      commit("removeProductFromCart", payload);
    },
  },
  getters: {
    cart: (state) => state,
    cartItems: (state) => state.items,
    cartQuantity: (state) => state.quantity,
    cartTotalPrice: (state) => state.totalPrice,
  },
};

export default cartModule;
