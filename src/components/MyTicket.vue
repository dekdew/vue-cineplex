<template>
    

    <section>
        
    <div v-for="seat in booking.seats" :key="seat.seat_id">
      <div class="card p2">
        <div class="columns is-vcentered">
          <div class="column is-3 has-text-centered">
            <p class="has-text-info h1">{{ seat.seat_id }}</p>
            <p>CINEMA {{ booking.cinema.theater }}</p>
          </div>
          <div class="column left">
              <router-link to="/refund" class="delete"></router-link>
            <p class="bold">{{ booking.movie }}</p>
            <p>Genre: Action | 122 Mins</p>
            <p class="has-text-info mt2">{{ booking.date }} | {{ booking.time }}</p>
            <p class="has-text-info">{{ booking.cinema.name }}</p>
          </div>
        </div>
      </div>
    </div>
    
 

        
        
    </section>
</template>

<script>
    export default {
        props: ['movie', 'cinemas'],
        data() {
            return {
                booking: {
                    movie:'Alita: Battle Angel',
        steps: 0,
        date: 'Wed Feb 27 2019',
        time: '13:30',
        cinema: {
          theater: 1,
          name: "Emprive' Cineclub Emporium Sukhumvit"
        },
        seats: ['C10'],
        total: 1
      },
                isActive: true
            }
        }
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
.delete{
    position: relative;
    transform: translateX(2000%);
}
</style>
