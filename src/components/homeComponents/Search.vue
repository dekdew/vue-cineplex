<template>
<!-- <b-field class="level-right px4 m0">
  <b-input placeholder="Search..." type="search" icon="search" :value="value" @input="updateValue($event)" />
</b-field> -->

<div class="container">
  <div class="box mx4">
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
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
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
export default {
	name: 'Search',
	props: ['value'],
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.box {
	position: relative;
	margin-top: -2.5em;
	box-shadow: 0 0 20px #0003;
	min-width: 60vw;
}
</style>
