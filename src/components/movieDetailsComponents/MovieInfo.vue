<template>
  <div class="container p3">
    <div class="columns">
      <div class="column is-half p3">
        <div class="image is-2by3">
          <img :src="'https://image.tmdb.org/t/p/w500' + images.posters[1].file_path">
          <div class="release-date has-background-info">
            <p class="has-text-white h1">{{ new Date(data.release_date).getDate() }}</p>
            <div class="divider"></div>
            <p class="has-text-white">{{ month[new Date(data.release_date).getMonth()] }} {{ new
              Date(data.release_date).getFullYear() }}</p>
          </div>
          <div @click="isVideoModalActive = true" class="btn-play has-background-info"><i class="fas fa-play fa-inverse" /></div>
        </div>
      </div>
      <div class="movie-info column is-half py4">
        <div class="header-section">
          <p class="is-size-2">{{ data.title }}</p>
          <p>Release Date: {{ new Date(data.release_date).toLocaleDateString('en-TH', { year: 'numeric', month: 'long',
            day: 'numeric' }) }}</p>
          <p>Genre: {{ data.genres[0].name }} | <i class="fas fa-clock" /> {{ data.runtime }} Mins</p>
        </div>

        <div class="overview pt3">
          <p class="h2">Overview</p>
          <p>{{ data.overview }}</p>
        </div>

        <p class="h2 pt3">Actors</p>
        <div class="actors">
          <div class="actor inline-block card mx1" v-for="cast in credits.cast" :key="cast">
            <div class="card-image">
              <figure>
                <img v-if="cast.profile_path != null" :src="'https://image.tmdb.org/t/p/w200' + cast.profile_path" :alt="cast.name">
                <img v-else :src="'https://image.tmdb.org/t/p/w200' + images.posters[0].file_path" :alt="cast.name">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title h3">{{ cast.name }}</p>
                  <p class="subtitle h4 overflow-auto">{{ cast.character }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isVideoModalActive" :width="640" scroll="keep">
      <youtube :video-id="videos[0].key" :player-vars="{autoplay: 1}"></youtube>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'MovieInfo',
  props: ['data', 'images', 'videos', 'credits'],
  data() {
    return {
      month: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL","AUG", "SEP", "OCT", "NOV", "DEC"],
      isVideoModalActive: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.release-date {
  position: absolute;
  top: 30px;
  left: -20px;
  ;
  padding: 10px;
  text-align: center;
}

.divider {
  background-color: #fff;
  height: 2px;
  width: 20px;
  margin: 10px auto;
}

.btn-play {
  position: absolute;
  bottom: 30px;
  right: -20px;
  padding: 20px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.4s;
}

.btn-play:hover {
  background-color: #fdba2e !important;
}
.actors {
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.actor {
  width: 200px;
  overflow: hidden;
}
</style>
