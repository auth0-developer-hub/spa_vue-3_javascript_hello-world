import Home from "@/pages/home.vue";
import NotFound from "@/pages/not-found.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../pages/profile.vue"),
  },
  {
    path: "/public",
    name: "public",
    component: () => import("../pages/public.vue"),
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("../pages/protected.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../pages/admin.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
