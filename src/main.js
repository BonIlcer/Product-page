import Vue from "vue";
import App from "./App.vue";
import Suggestions from "v-suggestions";
import "v-suggestions/dist/v-suggestions.css";
Vue.component("suggestions", Suggestions);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
