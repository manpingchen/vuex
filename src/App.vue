<template>
  <h1>Vuex</h1>
  <VuexCounter title="Counter" />
  <VuexShop />
</template>

<script>
import VuexCounter from "./components/Counter.vue";
import VuexShop from "./components/Shop.vue";

export default {
  name: "App",
  components: {
    VuexCounter,
    VuexShop,
  },
};
</script>

<style lang="scss"></style>
