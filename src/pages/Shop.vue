<template>
  <PageLayout>
    <template v-slot:title>Shop</template>
    <template v-slot:content>
      <VuexProducts />
    </template>
  </PageLayout>
</template>

<script>
import VuexProducts from "@/components/Products.vue";
import PageLayout from "@/templates/Page.vue";

export default {
  name: "VuexShop",
  
  components: {
    VuexProducts,
    PageLayout,
  },
};
</script>
