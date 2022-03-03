import Home from "@/pages/home.vue";
import NotFound from "@/pages/not-found.vue";
import { createAuthGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";

export const getRouter = (app) => {
  const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../pages/profile.vue"),
      beforeEnter: createAuthGuard(app),
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
      beforeEnter: createAuthGuard(app),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../pages/admin.vue"),
      beforeEnter: createAuthGuard(app),
    },
    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      component: NotFound,
    },
  ];

  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
};
