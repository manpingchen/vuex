<template>
  <h1>Vuex</h1>
  <VuexCounter title="Counter" />
  <VuexShop />
  <VuexCart />
</template>

<script>
import VuexCounter from "./components/Counter.vue";
import VuexShop from "./components/Shop.vue";
import VuexCart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    VuexCounter,
    VuexShop,
    VuexCart,
  },
};
</script>

<style lang="scss"></style>
