import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import { firebaseConfig } from "../app.config";

firebase.initializeApp(firebaseConfig);
import { AppService } from "@/fire-admin-vue/services/app.service";
/// Create AppService instance only one time.
const appService = new AppService();
createApp(App)
  .mixin({
    data() {
      return {
        app: appService /// Don't instantiate AppService() here.
      };
    }
  })
  .use(store)
  .use(router)
  .mount("#app");
