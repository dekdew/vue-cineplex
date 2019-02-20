<template>
<carousel :autoplay="true" :loop="true" :perPage="1" :paginationEnabled="false" :autoplayTimeout="5000"
  :autoplayHoverPause="false">
  <slide v-for="slide in slides" :key="slide">
    <div class="main has-text-white" :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/w1280' + slide.backdrop_path + ')' }">
      <div class="container">
        <div class="inner">
          <h1 class="h1">{{ slide.title }}</h1>
          <p>In Theaters {{slide.release_date}}</p>
          <a class="button my1 is-info">
            <strong>GET TICKETS</strong>
            <img src="../../assets/ticket.svg" width="40px">
          </a>
          <p class="more underline">
            <a>View Details</a>
          </p>
        </div>
      </div>
    </div>
  </slide>
</carousel>
</template>

<script>
export default {
  name: 'HomeCarousel',
  props: ['slides', 'genres'],
  data () {
    return {
    }
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
  bottom: 7em;
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
