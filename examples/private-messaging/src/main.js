import Vue from "vue";
import App from "./App.vue";
import { createApp } from "vue";

Vue.config.productionTip = false;

const app = createApp({
  ...App
})
app.mount('#app')