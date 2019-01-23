<template>
  <a v-bind:class="{ active : isSelected }"class="collection-item track" v-on:click="select">
    <span class="title">
      <label>{{trackNumber}}</label>
      {{trackName}}
    </span>
    <p class="track-album-name">
      {{albumName}}
    </p>
    <i class="secondary-content duration">{{duration}}</i>
    <button class="btn-flat play waves-effect waves-teal">
      <i class="secondary-content material-icons" v-on:click="playMusic">play_arrow</i>
    </button>
  </a>
</template>

<script src="../../assets/Album/TrackItem.js">
</script>

<style scoped src="../../assets/Album/TrackItem.css">
</style>
