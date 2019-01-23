<template>
  <a class="collection-item track">
    <span class="title">
      <label>{{trackNumber}}</label>
      {{trackName}}
    </span>
    <p class="track-album-name">
      {{albumName}}
    </p>
    <i class="secondary-content duration">{{duration}}</i>
    <button class="btn-flat play waves-effect waves-teal" v-on:click="playMusic">
      <i class="secondary-content material-icons">play_arrow</i>
    </button>
  </a>
</template>

<script src="../../assets/UserProfile/UserTrack.js">
</script>

<style scoped src="../../assets/UserProfile/UserTrack.css">
</style>
