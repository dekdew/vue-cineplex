<template>
  <div style="background-color:#f5f7fb;">
    <MovieHero :data="data" :images="images" />
    <MovieInfo :data="data" :images="images" :videos="videos" />
  </div>
</template>

<script>
import MovieHero from '@/components/movieDetailsComponents/MovieHero'
import MovieInfo from '@/components/movieDetailsComponents/MovieInfo'

export default {
  name: 'MovieDetails',
  props: ['id'],
  components: {
    MovieHero,
    MovieInfo
  },
  data() {
    return {
      data: null,
      videos: null,
      images: null
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
