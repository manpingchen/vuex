<template>
  <div class="cart">
    <h4>Cart</h4>
    <ul class="cart__list">
      <li class="cart__item" v-for="item in cartItems" :key="item.id">
        <p class="cart__item-summary">
          <span class="quantity">({{ item.quantity }})</span>
          <span class="name">{{ item.name }}</span>
          <span class="price">{{ getPrice(item.price * item.quantity) }}</span>
        </p>
        <button class="btn__remove" @click="removeFromCart(item.id)">
          Remove
        </button>
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
    removeFromCart(id) {
      this.$store.dispatch("cart/removeFromCart", { id });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 300px;
  margin: 0 auto;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: honeydew;

  h4 {
    margin: 0.5rem 0.25rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0.25rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
    background: white;
    padding: 0.5rem;
  }

  &__item-summary {
    width: 200px;
    margin: 0;
    display: flex;

    .name {
      padding-right: 0.25rem;
      width: 60%;
    }

    .quantity {
      padding-left: 0.5rem;
      padding-right: 0.25rem;
      width: 20%;
    }

    .price {
      width: 20%;
      text-align: right;
    }
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
    color: gray;

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

  &__quantity {
    text-align: right;
    margin: 0;
  }

  &__price {
    text-align: right;
    font-size: 1.5rem;
    margin-top: 0;
  }
}
</style>
