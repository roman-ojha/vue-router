<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationVue from "./components/Navigation.vue";
export default defineComponent({
  name: "App",
  components: {
    Navigation: NavigationVue,
  },
});
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
