<template>
  <div style="background-color:#f5f7fb;">
    <HomeCarousel :slides="slides" />
    <div class="container py4">
      <div class="columns is-multiline m0 p0 is-centered">
        <div v-for="movie in movies" :key="movie" class="column is-4">
          <MovieCard :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '@/components/homeComponents/HomeCarousel'
import MovieCard from '@/components/homeComponents/MovieCard'

export default {
  name: 'Home',
  components: {HomeCarousel, MovieCard},
  data () {
    return {
      slides: slides,
      movies: movies
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
