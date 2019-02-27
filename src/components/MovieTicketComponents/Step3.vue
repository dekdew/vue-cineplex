<template>
  <main>
    <div class="box my4 px4 py3">
      <h2 class="has-text-centered h2 has-text-info">Confirmation</h2>
      <p class="mt2">Please fill in the information below for receiving tickets</p>

      <b-field class="my1">
        <b-input type="email" value="passawit@gmail.com" placeholder="Email Assress" />
      </b-field>
      <b-field class="my1">
        <b-input placeholder="Mobile" />
      </b-field>

      <h2 class="has-text-centered h2 has-text-info mt3">Selected Payment Method</h2>
      <div>
        <b-field position="is-centered block mt1">
          <b-radio class="mx3" v-model="radio" native-value="default" type="is-info">
            Cash
          </b-radio>
          <b-radio class="mx3" v-model="radio" native-value="info" type="is-info">
            Credit Card
          </b-radio>
          <b-radio class="mx3" v-model="radio" native-value="success" type="is-info">
            PromptPay
          </b-radio>
        </b-field>
      </div>

      <div class="buttons has-addons is-centered mt3">
        <a v-if="radio == ''" class="button is-info is-centered" Disabled>PAY ({{ booking.total }} THB)</a>
				<a v-else class="button is-info is-centered" @click="updateBooking">PAY ({{ booking.total }} THB)</a>
			</div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Step3',
	props: ['booking'],
	data() {
		return {
			radio: ''
		}
	},
	methods: {
		updateBooking: function () {
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
			}
      this.$emit('input', this.booking)
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
	}
}
</script>

<style scoped>
.box {
	width: 40vw;
	left: 50%;
	transform: translateX(-50%);
	position: relative;
}
</style>
