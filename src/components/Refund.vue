<template>
  <div class="container">
    <div class="box my4 px4 py3">
      <h2 class="has-text-centered h2 has-text-info">Confirmation</h2>
      <p class="has-text-centered mt2">Please fill in the information below for refund tickets</p>
      <b-field class="my1">
        <b-input
          type="email"
          value="passawit@gmail.com"
          icon="envelope"
          placeholder="Email Assress"
        />
      </b-field>
      <b-field class="my1">
        <b-input placeholder="Mobile" icon="mobile-alt" />
      </b-field>

      <h2 class="has-text-centered h2 has-text-info mt3">Selected Refund Method</h2>
      <div>
        <b-field position="is-centered block mt1">
          <b-radio class="mx3" v-model="radio" native-value="cash" type="is-info">Cash</b-radio>
          <b-radio class="mx3" v-model="radio" native-value="creditcard" type="is-info">Credit Card</b-radio>
          <b-radio class="mx3" v-model="radio" native-value="promptpay" type="is-info">PromptPay</b-radio>
        </b-field>
      </div>

      <div v-if="radio == 'creditcard'" class="mt1">
        <div class="columns">
          <div class="column is-10">
            <b-field>
              <b-input placeholder="Card Number" icon="credit-card" expanded="true" />
            </b-field>
          </div>
          <div class="column">
            <b-field>
              <b-input placeholder="CVV" expanded="true" maxlength="3" />
            </b-field>
          </div>
        </div>
      </div>

      <div class="buttons is-centered mt2">
        <span v-if="radio == ''" class="button is-info" disabled>Refund</span>
        <router-link to="/" v-else class="button is-info">Refund</router-link>
        <router-link to="/myticket" class="button is-info is-outlined">Cancel</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
    };
  },
};
</script>

<style scoped>
</style>
