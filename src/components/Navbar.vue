<template>
  <nav class="navbar p1" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" height="28">
      </router-link>

      <a role="button" @click="showNav = !showNav" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <router-link to="/signup" class="button is-info">
              <strong>Sign up</strong>
            </router-link> -->
            <section>
              <button class="button is-info is-medium signin"
            @click="Sign_in()">
            <strong>Sign up</strong>
            
        </button>

         <button class="button is-medium login"
            @click="Login()">
            <strong>Log in</strong>
        </button>
         
            </section>
            
            
       
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        showNav: false
      }
    }
  }
</script>

<script>
    const LoginModalForm = {
        props: ['email', 'password'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-info">Login</button>
                    </footer>
                </div>
            </form>
        `
    };
    const SigninModalForm = {
        props: ['email', 'password'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Sign up</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>
                        <b-field label="Re-Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Re-password"
                                required>
                            </b-input>
                        </b-field>

                        
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-info">Sign up</button>
                    </footer>
                </div>
            </form>
        `
    };

    export default {
      methods: {
            Login() {
                this.$modal.open({
                    parent: this,
                    component: LoginModalForm,
                    hasModalCard: true
                })
            },
            Sign_in() {
                this.$modal.open({
                    parent: this,
                    component: SigninModalForm,
                    hasModalCard: true
                })
            }
        }
        // components: {
        //     ModalForm
        // },
        // data() {
        //     return {
        //         isComponentModalActive: false,
        //         formProps: {
        //             email: 'email@example.com',
        //             password: 'example'
        //         },
        //         isComponentSignActive: false
        //     }
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
