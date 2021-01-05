import { registerMicroApps, start } from "qiankun";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:8080",
    container: "#son2",
    activeRule: "/son2"
  },
  {
    name: "vue app",
    entry: "//localhost:8080",
    container: "#son1",
    activeRule: "/son1"
  }
]);

start();
