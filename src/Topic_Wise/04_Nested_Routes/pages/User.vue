<template>
  <div>
    <h1>Hello {{ $route.params.id }}</h1>
    <!-- dynamic route to user page nested route -->
    <router-link :to="`/user/${$route.params.id}/profile`">Profile</router-link>
    <router-link :to="`/user/${$route.params.id}/posts`">posts</router-link>

    <!-- need to use 'router-view' template and inside that template vue will render all the children route of this component according to url -->
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
