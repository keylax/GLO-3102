<template>
    <div>
      <div v-if="!canEdit" class="fixed-action-btn">
        <a data-target="modal-playlist-create" class="btn-floating waves-effect waves-light btn-large red btn modal-trigger">
          <i class="large material-icons">add</i>
        </a>
      </div>

      <div v-else class="fixed-action-btn click-to-toggle">
        <a class="btn-floating btn-large red">
          <i class="material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a data-target="modal-playlist-create" class="btn-floating waves-effect waves-light blue btn modal-trigger">
              <i class="large material-icons">add</i>
            </a>
          </li>
          <li>
            <a class="btn-floating green" v-on:click="editBtnClick">
              <i v-if="!enableEditing" class="material-icons">edit</i>
              <i v-else v-on:click="cancelEditing" class="material-icons">cancel</i>
            </a>
          </li>
          <li v-bind:class="{ hide: !enableEditing }">
            <a class="btn-floating yellow darken-1" v-on:click="savePlaylist"><i class="material-icons">check</i></a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script scoped src="../../assets/Playlist/PlaylistFloatingButton/playlistFloatingButton.js"></script>
