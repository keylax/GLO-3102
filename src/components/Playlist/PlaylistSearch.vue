<template>
    <div id="playlist-search-div">
      <input v-model="searchedTrack" v-on:input="searchTrack" placeholder="search for a song" />
      <a v-on:click="clearInput" class="btn-flat clear-input-button"><i class="material-icons">clear</i></a>
      <div class="playlist-edit-search-result">
        <ul>
          <li v-for="track in searchedTracksResult" v-bind:key="track._id">
            <a v-on:click="addSongToPlaylist(track)">{{track.trackName}} by {{track.artistName}}</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script scoped src="../../assets/Playlist/PlaylistSearch/playlistSearch.js"></script>
<style scoped src="../../assets/Playlist/PlaylistSearch/playlistSearch.css"></style>
