<template>
  <div class="container py4">
    <div class="columns">
      <div class="column is-three-quarters p4">
        <img class="mb3" src="@/assets/screen.svg">
        <div
          v-for="row in seats.slice().reverse()"
          :key="row.id"
          class="is-vertical-center columns has-text-centered"
        >
          <p class="left-row">{{ row.row_id }}</p>
          <div v-for="seat in row.seats" :key="seat.id" class="column">
            <div class="available" v-if="seat.status" @click="clickSeat(seat)">
              <div
                v-if="seat.isClick && seat.type_id == '01'"
                class="seat"
                src="@/assets/seat/select.svg"
              >
                <img class="seat" src="@/assets/seat/select.svg">
                <img class="seat" src="@/assets/seat/select.svg">
              </div>
              <img v-else-if="seat.isClick" class="seat" src="@/assets/seat/select.svg">
              <img
                v-else-if="seat.type_id == '01'"
                class="pair"
                :src="require('@/assets/seat/' + seat.type_id + '.svg')"
              >
              <img v-else class="seat" :src="require('@/assets/seat/' + seat.type_id + '.svg')">
            </div>
            <div v-else-if="!seat.status">
              <div v-if="seat.type_id == '01'">
                <img class="seat" src="@/assets/seat/reserved.svg">
                <img class="seat" src="@/assets/seat/reserved.svg">
              </div>
              <img v-else class="seat" src="@/assets/seat/reserved.svg">
            </div>
          </div>
          <p class="right-row">{{ row.row_id }}</p>
        </div>
      </div>
      <div class="column is-one-quarters">
        <div class="recap p3 card">
          <p class="bold">{{ movie.title }}</p>
          <p class="has-text-info">{{ booking.date }}</p>
          <p class="has-text-info">{{ booking.time }}</p>
          <p class="bold mt3">CINEMA {{ booking.cinema.theater }}</p>
          <p class="has-text-info">{{ booking.cinema.name }}</p>
          <div class="card mt4 p2 has-text-centered">
            <div>
              <p>Selected Seat</p>
              <div v-if="selected.length != 0" class="columns is-multiline is-centered pt1">
                <p
                  class="has-text-info bold column is-3 h4"
                  v-for="s in selected"
                  :key="s.seat_id"
                >{{s.seat_id}}</p>
              </div>
              <p v-else class="pt1">-</p>
            </div>
            <div class="mt4">
              <p>Total</p>
              <p class="has-text-info bold h2 pt1">{{ total }} THB</p>
            </div>
          </div>
          <a
            v-if="selected.length != 0"
            @click="updateBooking"
            class="button is-info is-fullwidth mt4"
          >Continue</a>
          <a v-else class="button is-info is-fullwidth mt4" disabled>Continue</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/seats.json";

export default {
  name: "Step2",
  props: ["booking", "movie"],
  data() {
    return {
      seats: api.rows,
      seatType: api.seat_type,
      selected: []
    };
  },
  methods: {
    clickSeat: function(e) {
      let index = this.selected
        .map(x => {
          return x.seat_id;
        })
        .indexOf(e.seat_id);

      if (e.isClick) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(e);
      }
      e.isClick = !e.isClick;
    },
    updateBooking: function() {
      this.booking = {
        steps: 2,
        date: this.booking.date,
        time: this.booking.time,
        cinema: {
          theater: this.booking.cinema.theater,
          name: this.booking.cinema.name
        },
        seats: this.selected,
        total: this.total,
        movie: this.movie
      };
      this.$emit("input", this.booking);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {
    total: function() {
      let subtotal = 0;
      this.selected.forEach(seat => {
        let index = this.seatType
          .map(x => {
            return x.type_id;
          })
          .indexOf(seat.type_id);
        subtotal += this.seatType[index].price;
      });
      return subtotal;
    }
  }
};
</script>

<style scoped>
.seat {
  max-height: 48px;
}
.pair {
  max-height: 64px;
}
.available {
  cursor: pointer;
}
.recap {
  background-color: #f5f7fb;
}
.is-vertical-center {
  display: flex;
  align-items: center;
}
.left-row {
  color: #aaa;
  position: relative;
  left: -2%;
}
.right-row {
  color: #aaa;
  position: relative;
  right: -2%;
}
.screen {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

