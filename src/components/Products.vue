<template>
  <div class="products">
    <ul class="products__list">
      <li v-for="product in products" :key="product.id" class="products__item">
        <p class="name">{{ product.name }}</p>
        <button @click="addToCart(product.id)">
          Add by {{ getPrice(product.price) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VuexProducts",
  computed: {
    ...mapGetters({
      products: "products/products",
    }),
  },
  methods: {
    getPrice(value) {
      return "£" + value;
    },
    addToCart(id) {
      this.$store.dispatch("cart/addToCart", { id });
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  &__list {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  &__item {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100px;
    gap: 0.5rem;

    .name {
      font-weight: bold;
      font-size: 1.2rem;
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
