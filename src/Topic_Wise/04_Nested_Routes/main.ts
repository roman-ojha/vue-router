import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";

/*
Note: Inside of a Vue instance, you have access to the router instance as $router. You can therefore call this.$router.push.

To navigate to a different URL, use router.push. This method pushes a new entry into the history stack, so when the user clicks the browser back button they will be taken to the previous URL.

This is the method called internally when you click a <router-link>, so clicking <router-link :to="..."> is the equivalent of calling router.push(...).
*/

const app = createApp(App);
app.use(router);
app.mount("#app");
