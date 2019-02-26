<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign Up</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input type="email" :value="email" placeholder="Your email" required>
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" :value="password" password-reveal placeholder="Your password" required>
          </b-input>
        </b-field>

        <b-field label="Confirm password">
          <b-input type="password" :value="cpassword" password-reveal placeholder="Confirm your password" required>
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-info" @click="$parent.close()">Sign up</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    props: ['email', 'password', 'cpassword']
}
</script>
