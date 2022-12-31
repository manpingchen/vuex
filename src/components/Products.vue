<template>
  <div class="products">
    <ul class="products__list">
      <li v-for="product in products" :key="product.id" class="products__item">
        <p class="category" :class="product.category.toLowerCase()">
          {{ product.category }}
        </p>
        <p class="name">{{ product.name }}</p>
        <p class="description">{{ product.description }}</p>
        <button @click="addToCart(product.id)" class="outlined primary m_b-1">
          Add by {{ getPrice(product.price) }}
        </button>

        <form @submit.prevent="submitFeedback">
          <fieldset class="m_b-1">
            <legend>Give it a rank</legend>
            <div class="item" v-for="i in 5" :key="i">
              <input
                type="radio"
                :id="product.name + 'rate' + i"
                :name="product.name"
                :value="i"
              />
              <label :for="product.name + 'rate' + i">{{ i }}</label>
            </div>
          </fieldset>

          <label :for="product.name + 'feedback'">
            Tell us how you found this product:
          </label>
          <textarea
            :id="product.name + 'feedback'"
            :name="product.name"
            placeholder="I found this product is useful when..."
          >
          </textarea>

          <button class="text">Share</button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VuexProducts",
  computed: {
    ...mapGetters({
      products: "products/products",
    }),
  },

  methods: {
    getPrice(value) {
      return "£" + value;
    },
    addToCart(id) {
      this.$store.dispatch("cart/addToCart", { id });
    },
    submitFeedback() {},
  },
};
</script>

<style lang="scss" scoped>
.products {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  &__list {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  &__item {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 0.5rem;

    .category {
      font-size: 0.875rem;
      &.book {
        color: goldenrod;
      }
      &.stationery {
        color: cornflowerblue;
      }
    }

    .name {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .description {
      font-size: 0.875rem;
      color: gray;
      font-style: italic;
    }

    form {
      label {
        display: block;
        margin-bottom: 0.5rem;
      }
      textarea {
        width: 100%;
      }
    }

    button {
      &:hover {
        color: black;
      }
    }
  }

  fieldset {
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    .item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    label {
      margin-bottom: 0;
      width: 30px;
      cursor: pointer;
    }
  }
}
</style>
