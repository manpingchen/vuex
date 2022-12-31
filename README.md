# Vuex examples with scss

- Counter
- Product List
- API requests from firebase

![image](<img width="923" alt="image" src="https://user-images.githubusercontent.com/10693128/210141521-f5ed3e91-6bc5-4cd1-903c-ce949a37967f.png">)

## Alternatives: RootGetters
### Version 1: without RootGetters
shop.vue - pass the `object` of a product
``` javascript 
 addToCart(product) {
      this.$store.dispatch("cart/addToCart", { product });
    },
```
cart.js
```javascript
actions: {
    addToCart({ commit }, payload) {
      commit("addProductToCart", payload);
    },
},
```
products.js
```javascript
getters: {
    products: (state) => state,
  },
```


### Version 2: with RootGetters

shop.vue - only pass the `id` of a product
```javascript
addToCart(id) {
      this.$store.dispatch("cart/addToCart", { id });
},
```
cart.js - use `rootGetters` to get all products and find the product with the `id` passed
```javascript
actions: {
    addToCart({ commit, rootGetters }, payload) {
      const productId = payload.id;
      const product = rootGetters['products/productById'](productId);
      commit("addProductToCart", {product});
    },
},
```
products.js - add one more getters, allowing to get a specific product by `id`
```javascript
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
