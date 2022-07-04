<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import NavigationVue from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation: NavigationVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 60px;
}
</style>
