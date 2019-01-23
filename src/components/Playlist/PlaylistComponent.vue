<template>
  <div id="playlist-component">

    <playlist-errors v-bind:errors="errors"></playlist-errors>

    <ul v-if="canEdit" class="collection">
      <li v-if="enableEditing">
        <playlist-search v-bind:id="mutableItem.id" v-on:addToPlaylist="addTrackToPlaylist"></playlist-search>
      </li>
      <li class="collection-item track" v-for="track in mutableItem.tracks" v-bind:key="track._id">
        <playlist-tracks v-on:playPlaylist="playPlaylist" v-on:removeTrack="removeTrack" v-bind:track="track" v-bind:enableEditing="enableEditing"></playlist-tracks>
      </li>
    </ul>

    <playlist-floating-button v-on:editBtnClick="editBtnClick" v-on:savePlaylist="savePlaylist" v-on:cancelEditing="cancelEditing" v-bind:canEdit="canEdit" v-bind:enableEditing="enableEditing"></playlist-floating-button>
  </div>
</template>

<script scoped src="../../assets/Playlist/PlaylistComponent/playlistComponent.js"></script>
<style scoped src="../../assets/Playlist/PlaylistComponent/playlistComponent.css"></style>
