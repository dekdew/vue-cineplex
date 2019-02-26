<template>
    <div class="box">
        <template v-for="s in seats">
            <button class="button" :key="s.id">{{s.id}}</button>
        </template>
    </div>
</template>

<script>
import seat from '../../src/api/seat.json'

  export default {
    computed: {
      seats(){
          return seat["seat"];
      }
  }
}
</script>