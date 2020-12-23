import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import { firebaseConfig } from "../app.config";

firebase.initializeApp(firebaseConfig);
import { AppService } from "@/fire-admin-vue/services/app.service";

createApp(App)
  .mixin({
    data() {
      return {
        app: new AppService()
      };
    }
  })
  .use(store)
  .use(router)
  .mount("#app");
