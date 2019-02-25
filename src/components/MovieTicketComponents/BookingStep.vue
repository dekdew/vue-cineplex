<template>
  <div class="container steps pt2">
    <div class="step-item is-info is-active">
      <div class="step-marker">1</div>
      <div class="step-details">
        <p>Select Showtime</p>
      </div>
    </div>
    <div class="step-item is-info">
      <div class="step-marker">2</div>
      <div class="step-details">
        <p>Select Seat</p>
      </div>
    </div>
    <div class="step-item is-info">
      <div class="step-marker">3</div>
      <div class="step-details">
        <p>Payment</p>
      </div>
    </div>
    <div class="step-item is-info">
      <div class="step-marker">4</div>
      <div class="step-details">
        <p>Finish</p>
      </div>
    </div>

    <div class="steps-content">
      <MovieMiniInfo :movie="movie" />
			<!-- step 1 -->
      <div class="step-content has-text-centered is-active">
        <Step1 :cinemas="cinemas" />
      </div>

			<!-- step 2 -->
      <div class="step-content has-text-centered">
        c
      </div>

			<!-- step 3 -->
      <div class="step-content has-text-centered">
        d
      </div>

			<!-- step 4 -->
      <div class="step-content has-text-centered">
        e
      </div>
    </div>

    <div class="steps-actions">
      <div class="steps-action">
        <a data-nav="previous" class="button is-light">Previous</a>
      </div>
      <div class="steps-action">
        <a data-nav="next" class="button is-light">Next</a>
      </div>
    </div>
  </div>
</template>

<script>
import bulmaSteeps from 'bulma-steps/dist/js/bulma-steps.min.js'
import 'bulma-steps/dist/css/bulma-steps.min.css';
import MovieMiniInfo from '@/components/movieTicketComponents/MovieMiniInfo'
import Step1 from '@/components/movieTicketComponents/Step1'

export default {
	name: 'BookingStep',
  props: ['movie', 'cinemas'],
  components: {
    MovieMiniInfo,
    Step1
  },
  data() {
    return {
			steps: []
		}
  },
  mounted: function () {
    this.steps = bulmaSteeps.attach()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>