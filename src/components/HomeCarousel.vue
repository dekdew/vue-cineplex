<template>
  <carousel :autoplay="true" :loop="true" :perPage="1" :paginationEnabled
="false" :autoplayHoverPause="true" :autoplayTimeout="5000">
    <slide>
      <!-- alita -->
      <img src="https://www.majorcineplex.com/uploads/slidebanner/682/slidebanner_bg_682.jpg" width="100%">
    </slide>
    <slide>
      <!-- caap -->
      <img src="https://www.majorcineplex.com/uploads/slidebanner/745/slidebanner_bg_745.jpg" width="100%">
    </slide>
    <slide>
      <!-- dragon -->
      <img src="https://www.majorcineplex.com/uploads/slidebanner/762/slidebanner_bg_762.jpg" width="100%">
    </slide>
    <slide>
      <!-- spiderman -->
      <img src="https://www.majorcineplex.com/uploads/slidebanner/744/slidebanner_bg_744.jpg" width="100%">
    </slide>
    <slide>
      <!-- alita -->
      <img src="https://www.majorcineplex.com/uploads/slidebanner/779/slidebanner_bg_779.jpg" width="100%">
    </slide>
  </carousel>
</template>

<script>
export default {
  name: 'HomeCarousel',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
