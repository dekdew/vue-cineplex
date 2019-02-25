<template>
  <main style="background-color:#f5f7fb;">
    <div class="container py3">
      <div class="box"></div>
      <div class="poster px4">
        <div class="columns is-vcentered">
          <progressive-img class="img column mx4" :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
            :placeholder="'https://image.tmdb.org/t/p/w45' + movie.poster_path" />
          <div class="column">
            <p class="h3 bold">{{ movie.title }}</p>
            <p class="mt3">Genre: {{ movie.genres[0].name }}</p>
            <p><i class="fas fa-clock" /> {{ movie.runtime }} Mins</p>
            <router-link :to="`/movie/` + movie.id" class="button is-info is-outlined mt3">
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MovieMiniInfo',
  props: ['movie'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.poster {
  position: relative;
}
.box {
  position: absolute;
  height: 370px;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 1344px;
  transform: translate(-50%, -50%);
}
.img {
  box-shadow: 0 5px 10px #0005;
}
</style>
