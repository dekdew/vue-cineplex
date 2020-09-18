<template>
  <nav class="navbar p1" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" height="28" />
      </router-link>
      <a
        role="button"
        @click="showNav = !showNav"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasic" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="!isLogin" class="buttons">
            <button
              class="button is-info"
              @click="isComponentSignupActive = true;showNav = !showNav"
            >Sing Up</button>
            <button class="button" @click="isComponentLoginActive = true;showNav = !showNav">Login</button>
          </div>
          <div v-if="isLogin">
            <nav class role="navigation" aria-label="dropdown">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <i class="far fa-user-circle" />&nbsp;Passawit
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">My Profile</a>
                  <router-link to="/myticket" class="navbar-item">My Tickets</router-link>
                  <hr class="navbar-divider" />
                  <div class="navbar-item">
                    <button class="button is-small is-fullwidth" @click="logout">
                      <i class="fa fa-sign-out-alt" />&nbsp;Log Out
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isComponentSignupActive" has-modal-card>
      <signup-form v-bind="signupFormProps" />
    </b-modal>
    <b-modal :active.sync="isComponentLoginActive" has-modal-card>
      <login-form v-bind="loginFormProps" @login="login" />
    </b-modal>
  </nav>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Navbar",
  components: {
    SignupForm,
    LoginForm,
  },
  data() {
    return {
      showNav: false,
      isComponentSignupActive: false,
      signupFormProps: {
        email: "passawit@gmail.com",
        password: "example",
        cpassword: "example",
      },
      isComponentLoginActive: false,
      loginFormProps: {
        email: "passawit@gmail.com",
        password: "example",
      },
      isLogin: false,
    };
  },
  methods: {
    login: function (e) {
      this.isLogin = e;
    },
    logout: function () {
      this.isLogin = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>