<template>
  <div>
    <h1>Hello {{ $route.params.id }}</h1>
    <!-- https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location -->

    <!-- Replace current location -->
    <!-- It acts like router.push, the only difference is that it navigates without pushing a new history entry, as its name suggests - it replaces the current entry. -->
    <button
      @click="$router.replace({ path: `/user/${$route.params.id}/profile` })"
    >
      Profile
    </button>
    <button @click="$router.replace(`/user/${$route.params.id}/posts`)">
      Posts
    </button>

    <!-- Traverse history -->
    <!-- This method takes a single integer as parameter that indicates by how many steps to go forward or go backward in the history stack, similar to window.history.go(n). -->
    <button @click="$router.go(-3)">Go back -3</button>
    <button @click="$router.go(3)">Go back +3</button>

    <!-- 
      # History Manipulation:
          You may have noticed that router.push, router.replace and router.go are counterparts of window.history.pushState, window.history.replaceState and window.history.go, and they do imitate the window.history APIs.

          Therefore, if you are already familiar with Browser History APIs, manipulating history will feel familiar when using Vue Router.

          It is worth mentioning that Vue Router navigation methods (push, replace, go) work consistently no matter the kind of history option is passed when creating the router instance.
     -->

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "User",
  data() {
    return {};
  },
  mounted() {},
});
</script>

<style scoped>
div {
  margin-top: 10px;
}
a {
  margin: 10px;
}
</style>
