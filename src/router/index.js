import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LogIn from '@/components/LogIn'
import SingUp from '@/components/SignUp'
import MovieDetails from '@/components/MovieDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'SingUp',
      component: SingUp
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails,
      props: true
    }
  ]
})
