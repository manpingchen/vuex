<template>
  <div class="cart">
    <h1>Cart</h1>
    <ul class="cart__list">
      <li class="cart__item" v-for="item in cartItems" :key="item.id">
        <p class="name">{{ item.name }}</p>
        <p class="price">{{ getPrice(item.price) }}</p>
        <button class="btn__remove">Remove</button>
      </li>
    </ul>

    <p class="cart__quantity" v-if="cartQuantity">{{ cartQuantity }} items</p>
    <p class="cart__empty" v-else>Your cart is empty</p>
    <p class="cart__price">{{ getPrice(cartTotalPrice) }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VuexCart",
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
      cartTotalPrice: "cart/cartTotalPrice",
      cartQuantity: "cart/cartQuantity",
    }),
  },
  methods: {
    getPrice(value) {
      return "£" + value;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 300px;
  margin: 0 auto;

  &__list {
    display: flex;
    flex-direction: column;
  }
  &__item {
    display: flex;
  }
  button {
    &.btn__remove {
      color: gainsboro;
      &:hover {
        color: black;
      }
    }
  }

  &__empty {
    text-align: center;
    color: gray;
  }

  &__price {
    text-align: right;
    font-size: 1.5rem;
  }
}
</style>
