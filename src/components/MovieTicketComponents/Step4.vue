<template>
  <div class="my4">
    <div v-for="seat in booking.seats" :key="seat.seat_id">
      <div class="card p2">
        <div class="columns is-vcentered">
          <div class="column is-3 has-text-centered">
            <p class="has-text-info h1">{{ seat.seat_id }}</p>
            <p>CINEMA {{ booking.cinema.theater }}</p>
          </div>
          <div class="column left">
            <p class="bold">{{ booking.movie.title }}</p>
            <p>Genre: {{ booking.movie.genres[0].name }} | {{ booking.movie.runtime }} Mins</p>
            <p class="has-text-info mt2">{{ booking.date }} | {{ booking.time }}</p>
            <p class="has-text-info">{{ booking.cinema.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons is-centered mt3">
      <a class="button">Send to email</a>
      <router-link to="/" class="button is-info">Continue</router-link>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Step4',
	props: ['booking']
}
</script>

<style scoped>
.card {
	max-width: 600px;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
}
.left {
	border-left: 1px solid #ddd;
}
</style>
