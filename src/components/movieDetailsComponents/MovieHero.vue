<template>
  <div class="main has-text-white" :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/w1280' + images.backdrops[1].file_path + ')' }">
    <div class="container">
      <div class="inner">
        <h1 class="h1">{{ data.title }} ({{ new Date(data.release_date).getFullYear() }})</h1>
        <p><i class="fas fa-clock fa-inverse" /> {{ data.runtime }} Mins</p>
        <div class="tags are-medium">
          <span class="tag is-dark" v-for="genre in data.genres" :key="genre">
            {{ genre.name }}
          </span>
        </div>
        <a class="button is-info">
          <strong>GET TICKETS</strong>
          <img src="../../assets/ticket.svg" width="40px">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieHero',
  props: ['data', 'images'],
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.data.genres)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: top;
  position: relative;
  overflow: hidden;
}

.main:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 1) 80%);
  width: 100%;
  height: 25em;
}

.container {
  z-index: 2;
  position: absolute;
  left: 50%;
  bottom: 3em;
}
.inner {
  position: relative;
  left: -50%;
}
.button {
  width: 224px;
  padding: 25px 0;
}
.button strong {
  position: absolute;
  left: 30px;
}
.inner img {
  position: absolute;
  right: 20px;
}
a {
  color: #fff;
}
.more a:hover {
  color: #fff;
  text-shadow: 0px 0px 5px #fff5;
}
</style>
