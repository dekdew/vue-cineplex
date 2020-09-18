import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import MovieDetails from "@/components/MovieDetails";
import MovieTicket from "@/components/MovieTicket";
import MyTicket from "@/components/MyTicket";
import Refund from "@/components/Refund";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/movie/:id",
      name: "MovieDetails",
      component: MovieDetails,
      props: true
    },
    {
      path: "/booking/:id",
      name: "MovieTicket",
      component: MovieTicket,
      props: true
    },
    {
      path: "/myticket",
      name: "MyTicket",
      component: MyTicket
    },
    {
      path: "/refund",
      name: "Refund",
      component: Refund
    }
  ]
});
