<template>
  <header class="navbar">
    <h1>Vuex</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/shop" :class="{ active: !isShowingCartPopup }">
            Shop
          </router-link>
        </li>
        <li class="cart-nav">
          <p
            @click="toggleCartQuickView"
            :class="{ active: isShowingCartPopup }"
          >
            Cart ({{ cartQuantity }})
          </p>
          <transition
            name="fade"
            class="cart-quick-view"
            v-show="isShowingCartPopup"
          >
            <VuexCart @toggleCartQuickView="toggleCartQuickView" />
          </transition>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import VuexCart from "@/components/Cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      isShowingCartPopup: false,
    };
  },
  computed: {
    ...mapGetters({
      cartQuantity: "cart/cartQuantity",
    }),
  },
  components: { VuexCart },

  methods: {
    toggleCartQuickView() {
      this.isShowingCartPopup = !this.isShowingCartPopup;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 2;
}
nav {
  > ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    position: relative;

    > li {
      cursor: pointer;
      padding: 0 0.5rem;

      p,
      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: gray;
        &.active {
          color: black;
        }
      }
    }
  }
}
</style>
