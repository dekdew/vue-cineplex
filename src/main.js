// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import basscss from "basscss/src/basscss.css";
import VueCarousel from "vue-carousel";
import axios from "axios";
import VueAxios from "vue-axios";
import VueYoutube from "vue-youtube";
import VueProgressiveImage from "vue-progressive-image";

Vue.use(VueProgressiveImage, {
  blur: 30,
  delay: 1000
});

Vue.use(VueYoutube);

Vue.use(VueAxios, axios);

Vue.use(VueCarousel);

Vue.use(Buefy, {
  defaultIconPack: "fa"
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
