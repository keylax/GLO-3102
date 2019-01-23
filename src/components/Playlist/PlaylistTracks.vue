<template>
  <div>
    <span class="title">
        <label>{{track.trackNumber}}.</label>
          {{track.trackName}}
        </span>
    <p class="track-album-name">
      {{track.collectionName}}
    </p>
    <i class="secondary-content duration">{{formatDuration(track.trackTimeMillis)}}</i>
    <button v-if="!enableEditing" class="btn-flat play waves-effect waves-teal">
      <i class="secondary-content material-icons" v-on:click="playPlaylist(track)">play_arrow</i>
    </button>
    <button v-else="enableEditing" class="btn-flat play waves-effect waves-teal">
      <i class="secondary-content material-icons" v-on:click="removeTrack(track)">clear</i>
    </button>
  </div>
</template>


<script scoped src="../../assets/Playlist/PlaylistTracks/playlistTracks.js"></script>
<style scoped src="../../assets/Playlist/PlaylistTracks/playlistTracks.css"></style>
