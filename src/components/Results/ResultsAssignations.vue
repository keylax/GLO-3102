<template>
    <div id="results-assignations-modal" class="modal">
        <div class="modal-content">
          <h3>Add to playlists</h3>
          <span v-if="selectedWrapperType === wrapperTypeTrack"><b>Selected track : {{selectedValue.trackName}}</b></span>
          <span v-if="selectedWrapperType === wrapperTypeCollection"><b>Selected album : {{selectedValue.collectionName}}</b></span>
          <span v-if="selectedWrapperType === wrapperTypeArtist"><b>Selected artist : {{selectedValue.artistName}}</b></span>
          <div class="playlists-container">
            <ul class="collection">
              <playlist-item class="collection-item" v-for="playlist in playlists"
                                                      v-bind:key="playlist.id"
                                                      v-bind:playlistName="playlist.name"
                                                      v-on:click.native="addToPlayList(playlist)"/>
            </ul>
          </div>
        </div>
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-green btn-flat">Done</a>
      </div>
    </div>
</template>

<script scoped src="../../assets/Results/ResultsAssignations/ResultsAssignations.js"></script>
<style scoped src="../../assets/Results/ResultsAssignations/ResultsAssignations.css"></style>