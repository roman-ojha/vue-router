import User from "../pages/User.vue";
import UserPost from "../components/User/Post.vue";
import UserProfile from "../components/User/Profile.vue";
import UserHome from "../components/User/Home.vue";
import { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/user/:id",
    // To render components into this nested router-view, we need to use the children option in any of the routes:
    component: User,
    children: [
      {
        // UserProfile will be rendered inside User component <router-view>
        // when /user/:id/profile is matched
        path: "profile",
        component: UserProfile,
      },
      {
        // UserPost will be rendered inside User component <router-view>
        // when /user/:id/posts is matched
        path: "posts",
        component: UserPost,
      },
      {
        // Default Page
        // UserHome will be rendered inside User component <router-view>
        // when /user/:id is matched
        path: "",
        component: UserHome,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
