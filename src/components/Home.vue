<template>
  <div style="background-color:#f5f7fb;">
    <Loading v-if="isLoad" />
    <HomeCarousel :slides="slides" :genres="genres" />
    <Showtime :movies="movies" />
    <div class="container py4">
      <p class="is-size-4 bold has-text-info has-text-centered pb2">Movies</p>
      <b-tabs position="is-centered" class="block">
        <div class="main-content columns">
          <div class="container column is-10">
            <b-tab-item label="Now Showing">
              <div class="columns is-multiline m0 p0 is-centered">
                <div v-for="movie in filteredMovie" :key="movie.id" class="column is-4">
                  <MovieCard :movie="movie" :genres="genres" />
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Coming Soon">
              <div class="columns is-multiline m0 p0 is-centered">
                <div v-for="movie in filteredMovieComing" :key="movie.id" class="column is-4">
                  <MovieCard :movie="movie" :genres="genres" />
                </div>
              </div>
            </b-tab-item>
          </div>
          <Panel v-model="search" :genres="genres" />
        </div>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import Loading from '@/components/Loading'
import Showtime from '@/components/homeComponents/Showtime'
import HomeCarousel from '@/components/homeComponents/HomeCarousel'
import MovieCard from '@/components/homeComponents/MovieCard'
import Panel from '@/components/homeComponents/Panel'

export default {
  name: 'Home',
  components: {
    Loading,
    Showtime,
    HomeCarousel,
    MovieCard,
    Panel
  },
  data() {
    return {
      isLoad: true,
      slides: null,
      movies: null,
      upcoming: null,
      genres: null,
      search: ''
    }
  },
  mounted() {
    this.axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`).then((response) => {
      this.movies = response.data.results
    })
    this.axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`).then((response) => {
      this.upcoming = response.data.results
    })
    this.axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=bb6f51bef07465653c3e553d6ab161a8`).then((response) => {
      this.genres = response.data.genres
    })
    this.axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`).then((response) => {
      this.slides = response.data.results
    })
  },
  updated: debounce(function () {
    this.$nextTick(() => {
    this.isLoad = false
    })
  }, 1500),
  computed: {
    filteredMovie() {
      return this.movies.filter(movie => {
        return movie.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    filteredMovieComing() {
      return this.upcoming.filter(movie => {
        return movie.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
