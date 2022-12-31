<template>
  <PageLayout>
    <template v-slot:title>Cart</template>
    <template v-slot:content> <VuexCart :is-popup="false" /> </template>
  </PageLayout>
</template>

<script>
import VuexCart from "@/components/Cart.vue";
import PageLayout from "@/templates/Page.vue";

export default {
  name: "CartPage",
  components: {
    VuexCart,
    PageLayout,
  },
};
</script>