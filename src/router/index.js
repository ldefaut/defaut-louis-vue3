import { list } from "postcss";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import DetailsView from "../views/DetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: list,
      component: ListView,
    },
    {
      path: "/list/:tail",
      name: "details",
      component: DetailsView,
    },
  ],
});

export default router;
