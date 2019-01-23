<template>
  <div id="tracks">
    <TrackItem v-for="track in tracks"
      v-bind:key="track.trackId"
      v-bind:trackNumber="track.trackNumber"
      v-bind:trackName="track.trackName"
      v-bind:albumName="track.collectionName"
      v-bind:previewUrl="track.previewUrl"
      v-bind:duration="formatDuration(track.trackTimeMillis)"
      v-on:playMusic="changeTrackURL"
      v-on:selected="selectTrack(track)"
      v-bind:isSelected="selectedTracks.includes(track)">
    </TrackItem>
    <div v-if="selectedTracks.length > 0 && selectedTracks.length < tracks.length" class="collection-item collection-add-playlist">
      <button class="btn-flat selection btn-default" v-on:click="selectAll">Select All</button>
    </div>
    <div v-if="selectedTracks.length === tracks.length" class="collection-item collection-add-playlist">
      <button class="btn-flat selection btn-default" v-on:click="deselectAll">Deselect All</button>
    </div>
    <div class="collection-item collection-add-playlist">
      <ul class="collapsible" data-collapsible="expandable">
        <li>
          <div class="collapsible-header">
            <i class="material-icons add-button">add_circle</i>
          </div>
          <Playlist v-on:addToPlayList="addToPlayList"></Playlist>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="../../assets/Album/TracksManagement.js">
</script>

<style scoped src="../../assets/Album/TracksManagement.css">

</style>
