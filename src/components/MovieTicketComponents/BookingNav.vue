<template>
  <div class="has-background-info py2">
    <div class="container px4">
      <div class="columns is-vcentered is-centered">
        <div class="column">
          <b-field>
            <b-select placeholder="Select theater" icon="building" expanded>
              <optgroup label="Black Sails">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
                <option value="vane">Vane</option>
                <option value="billy">Billy</option>
                <option value="jack">Jack</option>
              </optgroup>

              <optgroup label="Breaking Bad">
                <option value="heisenberg">Heisenberg</option>
                <option value="jesse">Jesse</option>
                <option value="saul">Saul</option>
                <option value="mike">Mike</option>
              </optgroup>

              <optgroup label="Game of Thrones">
                <option value="tyrion-lannister">Tyrion Lannister</option>
                <option value="jamie-lannister">Jamie Lannister</option>
                <option value="daenerys-targaryen">Daenerys Targaryen</option>
                <option value="jon-snow">Jon Snow</option>
              </optgroup>
            </b-select>
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-select placeholder="Select movie" icon="film" expanded>
              <option v-for="option in movies" :value="option.id" :key="option.id">
                {{ option.title }}
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
  props: ['movies'],
  data() {
    return {
      isLoad: true,
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
