<template>
  <div id="app">
    <Navbar/>
    <router-view :key="$route.fullPath"/>
    <seat @chooseSeat="handleChooseSeat"
          :selectedSeat="selectedSeat"/>
    <p>Count:{{ status.count }}, Price:{{ status.price }}</p>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Seat from '@/components/MovieTicketComponents/Seat'

export default {
  name: 'App',
  components: {Navbar, Seat},
  data(){
    return {
      selectedSeat: [],
      status: {count:0, price:0}
    }
  },
  methods:{
    handleChooseSeat(seat){
      const ids = this.selectedSeat.map(s=>s.id)
      const idx = ids.indexOf(seat.id)

      if(idx === -1){
        this.selectedSeat.push(seat)
      }else{
        this.selectedSeat.splice(idx, 1)
      }

      this.status = this.selectedSeat.reduce((summary, s) => {
        summary.count++
        summary.price+=s.price
        return summary
      }, {count:0, price:0})
     
    
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
