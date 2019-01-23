<template>
  <div class="collapsible-body">
    <div class="collection">
      <PlaylistItem v-for="playlist in playlists"
             v-bind:key="playlist.id"
             v-bind:playlistName="playlist.name"
             v-on:click.native="addToPlayList(playlist)">
      </PlaylistItem>
    </div>
  </div>
</template>

<script src="../../assets/Album/Playlist.js">
</script>

