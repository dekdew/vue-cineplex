<template>
  <b-tabs class="pt3 is-hidden-mobile" expanded>
    <b-tab-item v-for="day in week" :key="day.getDate()" :label="day.toDateString()">
      <!-- region -->
      <b-collapse v-for="region in cinemas" :key="region.id" class="card my2">
        <div slot="trigger" slot-scope="props" class="card-header" style="background-color: #2e66cf;">
          <p class="card-header-title has-text-white">
            <i class="fas fa-map-marker-alt" /> &nbsp; {{ region.name }}
          </p>
          <a class="card-header-icon has-text-white">
            <b-icon :icon="props.open ? 'angle-down' : 'angle-up'">
            </b-icon>
          </a>
        </div>
        <div class="card-content p0">
          <!-- cinema -->
          <div v-for="cinema in region.locations" :key="cinema.id" class="card">
            <header class="card-header bg-gray px2">
              <p class="card-header-title has-text-info">
                <i class="far fa-star" /> &nbsp; {{ cinema.name }}
              </p>
            </header>
            <div class="card-content">
              <!-- theater -->
              <div v-for="theater in cinema.theaters" :key="theater.id" class="columns card p2 is-vcentered">
                <div class="column is-2">
                  {{ theater.type }}
                </div>
                <div class="column is-10 showtime px3">
                  <p><i class="fas fa-volume-up" /> ENG &nbsp; | &nbsp; Theater {{theater.theater}}</p>
                  <div class="field is-grouped pt2">
                    <p class="control">
                      <a  class="button px3" disabled>
                        11:10
                      </a>
                    </p>
                    <p class="control">
                      <a class="button px3" disabled>
                        13:30
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-info px3" @click="updateBooking({steps:1,date:day.toDateString(), time:'18:50', cinema:{theater:theater.theater, name:cinema.name}, seats:[], total:null})">
                        18:50
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-info is-outlined px3" @click="updateBooking({steps:1,date:day.toDateString(), time:'22:00', cinema:{theater:theater.theater, name:cinema.name}, seats:[], total:null})">
                        22:00
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </b-tab-item>
  </b-tabs>
</template>

<script>
export default {
  name: 'Step1',
  props: ['booking', 'cinemas'],
  data() {
    return {
      week: [],
    }
  },
  mounted() {
		let day = new Date()
		let nextDay

		for (let i=0; i<5; i++) {
			this.week.push(day)
			nextDay = new Date(day)
			nextDay.setDate(day.getDate() + 1)
			day = new Date(nextDay)
    }
    
    console.log(this.booking)
  },
  methods: {
    updateBooking: function (booking) {
      this.$emit('input', booking)
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style scoped>
.bg-gray {
  background-color: #f5f7fb;
}
.showtime {
  text-align: left;
  border-left:1px solid #0002;
}
</style>

