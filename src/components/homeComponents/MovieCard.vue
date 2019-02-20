<template>
  <div class="card image is-3by5" :style="{ 'background-image': 'url(' + movie.poster + ')' }">
    <div class="title">{{ movie.name.en }}</div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  box-shadow: 0 10px 25px 0 #0008;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all .5s;
}
.card:hover .title {
  padding-bottom: 50px;
  opacity: 1;
  transition: all .5s;
}
.card .title {
  position: absolute;
  width: 100%;
  bottom: 0;
  font-size: 26px;
  font-weight: 300;
  padding: 30px 0;
  color: #fff;
  background: linear-gradient(to top, #000, transparent);
  text-transform: uppercase;
  text-align: center;
  opacity: 0;
  transition: .5s;
}
</style>
