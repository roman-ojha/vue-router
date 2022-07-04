import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";

/*
/user/roman/profile                     /user/razz/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
*/

const app = createApp(App);
app.use(router);
app.mount("#app");
