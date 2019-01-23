<template>
  <div v-bind:class='bodyClass' v-if="tracks && tracks.length">
    <ol v-bind:class='collectionClass'>
      <li v-bind:class='collectionItemClass' v-for="track of tracks" :key="track.id">
        <p class="song-title">{{track.trackName}}</p>
        <p class="song-duration">{{formatDuration(track.trackTimeMillis)}}</p>
      </li>
    </ol>
    <router-link class="waves-effect waves-purple btn-large btn-default visiter-button" v-bind:to="'/album/' + albumId">About</router-link>
  </div>
</template>

<script scoped src="../../assets/Artist/ArtistAlbumTrackList/ArtistAlbumTrackList.js"></script>
<style scoped src="../../assets/Artist/ArtistAlbumTrackList/ArtistAlbumTrackList.css"></style>
