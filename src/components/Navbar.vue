<template>
  <nav class="navbar p1" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" height="28">
      </router-link>
      <a role="button" @click="showNav = !showNav" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
        data-target="navbarBasic">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasic" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <div class="navbar-item">
          <div v-show="!isLogin" class="buttons">
            <button class="button is-info" @click="isComponentSignupActive = true;showNav = !showNav">
              Sing Up
            </button>
            <button class="button" @click="isComponentLoginActive = true;showNav = !showNav">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isComponentSignupActive" has-modal-card>
      <signup-form v-bind="signupFormProps" />
    </b-modal>
    <b-modal :active.sync="isComponentLoginActive" has-modal-card>
      <login-form v-bind="loginFormProps" @login="showStatus" />
    </b-modal>
  </nav>
</template>

<script>
import SignupForm from '@/components/SignupForm'
import LoginForm from '@/components/LoginForm'

export default {
	name: 'Navbar',
	components: {
		SignupForm,
    LoginForm
  },
  data() {
    return {
			showNav: false,
			isComponentSignupActive: false,
      signupFormProps: {
        email: 'example@mail.com',
				password: 'example',
				cpassword: 'example'
      },
      isComponentLoginActive: false,
      loginFormProps: {
        email: 'example@mail.com',
        password: 'example'
			},
			isLogin: false
    }
	},
	methods: {
		showStatus: function (e) {
			this.isLogin = e;
		}
	}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>