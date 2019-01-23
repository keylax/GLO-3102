<template>
  <div class="flex-container">
    <video autoplay muted loop id="UBeatVideo">
      <source src="../assets/media/beat_white.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <div id="home-title" class="flex-item">
      <h3>Welcome to</h3>
      <h1>UBeat!</h1>
    </div>
    <div id="home-buttons-footer">
      <div id="home-links">
        <router-link class="waves-effect waves-light btn-default btn custom-button" to="/artist/116851">Artist</router-link>
        <router-link class="waves-effect waves-light btn-default btn custom-button" to="/album/1125488753">Album</router-link>
      </div>
      <div id="home-volume" class="click-to-toggle">
        <a class="btn-floating btn-large purple darken-4" v-on:click="muteUnmute">
          <i id="videoMuteUnmuteIcon" class="material-icons">volume_off</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script scoped src="../assets/Home/Home.js"></script>
<style scoped src="../assets/Home/Home.css"></style>