<template>
  <aside class="menu mt3 column is-2 is-hidden-mobile p0 m0">
    <b-field expanded>
      <b-input placeholder="Search..." type="search" icon="search" :value="value" @input="updateValue($event)" />
    </b-field>
    <div class="box">
    <p class="menu-label">
      Genre
    </p>
    <ul class="menu-list" v-for="genre in genres" :key="genre.id">
      <li><a>{{ genre.name }}</a></li>
    </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Panel',
  props: ['value', 'genres'],
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
