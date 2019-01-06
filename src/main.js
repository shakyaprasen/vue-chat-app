import Vue from "vue";
import "./registerServiceWorker";
import "bulma/css/bulma.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSocketIO from 'vue-socket.io'
import App from "./App.vue";
import router from "./router";

library.add(faCoffee)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://chat-app-vue.herokuapp.com',
  vuex: {
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
