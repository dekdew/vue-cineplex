<template>
  <div style="background-color:#f5f7fb;">
    <MovieHero :data="data" :images="images" />
    <MovieInfo :data="data" :images="images" :videos="videos" :credits="credits" />
    <div class="container py4">
      <div class="columns is-multiline m0 p0 is-centered">
        <div v-for="movie in 3" :key="movie" class="column is-4">
          <MovieCard :movie="recommendations[movie]" :genres="genres" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieHero from '@/components/movieDetailsComponents/MovieHero'
import MovieInfo from '@/components/movieDetailsComponents/MovieInfo'
import MovieCard from '@/components/homeComponents/MovieCard'

export default {
  name: 'MovieDetails',
  props: ['id'],
  components: {
    MovieHero,
    MovieInfo,
    MovieCard
  },
  data() {
    return {
      data: null,
      videos: null,
      images: null,
      credits: null,
      recommendations: null,
      genres: null
    }
  },
  mounted() {
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US`).then((response) => {
      this.data = response.data
    })
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `/videos?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US`).then((response) => {
      this.videos = response.data.results
    })
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `/images?api_key=bb6f51bef07465653c3e553d6ab161a8`).then((response) => {
      this.images = response.data
    })
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `/credits?api_key=bb6f51bef07465653c3e553d6ab161a8`).then((response) => {
      this.credits = response.data
    })
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `/recommendations?api_key=bb6f51bef07465653c3e553d6ab161a8`).then((response) => {
      this.recommendations = response.data.results
    })
    this.axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=bb6f51bef07465653c3e553d6ab161a8`).then((response) => {
      this.genres = response.data.genres
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
