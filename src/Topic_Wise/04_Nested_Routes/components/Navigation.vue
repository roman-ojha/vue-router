<template>
  <div>
    <router-link to="/user/roman">Roman</router-link>
    <router-link to="/user/razz">Razz</router-link>
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
