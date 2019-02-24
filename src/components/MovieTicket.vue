<template>
  <div>
    <Loading v-if="isLoad" />
    <BookingNav :movies="movies" />
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import Loading from '@/components/Loading'
import BookingNav from '@/components/MovieTicketComponents/BookingNav'

export default {
  name: 'MovieTicket',
  props: ['id'],
  components: {
    BookingNav
  },
  data() {
    return {
      isLoad: true,
      movies: null,
    }
  },
  mounted() {
    this.axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`).then((response) => {
      this.movies = response.data.results
    })
  },
  updated: debounce(function () {
    this.$nextTick(() => {
      this.isLoad = false // runs only once
    })
  }, 1500)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
