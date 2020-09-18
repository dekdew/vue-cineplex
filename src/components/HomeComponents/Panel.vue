<template>
  <aside class="menu mt3 column is-2 is-hidden-mobile p0 m0">
    <b-field expanded>
      <b-input
        placeholder="Search..."
        type="search"
        icon="search"
        v-model="searchInput"
        @input="updateSearch"
      />
    </b-field>
    <div class="box">
      <p class="menu-label">Genre</p>
      {{selectGenre}}
      <ul class="menu-list" v-for="genre in genres" :key="genre.id">
        <li>
          <a @click="selectGenre = genre.id; updateSearch">{{ genre.name }}</a>
        </li>
      </ul>
      <!-- <select v-model="selected">
    <option v-for="genre in genres" :key="genre.id" v-bind:value="genre.id">
    {{ genre.name }}
  </option>
      </select>-->
    </div>
  </aside>
</template>

<script>
export default {
  name: "Panel",
  props: ["search", "genres"],
  data() {
    return {
      selectGenre: null,
      searchInput: null,
    };
  },
  methods: {
    updateSearch: function () {
      this.search = {
        text: this.searchInput,
        genre: this.selectGenre,
      };
      this.$emit("input", this.search);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
