<template>
  <div class="container pt2">
    <div class="pb2">
    <step-indicator :current="booking.steps" total="4" currentColor="#2e66cf" defaultColor="#aaa" />
</div>
    <div class="container">
      <MovieMiniInfo :movie="movie" :booking="booking" />
      <!-- step 1 -->
      <div v-if="booking.steps == 0" class="has-text-centered">
        <Step1 v-model="booking" :cinemas="cinemas" />
      </div>

      <!-- step 2 -->
      <div v-if="booking.steps == 1" class="">
        c
      </div>

      <!-- step 3 -->
      <div v-if="booking.steps == 2" class="">
        d
      </div>

      <!-- step 4 -->
      <div v-if="booking.steps == 3" class="">
        e
      </div>
    </div>
  </div>
</template>

<script>
import StepIndicator from 'vue-step-indicator'
import 'vue-step-indicator/dist/vue-step-indicator.css'
import MovieMiniInfo from '@/components/movieTicketComponents/MovieMiniInfo'
import Step1 from '@/components/movieTicketComponents/Step1'

export default {
	name: 'BookingStep',
  props: ['movie', 'cinemas'],
  components: {
    StepIndicator,
    MovieMiniInfo,
    Step1
  },
  data() {
    return {
      booking: {
        steps: 0,
        date: null,
        time: null,
        cinema: {
          theater: null,
          name: null,
        },
        seats: []
      }
		}
  },
  mounted: function () {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>