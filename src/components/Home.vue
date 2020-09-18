<template>
  <div style="background-color:#f5f7fb;">
    <Loading v-if="isLoad" />
    <HomeCarousel :slides="slides" :genres="genres" />
    <Showtime :movies="movies" />
    <div class="container py4">
      <p class="is-size-4 bold has-text-info has-text-centered pb2">Movies</p>
      <b-tabs position="is-centered" class="block">
        <div class="main-content columns">
          <div class="movies container column is-10">
            <b-tab-item label="Now Showing">
              <div class="columns is-multiline m0 p0 is-centered">
                <div v-for="movie in filteredMovie" :key="movie.id" class="column is-4">
                  <MovieCard :movie="movie" :genres="genres" />
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Coming Soon">
              <div class="columns is-multiline m0 p0 is-centered">
                <div v-for="movie in filteredMovieComing" :key="movie.id" class="column is-4">
                  <MovieCard :movie="movie" :genres="genres" />
                </div>
              </div>
            </b-tab-item>
          </div>
          <!-- panel -->
          <aside class="menu mt3 column is-2 is-hidden-mobile p0 m0">
            <b-field expanded>
              <b-input
                placeholder="Search..."
                type="search"
                icon="search"
                v-model="search.text"
                @input="updateSearch"
              />
            </b-field>
            <div class="box">
              <p class="menu-label">Genre</p>
              {{selectGenre}}
              <ul class="menu-list" v-for="genre in genres" :key="genre.id">
                <li>
                  <a @click="search.genre = genre.id; updateSearch">{{ genre.name }}</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import Loading from "@/components/Loading.vue";
import Showtime from "@/components/HomeComponents/Showtime.vue";
import HomeCarousel from "@/components/HomeComponents/HomeCarousel.vue";
import MovieCard from "@/components/HomeComponents/MovieCard.vue";

export default {
  name: "Home",
  components: {
    Loading,
    Showtime,
    HomeCarousel,
    MovieCard,
  },
  data() {
    return {
      isLoad: true,
      slides: null,
      movies: null,
      upcoming: null,
      genres: null,
      search: {
        text: "",
        genre: "",
      },
    };
  },
  mounted() {
    this.axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`
      )
      .then((response) => {
        this.movies = response.data.results;
      });
    this.axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`
      )
      .then((response) => {
        this.upcoming = response.data.results;
      });
    this.axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=bb6f51bef07465653c3e553d6ab161a8`
      )
      .then((response) => {
        this.genres = response.data.genres;
      });
    this.axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&region=US`
      )
      .then((response) => {
        this.slides = response.data.results;
      });
  },
  updated: debounce(function () {
    this.$nextTick(() => {
      this.isLoad = false;
    });
  }, 1500),
  computed: {
    filterGenre() {
      return this.movies.filter((movie) => {
        if (this.search.genre === "") {
          return true;
        } else {
          return movie.genre_ids.includes(this.search.genre);
        }
      });
    },
    filteredMovie() {
      return this.filterGenre.filter((movie) => {
        return movie.title
          .toLowerCase()
          .includes(this.search.text.toLowerCase());
      });
    },
    filterGenreComing() {
      return this.upcoming.filter((movie) => {
        if (this.search.genre === "") {
          return true;
        } else {
          return movie.genre_ids.includes(this.search.genre);
        }
      });
    },
    filteredMovieComing() {
      return this.filterGenreComing.filter((movie) => {
        return movie.title
          .toLowerCase()
          .includes(this.search.text.toLowerCase());
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movies {
  overflow: hidden;
}
</style>
