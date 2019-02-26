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
      <div class="column box p3 is-one-quarters">
        <p class="bold">{{ movie.title }}</p>
        <p class="has-text-info">{{ booking.date }}</p>
        <p class="has-text-info">{{ booking.time }}</p>
        <p class="bold mt3">CINEMA {{ booking.cinema.theater }}</p>
        <p class="has-text-info">{{ booking.cinema.name }}</p>
				<p>{{ selected }}</p>
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
        return x.seat_id;
			}).indexOf(e.seat_id);

      if (e.isClick) {
				this.selected.splice(index, 1);
      } else {
				this.selected.push(e)
      }
      e.isClick = !e.isClick
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
</style>

