<template>
  <router-link :to="`/movie/` + movie.id">
    <div class="card">
      <div class="poster"><progressive-background class="img" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :placeholder="'https://image.tmdb.org/t/p/w45' + movie.poster_path" /></div>
      <div class="details">
        <p class="has-text-white h3">{{ movie.original_title }}<br><span class="has-text-warning p0 m0 h4">Release
            date: {{ new Date(movie.release_date).toLocaleDateString('en-TH') }}</span></p>

        <div class="tags are-medium">
          <span class="tag is-dark" v-for="genre in movie.genre_ids" :key="genre">
            {{ genres.find(item => item.id === genre).name }}
          </span>
        </div>

        <div class="info">
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'MovieCard',
    props: ['movie', 'genres'],
    data() {
      return {
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background: #000;
  overflow: hidden;
  box-shadow: 0 5px 10px #0005;
}

.card .poster {
  position: relative;
  overflow: hidden;
  height: 480px;
}

.card .poster:before {
  content: "";
  position: absolute ;
  bottom: -190px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg,#000 50%, transparent);
  transition: 0.5s;
  z-index: 1;
}

.card:hover .poster:before {
  bottom: 0;
}

.card .poster .img {
  z-index: 0;
  transition: 0.5s;
}

.card:hover .poster .img {
  transform: translateY(-30px) !important;
}

.details {
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 74%;
  bottom: -190px;
  left: 0;
  box-sizing: border-box;
  transition: 0.5s;
  z-index: 2;
}

.card:hover .details {
  bottom: 0;
}

.info {
  color: #fff5;
  transition: 0.3s;
}

.card:hover .info {
  color: #fff;
}
</style>
