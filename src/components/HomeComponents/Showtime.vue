<template>
  <div class="container">
    <div class="box mx4">
      <div class="columns is-vcentered is-centered">
        <div class="column">
          <b-field>
            <b-select placeholder="Select theater" icon="building" expanded>
              <optgroup
                v-for="cinema_region in cinemas"
                :key="cinema_region.region_id"
                :label="cinema_region.name"
              >
                <option
                  v-for="cinema in cinema_region.locations"
                  :key="cinema.location_id"
                  :value="cinema.location_id"
                >{{ cinema.name }}</option>
              </optgroup>
            </b-select>
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-select placeholder="Select movie" icon="film" expanded>
              <option
                v-for="option in movies"
                :value="option.id"
                :key="option.id"
              >{{ option.title }}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-one-quarter">
          <a class="button is-fullwidth is-info">SHOWTIME</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api/cinemas.json";

export default {
  name: "Showtime",
  props: ["movies"],
  data() {
    return {
      cinemas: api,
    };
  },
};
</script>

<style scoped>
.box {
  position: relative;
  margin-top: -2.5em;
  box-shadow: 0 0 20px #0003;
}
</style>
