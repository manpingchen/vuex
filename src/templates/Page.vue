<template>
  <div class="page">
    <h1 class="page__title"><slot name="title"></slot></h1>
    <div class="page__content"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
};
</script>
<style lang="scss" scoped>
.page {
  padding: 1rem;
  &__title {
  }
}
</style>
