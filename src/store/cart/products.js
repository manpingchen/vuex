const productsModule = {
  namespaced: true,
  state() {
    return {
      products: [],
      feedbacks: [],
    };
  },
  mutations: {
    updateProducts(state, payload) {
      state.products = payload;
    },
    updateFeedbacks(state, payload) {
      state.feedbacks = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch(
          "https://vuex-api-77ed9-default-rtdb.firebaseio.com/products.json"
        );
        const objects = await response.json();

        let products = [];

        for (const key in objects) {
          products.push({
            id: key,
            ...objects[key],
          });
        }

        commit("updateProducts", products);
      } catch (error) {
        console.log("fetchProducts", { error });
      }
    },

    async fetchProductsFeedbacks({ commit }) {
      try {
        const response = await fetch(
          "https://vuex-api-77ed9-default-rtdb.firebaseio.com/feedbacks.json"
        );
        const objects = await response.json();

        let feedbacks = {};

        for (const feedbackId in objects) {
          const object = objects[feedbackId];
          const { productId, feedback, rating } = object;
          const feedbackByProductId = {
            id: feedbackId,
            feedback,
            rating,
          };

          if (Object.keys(feedbacks).includes(productId)) {
            feedbacks[productId].push(feedbackByProductId);
          } else {
            feedbacks[productId] = [feedbackByProductId];
          }
        }

        console.log({ feedbacks });

        commit("updateFeedbacks", feedbacks);
      } catch (error) {
        console.log("fetchProductsFeedbacks", { error });
      }
    },

    async postProductFeedback({ state }, payload) {
      const product = state.products.find(({ id }) => id === payload.id);
      try {
        const response = await fetch(
          "https://vuex-api-77ed9-default-rtdb.firebaseio.com/feedbacks.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: payload.id,
              feedback: product.feedback,
              rating: product.rating,
            }),
          }
        );
        if (response) {
          this.dispatch("products/fetchProductsFeedbacks");
          return true;
        }
      } catch (error) {
        console.log("postProductFeedback", { error });
      }
    },
  },
  getters: {
    products: (state) => state.products,
    productById: (state) => (productId) => {
      return state.products.find(({ id }) => id === productId);
    },
    feedbacks: (state) => state.feedbacks,
  },
};

export default productsModule;
