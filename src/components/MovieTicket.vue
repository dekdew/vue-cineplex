<template>
  <div>
    <Loading v-if="isLoad" />
    <BookingNav :movies="movies" :cinemas="cinemas" />
    <BookingStep :movie="data" :cinemas="cinemas" />
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import Loading from "@/components/Loading.vue";
import BookingNav from "@/components/MovieTicketComponents/BookingNav.vue";
import BookingStep from "@/components/MovieTicketComponents/BookingStep.vue";
import api from "../api/cinemas.json";

export default {
  name: "MovieTicket",
  props: ["id"],
  components: {
    Loading,
    BookingNav,
    BookingStep,
  },
  data() {
    return {
      isLoad: true,
      movies: null,
      data: null,
      cinemas: api,
    };
  },
  mounted() {
    this.axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`
      )
      .then((response) => {
        this.movies = response.data.results;
      });
    this.axios
      .get(
        `https://api.themoviedb.org/3/movie/` +
          this.id +
          `?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US`
      )
      .then((response) => {
        this.data = response.data;
      });
  },
  updated: debounce(function () {
    this.$nextTick(() => {
      this.isLoad = false;
    });
  }, 1500),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
