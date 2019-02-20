<template>
  <carousel :autoplay="true" :loop="true" :perPage="1" :paginationEnabled
="false" :autoplayTimeout="5000" :autoplayHoverPause="false">
    <slide v-for="slide in slides" :key="slide">
      <div class="main has-text-white" v-bind:style="{ 'background-image': 'url(' + slide.url + ')' }">
        <div class="container">
          <div class="inner">
            <h1 class="h1">{{ slide.title }}</h1>
            <p>{{ slide.time }} | {{slide.genre}} | {{slide.releaseDate}}</p>
            <a class="button my1 is-info">
              <b>GET TICKETS</b>
              <img src="../../assets/ticket.svg" width="40px">
            </a>
            <p class="more">
              <a href="">View Details</a> | <a href="">Watch the Trailer</a>
            </p>
          </div>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import data from '../../api/data'

export default {
  name: 'HomeCarousel',
  data () {
    return {
      slides: slides
    }
  }
}
console.log(slides)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 70vh;
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
  bottom: 5em;
}
.inner {
  position: relative;
  left: -50%;
}
.button {
  width: 224px;
  padding: 20px 0;
}
.button b {
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
  text-shadow: 0px 0px 9px #fff;
}
</style>
