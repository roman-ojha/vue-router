<template>
  <div>
    <h1>{{ $route.params.id }} Posts</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Post",
});
</script>

<style scoped></style>
