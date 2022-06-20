import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import CreatePost from "./pages/CreatePost.vue";
import { createRouter, createWebHistory } from "vue-router";

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/create",
    component: CreatePost,
  },
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // Provide the history implementation to use
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");
