<template>
  <div
    class="cart"
    :class="[{ popup: isPopup }, { empty: cartQuantity === 0 }]"
  >
    <div v-if="cartQuantity" class="cart__body">
      <ul class="cart__list">
        <li class="cart__item" v-for="item in cartItems" :key="item.id">
          <p class="cart__item-summary">
            <span class="quantity">({{ item.quantity }})</span>
            <span class="name">{{ item.name }}</span>
            <span class="price">{{
              getPrice(item.price * item.quantity)
            }}</span>
          </p>
          <button class="text" @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>

      <p class="cart__quantity">{{ cartQuantity }} items</p>
      <p class="cart__price">{{ getPrice(cartTotalPrice) }}</p>
    </div>

    <p class="cart__empty cart__body" v-else>Your cart is empty</p>

    <div class="cart__footer button-group" v-if="isPopup">
      <button type="button " class="outlined" @click="closeCartPopup">
        Continue To Shop
      </button>
      <button type="button " class="contained" @click="goCartPage">
        View Cart
      </button>
    </div>
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
  props: {
    isPopup: {
      default: true,
      type: Boolean,
    },
  },
  emits: ["toggleCartQuickView"],
  methods: {
    getPrice(value) {
      return "£" + value;
    },
    removeFromCart(id) {
      this.$store.dispatch("cart/removeFromCart", { id });
    },
    goCartPage() {
      this.$emit("toggleCartQuickView");
      this.$router.push("/cart");
    },
    closeCartPopup() {
      this.$emit("toggleCartQuickView");
      this.$router.push("/shop");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  max-width: 600px;

  &.popup {
    width: 300px;
    height: 300px;
    border-radius: 0.5rem;
    position: absolute;
    right: 0.5rem;
    top: 2rem;
    background: white;
    padding: 1rem;
    box-shadow: 0 0 0.5rem gainsboro;
    display: grid;
    grid: 1fr / 100%;
  }

  &__list {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0.25rem;
    height: 80%;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
    background: white;
    padding: 0.5rem 0;
  }

  &__item-summary {
    display: flex;
    align-items: center;
    width: 80%;

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

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    width: 100%;
  }

  &__quantity {
    text-align: right;
  }

  &__price {
    text-align: right;
    font-size: 1.5rem;
    margin-top: 0;
  }

  button {
    display: inline-block;
    width: 50%;
    padding: 0.5rem;
  }
}
</style>
