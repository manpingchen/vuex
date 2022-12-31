import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import store from "@/store/index.js";
import CartPage from "@/pages/CartPage.vue";
import VuexShop from "@/pages/Shop.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/cart",
      component: CartPage,
    },
    {
      path: "/shop",
      component: VuexShop,
    },
  ],
  linkActiveClass: "active",
});

app.use(store);
app.use(router);
app.mount("#app");
