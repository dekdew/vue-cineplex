<template>
  <div class="container py4">
    <div class="columns">
      <div class="column is-three-quarters p4">
        <div v-for="row in seats.slice().reverse()" :key="row.id" class="columns has-text-centered">
          <div v-for="seat in row.seats" :key="seat.id" class="column">
            <div class="available" v-if="seat.status" @click="clickSeat(seat)">
              <img v-if="seat.isClick" class="seat" src="@/assets/seat/select.svg" />
              <img v-else class="seat" :src="require('@/assets/seat/' + seat.type_id + '.svg')" />
            </div>
            <div v-else-if="!seat.status">
              <img class="seat" src="@/assets/seat/reserved.svg">
            </div>
          </div>
        </div>
      </div>
      <div class="recap column box p3 is-one-quarters">
        <p class="bold">{{ movie.title }}</p>
        <p class="has-text-info">{{ booking.date }}</p>
        <p class="has-text-info">{{ booking.time }}</p>
        <p class="bold mt3">CINEMA {{ booking.cinema.theater }}</p>
        <p class="has-text-info">{{ booking.cinema.name }}</p>
        <div class="card mt4 p2 has-text-centered">
          <div>
            <p>Selected Seat</p>
            <div v-if="selected.length != 0" class="columns is-multiline is-centered pt1">
              <p class="has-text-info bold column is-3 h4" v-for="s in selected" :key="s.seat_id">{{s.seat_id}}</p>
            </div>
            <p v-else class="pt1">-</p>
          </div>
          <div class="mt4">
            <p>Total</p>
            <p class="has-text-info bold h2 pt1">{{ total }} THB</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/seats.json'

export default {
  name: "Step2",
  props: ['booking', 'movie'],
  data() {
    return {
      seats: api.rows,
      seatType: api.seat_type,
      selected: []
    }
  },
  methods: {
    clickSeat: function (e) {
      let index = this.selected.map(x => {
        return x.seat_id
      }).indexOf(e.seat_id)

      if (e.isClick) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(e)
      }
      e.isClick = !e.isClick
    }
  },
  computed: {
    total: function () {
      let subtotal = 0
      this.selected.forEach(seat => {
        let index = this.seatType.map(x => {
          return x.type_id
        }).indexOf(seat.type_id)
        subtotal += this.seatType[index].price
      })
      return subtotal
    }
  }
}
</script>

<style scoped>
.seat {
	max-height: 64px;
}
.available {
	cursor: pointer;
}
.recap {
	background-color: #f5f7fb;
}
</style>

