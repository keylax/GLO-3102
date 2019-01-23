<template>
  <ul class="collapsible">
    <li>
      <div class="collapsible-header collection-item playlist">
        <div>
      <span class="title">
        {{playlistName}}
      </span>
          <button class="btn-flat play waves-effect waves-teal">
            <i class="secondary-content material-icons" v-on:click="playPlaylist">play_arrow</i>
          </button>
        </div>
      </div>
      <div class="collapsible-body">
        <user-tracks v-for="track in tracks"
          v-bind:trackName="track.trackName"
          v-bind:trackNumber="track.trackNumber"
          v-bind:albumName="track.collectionName"
          v-bind:previewUrl="track.previewUrl"
          v-bind:artistName="track.artistName"
          v-bind:coverImage="track.artworkUrl100"
          v-bind:duration="formatDuration(track.trackTimeMillis)"
          v-on:playMusic="playTrack">
        </user-tracks>
      </div>
    </li>

  </ul>
</template>

<script src="../../assets/UserProfile/UserPlaylist.js">
</script>

<style scoped src="../../assets/UserProfile/UserPlaylist.css">
</style>
