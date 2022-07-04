import { createApp } from "vue";
import App from "./App.vue";
import User from "./pages/User.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/user",
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
