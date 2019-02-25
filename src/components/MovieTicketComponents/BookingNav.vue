<template>
  <div class="has-background-info py2">
    <div class="container px4">
      <div class="columns is-vcentered is-centered">
        <div class="column">
          <b-field>
            <b-select placeholder="Select theater" icon="building" expanded>
              <optgroup v-for="cinema_region in cinemas" :key="cinema_region.region_id" :label="cinema_region.name">
                <option v-for="cinema in cinema_region.locations" :key="cinema.location_id" :value="cinema.location_id">{{ cinema.name }}</option>
              </optgroup>
            </b-select>
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-select placeholder="Select movie" icon="film" expanded>
              <option v-for="movie in movies" :value="movie.id" :key="movie.id">
                {{ movie.title }}
              </option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-one-quarter">
          <a class="button is-fullwidth is-info is-outlined is-inverted">SHOWTIME</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingNav',
  props: ['movies', 'cinemas'],
  data() {
    return {
      isLoad: true
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
