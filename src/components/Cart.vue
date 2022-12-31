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
            <span class="name" :class="{ ellipsis: isPopup }">
              {{ item.name }}
            </span>
            <span class="price">{{
              getPrice(item.price * item.quantity)
            }}</span>
          </p>
          <button class="text remove" @click="removeFromCart(item.id)">
            Remove
          </button>
        </li>
      </ul>

      <p class="cart__price">
        <span class="cart__quantity">({{ cartQuantity }} items)</span>
        {{ getPrice(cartTotalPrice) }}
      </p>
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

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

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
    gap: 1rem;

    .name {
      font-size: 0.875rem;
    }
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
    gap: 0.25rem;
    padding-right: 0.25rem;

    .name {
      width: inherit;
    }

    .quantity {
      width: 40px;
    }

    .price {
      width: 100px;
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
    font-size: 0.75rem;
    line-height: 1rem;
    font-style: italic;
    color: gray;
  }

  &__price {
    text-align: right;
    font-size: 1.5rem;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  button {
    display: inline-block;
    width: 50%;
    font-size: 0.875rem;
    &.remove {
      color: gainsboro;
    }
  }
}
</style>
