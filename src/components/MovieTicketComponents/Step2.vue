<template>
  <div class="container py4">
    <div class="columns">
      <div class="column is-three-quarters">
        <div v-for="row in seats.slice().reverse()" :key="row.id" class="columns">
          <div v-for="seat in row.seats" :key="seat.id" class="column">
						{{seat.seat_id}}
					</div>
        </div>
      </div>
      <div class="column box p3 is-one-quarters">
        <p class="bold">{{ movie.title }}</p>
        <p class="has-text-info">{{ booking.date }}</p>
        <p class="has-text-info">{{ booking.time }}</p>
        <p class="bold mt3">CINEMA {{ booking.cinema.theater }}</p>
        <p class="has-text-info">{{ booking.cinema.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/seats.json'

export default {
  name: "Step2",
  props: ['booking', 'movie'],
  data() {
    return {
			seats: api.rows,
			seatType: api.seat_type
    }
  },
  mounted() {
    console.log(this.booking)
  }
}
</script>

