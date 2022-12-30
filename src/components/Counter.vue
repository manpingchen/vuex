<template>
  <div class="counter">
    <h1>{{ title }}</h1>
    <h2>{{ counter }}</h2>
    <div class="counter__panel">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VuexCounter",
  props: {
    title: String,
  },
  computed: {
    ...mapGetters({
      counter: "counter/getCounter",
    }),
  },
  methods: {
    increment() {
      this.$store.dispatch("counter/increment", { value: 1 });
    },
    decrement() {
      this.$store.dispatch("counter/decrement", { value: 1 });
    },
  },
};
</script>

<style lang="scss" scoped>
.counter {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &__panel {
    display: flex;
    gap: 1rem;
  }
}
</style>
