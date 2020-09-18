<template>
  <div class="container pt2">
    <div class="pb2">
      <step-indicator
        :current="booking.steps"
        total="4"
        currentColor="#2e66cf"
        defaultColor="#aaa"
      />
    </div>
    <div class="container">
      <MovieMiniInfo :movie="movie" :booking="booking" />
      <!-- step 1 -->
      <div v-if="booking.steps == 0" class="has-text-centered">
        <Step1 v-model="booking" :cinemas="cinemas" />
      </div>

      <!-- step 2 -->
      <div v-if="booking.steps == 1" class>
        <Step2 v-model="booking" :booking="booking" :movie="movie" />
      </div>

      <!-- step 3 -->
      <div v-if="booking.steps == 2" class>
        <Step3 v-model="booking" :booking="booking" />
      </div>

      <!-- step 4 -->
      <div v-if="booking.steps == 3" class>
        <Step4 :booking="booking" />
      </div>
    </div>
  </div>
</template>

<script>
import StepIndicator from "vue-step-indicator";
import "vue-step-indicator/dist/vue-step-indicator.css";
import MovieMiniInfo from "@/components/MovieTicketComponents/MovieMiniInfo.vue";
import Step1 from "@/components/MovieTicketComponents/Step1.vue";
import Step2 from "@/components/MovieTicketComponents/Step2.vue";
import Step3 from "@/components/MovieTicketComponents/Step3.vue";
import Step4 from "@/components/MovieTicketComponents/Step4.vue";

export default {
  name: "BookingStep",
  props: ["movie", "cinemas"],
  components: {
    StepIndicator,
    MovieMiniInfo,
    Step1,
    Step2,
    Step3,
    Step4,
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
        seats: [],
        total: null,
      },
    };
  },
  mounted: function () {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>