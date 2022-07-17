<template>
  <div>
    <!-- literal string push -->
    <button @click="$router.push('/user/roman')">Roman</button>
    <button @click="toRazz">Razz</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Navigation",
  methods: {
    toRazz() {
      // object with path
      this.$router.push({ path: "/user/razz" });
    },
  },
});
</script>

<style scoped>
a {
  margin: 10px;
}
</style>
