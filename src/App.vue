<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/chat">Chat App</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="#" class="button is-primary">
                <strong>Sign up</strong>
              </router-link>
              <button
                class="button is-light"
                to="#"
                @click.prevent="login"
                v-if="!activeUser"
              >Log in</button>
              <button class="button is-light" to="#" @click.prevent="logout" v-else>Log out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- routes will be rendered here -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeUser: null
    };
  },
  async created() {
    await this.refreshActiveUser();
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    $route: "refreshActiveUser"
  },
  methods: {
    login() {
      this.$auth.loginRedirect();
    },
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser();
    },
    async logout() {
      await this.$auth.logout();
      await this.refreshActiveUser();
      this.$router.push("/");
    }
  }
};
</script>