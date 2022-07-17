import User from "../pages/User.vue";
import UserPost from "../components/User/Post.vue";
import UserProfile from "../components/User/Profile.vue";
import UserHome from "../components/User/Home.vue";
import { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/user/:id",
    component: User,
    children: [
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "posts",
        component: UserPost,
      },
      {
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
