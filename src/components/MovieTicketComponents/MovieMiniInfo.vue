<template>
  <main style="background-color:#f5f7fb;">
    <div class="container py3 is-hidden-mobile">
      <div class="box"></div>
      <div class="poster px4">
        <div class="columns is-vcentered px4">
          <progressive-img class="img column mx3" :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
            :placeholder="'https://image.tmdb.org/t/p/w45' + movie.poster_path" />
          <div class="column">
            <p class="h3 bold">{{ movie.title }}</p>
            <p class="has-text-info" v-show="booking.date != null">{{ booking.date }} &nbsp;|&nbsp; {{ booking.time }}</p>
            <div v-show="booking.date == null">
              <p class="mt3">Genre: {{ movie.genres[0].name }}</p>
              <p><i class="fas fa-clock" /> {{ movie.runtime }} Mins</p>
              <router-link :to="`/movie/` + movie.id" class="button is-info is-outlined mt3">
                View Details
              </router-link>
            </div>
            <div v-show="booking.date != null">
              <p class="mt3 has-text-info"><i class="fas fa-map-marker-alt" /> &nbsp;{{ booking.cinema.name }}</p>
              <p class="mt1">CINEMA {{ booking.cinema.theater }} &nbsp;|&nbsp; <i class="fas fa-volume-up" /> ENG</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="is-hidden-tablet">
      <progressive-background class="backdrop" :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path"
        :placeholder="'https://image.tmdb.org/t/p/w45' + movie.backdrop_path" />
      <div class="columns is-mobile info is-vcentered p0 m0">
        <progressive-img class="column img" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" :placeholder="'https://image.tmdb.org/t/p/w45' + movie.poster_path" />
        <div class="column">
          <p class="bold has-text-white">{{ movie.title }}</p>
          <p class="has-text-white">Genre: {{ movie.genres[0].name }}</p>
          <p class="has-text-white"><i class="fas fa-clock" /> {{ movie.runtime }} Mins</p>
          <router-link :to="`/movie/` + movie.id" class="button is-white is-outlined is-small mt1">
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MovieMiniInfo',
  props: ['movie', 'booking'],
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
.backdrop:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-color: #0009;
  width: 100%;
  height: 100%;
}
.info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 80%;
}
</style>
