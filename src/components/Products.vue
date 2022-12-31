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

        <h4>See how other people say</h4>
        <ul v-if="getFeedbacksByProductId(product.id)">
          <li
            v-for="feedback in getFeedbacksByProductId(product.id)"
            :key="feedback?.id"
            class="feedback"
          >
            <div class="feedback__rating">
              <span
                class="feedback__rating-dot"
                v-for="i in feedback.rating"
                :key="feedback.id + i"
              >
              </span>
            </div>
            <p>' {{ feedback.feedback }} '</p>
          </li>
        </ul>
        <p class="no-data" v-else>No Review Yet!</p>

        <h4>Tell us how you think</h4>
        <form
          @submit.prevent="submitFeedback(product.id)"
          :ref="product.id + 'form'"
        >
          <fieldset class="m_b-1">
            <legend>Give it a rating</legend>
            <div class="item" v-for="i in 5" :key="i">
              <input
                type="radio"
                :id="product.name + 'rating' + i"
                :name="product.name"
                v-model="product.rating"
                :value="i"
              />
              <label :for="product.name + 'rating' + i">{{ i }}</label>
            </div>
          </fieldset>

          <label :for="product.name + 'feedback'">
            Tell us how you found this product:
          </label>
          <textarea
            :id="product.name + 'feedback'"
            :name="product.name"
            :ref="product.id + 'feedback'"
            v-model="product.feedback"
            placeholder="I found this product is useful when..."
          />

          <button class="text" :disabled="!product.rating || !product.feedback">
            Share
          </button>
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
      feedbacks: "products/feedbacks",
    }),
  },

  methods: {
    getPrice(value) {
      return "£" + value;
    },
    addToCart(id) {
      this.$store.dispatch("cart/addToCart", { id });
    },
    async submitFeedback(id) {
      const response = await this.$store.dispatch(
        "products/postProductFeedback",
        {
          id,
        }
      );
      if (response) {
        this.$refs[id + "feedback"][0].value = null;
        this.$refs[id + "form"][0].reset();
      }
    },
    getFeedbacksByProductId(id) {
      return this.feedbacks[id];
    },
  },
  mounted() {
    this.$store.dispatch("products/fetchProducts");
    this.$store.dispatch("products/fetchProductsFeedbacks");
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

  .feedback {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    &__rating {
      display: flex;
      gap: 0.25rem;
      &-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: gold;
        display: inline-block;
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
