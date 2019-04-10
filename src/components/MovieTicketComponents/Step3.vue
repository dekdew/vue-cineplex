<template>
  <main>
    <div class="box my4 px4 py3">
      <h2 class="has-text-centered h2 has-text-info">Confirmation</h2>
      <p class="mt2">Please fill in the information below for receiving tickets</p>
      <b-field class="my1">
        <b-input
          type="email"
          value="passawit@gmail.com"
          icon="envelope"
          placeholder="Email Assress"
        />
      </b-field>
      <b-field class="my1">
        <b-input placeholder="Mobile" icon="mobile-alt"/>
      </b-field>

      <h2 class="has-text-centered h2 has-text-info mt3">Selected Payment Method</h2>
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
              <b-input placeholder="Card Number" icon="credit-card" expanded="true"/>
            </b-field>
          </div>
          <div class="column">
            <b-field>
              <b-input placeholder="CVV" expanded="true" maxlength="3"/>
            </b-field>
          </div>
        </div>
      </div>

      <div class="buttons has-addons is-centered mt2">
        <a
          v-if="radio == ''"
          class="button is-info is-centered"
          disabled
        >PAY ({{ booking.total }} THB)</a>
        <a
          v-else
          class="button is-info is-centered"
          @click="updateBooking"
        >PAY ({{ booking.total }} THB)</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Step3",
  props: ["booking"],
  data() {
    return {
      radio: ""
    };
  },
  methods: {
    updateBooking: function() {
      this.booking = {
        steps: 3,
        date: this.booking.date,
        time: this.booking.time,
        cinema: {
          theater: this.booking.cinema.theater,
          name: this.booking.cinema.name
        },
        seats: this.booking.seats,
        total: this.booking.total,
        movie: this.booking.movie
      };
      this.$emit("input", this.booking);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
.box {
  width: 40vw;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
}
</style>
