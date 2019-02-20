<template>
<div>
</div>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: ['id'],
  data() {
    return {
      data: null
    }
  },
  mounted() {
    this.axios.get(`https://api.themoviedb.org/3/movie/` + this.id + `?api_key=bb6f51bef07465653c3e553d6ab161a8`).then((response) => {
      this.data = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
