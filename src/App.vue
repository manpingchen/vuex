<template>
  <NavBar />
  <main>
    <router-view> </router-view>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style lang="scss">
main {
  position: relative;
  top: 5rem;
}
</style>
