# Vuex examples with scss

- Counter
- Shop
- API requests

## Alternatives: RootGetters
### Version 1: without RootGetters
shop.vue - pass the `object` of a product
``` 
 addToCart(product) {
      this.$store.dispatch("cart/addToCart", { product });
    },
```
cart.js
```
actions: {
    addToCart({ commit }, payload) {
      console.log(payload);
      commit("addProductToCart", payload);
    },
},
```
products.js
```
getters: {
    products: (state) => state,
  },
```


### Version 2: with RootGetters

shop.vue - only pass the `id` of a product
```
addToCart(id) {
      this.$store.dispatch("cart/addToCart", { id });
},
```
cart.js - use `rootGetters` to get all products and find the product with the `id` passed
```
actions: {
    addToCart({ commit, rootGetters }, payload) {
      const productId = payload.id;
      const product = rootGetters['products/productById'](productId);
      commit("addProductToCart", {product});
    },
},
```
products.js - add one more getters, allowing to get a specific product by `id`
```
getters: {
    products: (state) => state,
    productById: (state) => (productId) => {
        return state.find(({id}) => id === productId)}
  },

```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
