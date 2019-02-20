<template>
  <div class="card">
    <div class="poster"><img :src="movie.poster"></div>
    <div class="details">
      <p class="has-text-white h3">{{ movie.name.en }}<br><span class="has-text-warning p0 m0 h4">{{ movie.name.th }}</span></p>

      <div class="tags are-medium">
        <span class="tag is-dark" v-for="categorie in movie.categories" :key="categorie">
          {{ categories.find(item => item.id === categorie).name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MovieCard',
    props: ['movie'],
    data() {
      return {
        categories: categories
      }
    },
    methods: {
      stopVideo: function () {
        player.stopVideo();
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
  transition: all .3s;
}

.card:hover {
  box-shadow: 5px 5px 20px #0009;
}

.card .poster {
  position: relative;
  overflow: hidden;
}

.card .poster:before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  bottom: 0;
  background: linear-gradient(to top, #000, transparent);
  z-index: 1;
}

.card .poster img {
  width: 100%;
}

.details {
  position: absolute;
  padding: 20px;
  width: 100%;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 2;
}
</style>
