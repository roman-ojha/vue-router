<template>
  <div>
    <h1>Hello {{ $route.params.id }}</h1>
    <!-- https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location -->
    <button
      @click="$router.push({ path: `/user/${$route.params.id}/profile` })"
    >
      Profile
    </button>
    <button @click="$router.push(`/user/${$route.params.id}/posts`)">
      Posts
    </button>
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
