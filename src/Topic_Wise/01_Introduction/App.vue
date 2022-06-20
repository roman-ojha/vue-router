<template>
  <div>
    <!-- here we can import the Navigation bar -->
    <Navigation />
    <!-- Now here we have to load the router component -->
    <!-- 
      *) router-view:
        -> router-view will display the component that corresponds to the url. You can put it anywhere to adapt it to your layout.
     -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";

export default defineComponent({
  name: "App",
  components: { Navigation },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
