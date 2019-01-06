import Vue from "vue";
import Router from "vue-router";
import Auth from "@okta/okta-vue";
import Home from "./components/HelloWorld.vue";
import ChatBox from "./components/ChatBox.vue";

Vue.use(Auth, {
  issuer: 'https://dev-926166.oktapreview.com/oauth2/default',
  client_id: '{clientId}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
});

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback(),
    },
    {
      path: "/chat",
      name: "chat-box",
      component: ChatBox,
    },
  ]
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
