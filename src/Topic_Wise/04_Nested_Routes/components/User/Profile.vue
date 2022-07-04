<template>
  <div>
    <h1>{{ $route.params.id }} Profile</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Profile",
});
</script>

<style scoped></style>
