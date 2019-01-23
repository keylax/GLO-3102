import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';
import Playlists from '@/components/Playlists';
import Results from '@/components/Results';
import Signup from '@/components/Signup';
import UserProfile from '@/components/UserProfile';
import Signin from '@/components/Signin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/artist/:id',
      name: 'Artist',
      component: Artist
    }, {
      path: '/album/:id',
      name: 'Album',
      component: Album
    }, {
      path: '/playlists',
      name: 'Playlists',
      component: Playlists
    }, {
      path: '/results',
      name: 'Results',
      component: Results
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }, {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }, {
      path: '/user/:id',
      name: 'UserProfile',
      component: UserProfile
    }
  ],
});
