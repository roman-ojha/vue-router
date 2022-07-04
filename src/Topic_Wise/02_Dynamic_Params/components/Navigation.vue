<template>
  <div>
    <!-- you can route to dynamic route by passing dynamic value  -->
    <router-link to="/users/roman/posts/300">Roman</router-link>
    <!-- like in this case dynamic value are id:roman, postId:300 -->
    <router-link to="/users/razz/posts/100">Razz</router-link>
    <!-- One thing to note when using routes with params is that when the user navigates from /users/roman to /users/razz, the same component instance will be reused. Since both routes render the same component, this is more efficient than destroying the old instance and then creating a new one. However, this also means that the lifecycle hooks of the component will not be called. -->

    <!-- In More detail:
    Reacting to Params Changes : https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes -->
  </div>
</template>

<script lang="ts">
export default {
  name: "Navigation",
};
</script>

<style scoped>
a {
  margin: 10px;
}
</style>
