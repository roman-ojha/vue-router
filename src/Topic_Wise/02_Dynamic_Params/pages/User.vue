<template>
  <div>
    <!-- we can access the dynamic value of the params like this -->
    <h1>User {{ $route.params.id }}</h1>
    <h1>userId Data {{ userId }}</h1>
    <h2>PostID {{ $route.params.postId }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "User",
  data() {
    return {
      userId: "",
    };
  },
  mounted() {
    this.userId = this.$route.params.id as string;
  },
});
</script>

<style scoped>
div {
  margin-top: 10px;
}
</style>
