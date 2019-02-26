<template>
    <div class="box" style="text-align:center;">
        <template v-for="s in seats">
            <button :class="className(s)" :disabled="s.seated" @click="chooseSeat(s)" :key="s.id">{{ s.id }}
            
            </button>
            <br :key="s.id" v-if="s.num==10">
            
        </template>
        <span> {{selectedSeat}}</span>
    </div>
</template>

<script>
import seat from '../../api/seat.json'

  export default {
      props:['selectedSeat'],
      methods:{
          className(seat){
              const ids = this.selectedSeat.map(s=>s.id)
              const idx = ids.indexOf(seat.id)

              return[
                  'button',
                  {'is-danger':seat.seated, 'is-primary':idx != -1}
              ]
          },
          chooseSeat(s){
             this.$emit('chooseSeat', s)
          }
      },
    computed: {
      seats(){
          return seat["seat"];
      }
  }
}
</script>

