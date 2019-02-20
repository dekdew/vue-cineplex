<template>
  <div>
    <div class="main has-text-white" :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/w1280' + data.backdrop_path + ')' }">
      <div class="container">
        <div class="inner">
          <h1 class="h1">{{ data.title }}</h1>
          <p>Genre: {{data.genres[0].name}} | {{ data.runtime }} Mins | Release Date: {{data.release_date}}</p>
          <a class="button my1 is-info">
            <strong>GET TICKETS</strong>
            <img src="../assets/ticket.svg" width="40px">
          </a>
        </div>
        <div class="trailer">
          <iframe class="is-16by9" :src="`https://www.youtube.com/embed/`+ videos[0].key"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: ['id'],
  data() {
    return {
      data: null,
      videos: null,
      isImageModalActive: false
    }
  },
  mounted() {
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US`).then((response) => {
      this.data = response.data
    })
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `/videos?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US`).then((response) => {
      this.videos = response.data.results
      console.log(this.videos)
    })
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
.trailer {
    position: absolute;
    right: 50%;
}
</style>
