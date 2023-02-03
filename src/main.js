import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";


Bugsnag.start({
  appVersion: "3.0.1",
  apiKey: "ceb06d2f1086242c28693908fe8f0241",
  plugins: [new BugsnagPluginVue()],
});
const bugsnagVue = Bugsnag.getPlugin("vue");

createApp(App).use(store).use(router).use(bugsnagVue).mount("#app");

Bugsnag.notify(new Error("error introduced in 3.0.1"));
console.log(process.env.NODE_ENV)
