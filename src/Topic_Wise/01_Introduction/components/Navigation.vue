<template>
  <nav>
    <!-- 
        *) router-link:
            Note how instead of using regular a tags, we use a custom component router-link to create links. This allows Vue Router to change the URL without reloading the page, handle URL generation as well as its encoding. We will see later how to benefit from these features.
     -->
    <router-link to="/">Home</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/create">CreatePost</router-link>
  </nav>
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
