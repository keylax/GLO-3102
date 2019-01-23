<template>
  <div id="modal-playlist-create" class="modal">
    <form id="playlist-create" @submit="checkForm" action="https://vuejs.org/" method="post">
      <div class="modal-content">
        <h4>Create a new playlist</h4>
        <p>Enter a name for this new playlist</p>
        <input v-model="playlistName" placeholder="Enter playlist name" />

        <playlist-errors v-bind:errors="errors"></playlist-errors>
      </div>
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <input type="submit" value="Create" class="waves-effect waves-green btn-flat">
      </div>
    </form>
  </div>
</template>

<script scoped src="../../assets/Playlist/PlaylistCreate/playlistCreate.js"></script>
<style scoped src="../../assets/Playlist/PlaylistCreate/playlistCreate.css"></style>
