<template>
  <div id="app">
    <nav-menu v-bind:connectedUser="connectedUser.name" v-on:user-disconnection="disconnectUser" v-on:user-connection="connectUser"></nav-menu>
    <music-manager v-bind:tracks="tracks" v-on:stopPlaylist="endPlaylist"></music-manager>
    <router-view :key="$route.fullPath" v-on:user-connection="connectUser" v-on:playMusic="changeTrackURL"></router-view>
  </div>
</template>

<script>
import $ from 'jquery';
import Navigation from '@/components/Navigation';
import MusicManager from '@/components/MusicManager';

export default {
  name: 'app',
  components: {
    'nav-menu': Navigation,
    'music-manager': MusicManager
  },
  data() {
    return {
      tracks: [],
      connectedUser: {
        name: ''
      }
    };
  },
  metaInfo() {
    return {
      title: 'UBeat',
    };
  },
  methods: {
    changeTrackURL(enhancedTracks) {
      this.tracks = enhancedTracks;
    },
    endPlaylist() {
      this.tracks = [];
    },
    connectUser(user) {
      this.connectedUser = user;
    },
    disconnectUser() {
      this.connectedUser = {
        name: ''
      };
    }
  },
  updated() {
    $('ul.tabs').tabs();
    $('.collapsible').collapsible();
    $('.dropdown-button').dropdown();
    $('.textarea');
  }
};
</script>
<style src="./assets/GlobalCSS/App.css"></style>
