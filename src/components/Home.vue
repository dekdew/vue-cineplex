<template>
  <div>
    <HomeCarousel />
  </div>
</template>

<script>
import HomeCarousel from '@/components/homeComponents/HomeCarousel'
export default {
  name: 'Home',
  components: {HomeCarousel},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  margin-top: -3em;

}
</style>
