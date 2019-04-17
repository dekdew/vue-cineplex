<template>
  <div>
    <div class="card my2">
      <div class="columns is-vcentered">
        <div class="column is-3 has-text-centered">
          <p class="has-text-info h1">AA04</p>
          <p>CINEMA 1</p>
        </div>
        <div class="column left">
          <router-link to="/refund" class="delete"></router-link>
          <p class="bold">Shazam!</p>
          <p>Genre: Action | 132 Mins</p>
          <p class="has-text-info mt2">Wed Apr 17 2019 | 18:50</p>
          <p class="has-text-info">Emprive' Cineclub Emporium Sukhumvit</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie", "cinemas"],
  data() {
    return {};
  }
};
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
.delete {
  position: absolute;
  right: 2%;
}
</style>
