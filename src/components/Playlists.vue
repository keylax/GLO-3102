<template>
  <div class="container">
    <div id="playlist-selection">
      <input v-if="Object.keys(selectedPlaylist).length !== 0 && selectedPlaylist.constructor === Object && editMode" v-model="editingName">
      <a v-else-if="Object.keys(selectedPlaylist).length !== 0 && selectedPlaylist.constructor === Object" class='dropdown-button btn btn-default custom-dropdown notransition' data-beloworigin="true" data-activates='playlist-dropdown'>{{selectedPlaylist.name}}</a>
      <a v-else class='dropdown-button btn btn-default custom-dropdown-no-delete' data-beloworigin="true" data-activates='playlist-dropdown'>Choose a playlist</a>
      <button v-if="Object.keys(selectedPlaylist).length !== 0 && selectedPlaylist.constructor === Object" class="btn delete-playlist" v-on:click="removePlaylist(selectedPlaylist.id, $event)"><i class="material-icons">clear</i></button>
    </div>

    <ul id='playlist-dropdown' class='dropdown-content' >
      <li v-for="item in items" v-bind:key="item.id" v-on:click="showSelectedPlaylist(item)">
        <div class="item" v-if="item.name">
          <h5>{{ item.name }} - {{ item.tracks.length }} tracks</h5>
        </div>
        <div v-else class="item">
          <h5>Name Undefined</h5>
        </div>
      </li>
    </ul>

    <playlist-component v-on:selectPlaylist="selectNewPlaylist" v-on:refreshDropdown="initList" v-on:playMusic="playPlaylist" v-on:setEditMode="enableEditMode" :canEdit="showPlaylist" :enableEditing="editMode" :playlistName="editingName" :item="{name:editingName, tracks:selectedPlaylist.tracks, id:selectedPlaylist.id }"></playlist-component>

    <button v-if="Object.keys(selectedPlaylist).length !== 0 && selectedPlaylist.constructor === Object && !editMode" class="btn btn-default play-button" v-on:click="playPlaylist(selectedPlaylist.tracks)">Play All</button>

    <playlist-create-modal v-on:selectPlaylist="selectNewPlaylist"></playlist-create-modal>
  </div>
</template>

<script scoped src="../assets/Playlist/playlist.js"></script>
<style scoped src="../assets/Playlist/playlist.css"></style>
