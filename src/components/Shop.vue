<template>
  <div class="products">
    <h1>Shop</h1>
    <ul class="products__list">
      <li v-for="product in products" :key="product.id" class="products__item">
        <p class="name">{{ product.name }}</p>
        <button @click="addToCart(product)">
          Add by {{ getPrice(product.price) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VuexShop",
  computed: {
    ...mapGetters({
      products: "products/products",
    }),
  },
  methods: {
    getPrice(value) {
      return "£" + value;
    },
    addToCart(product) {
      this.$store.dispatch("cart/addToCart", { product });
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &__list {
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 1rem;
  }
  &__item {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100px;
    border-radius: 0.5rem;
    padding: 0.5rem;
    gap: 0.5rem;
    border: 5px solid honeydew;

    .name {
      font-weight: bold;
      font-size: 1.2rem;
      margin: 0;
    }

    button {
      border: 0;
      background: none;
      cursor: pointer;
      color: gray;
      &:hover {
        color: black;
      }
    }
  }
}
</style>
