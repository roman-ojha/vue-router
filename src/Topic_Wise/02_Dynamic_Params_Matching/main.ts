import { createApp } from "vue";
import App from "./App.vue";
import User from "./pages/User.vue";
import Page404 from "./pages/Page404.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    // dynamic segments start with a colon
    path: "/users/:id/posts/:postId",
    // You can have multiple params in the same route, and they will map to corresponding fields on $route.params
    component: User,
  },
  {
    // Regular params will only match characters in between url fragments, separated by /. If we want to match anything, we can use a custom param regexp by adding the regexp inside parentheses right after the param:
    path: "/:path(.*)*",
    name: "NotFound",
    component: Page404,
  },
  // will match anything starting with `/user-` and put it under `$route.params.id`
  {
    path: "/user-:id(.*)",
    // Example:
    // routing to : '/user-roman'
    // id: roman
    // OR:
    // routing to : '/user-roman/posts/432'
    // id: roman/posts/432
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
