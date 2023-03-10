import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";


Bugsnag.start({
  appVersion: "4.0.0",
  apiKey: "ceb06d2f1086242c28693908fe8f0241",
  plugins: [new BugsnagPluginVue()],
  releaseStage: 'production'
});
const bugsnagVue = Bugsnag.getPlugin("vue");

createApp(App).use(store).use(router).use(bugsnagVue).mount("#app");

Bugsnag.notify(new Error("error introduced in 4.0.0"));
console.log(process.env.NODE_ENV)
console.log('task-1')
