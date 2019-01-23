<template>
  <div class="cover-div z-depth-4">
    <img class="circle artist-avatar z-depth-5" v-bind:src="artistAvatar">
    <div class="artist-name-div valign-wrapper">
      <p class="artist-name">{{artistName}}</p>
    </div>
  </div>
</template>


<script scoped src="../../assets/Artist/ArtistCover/ArtistCover.js"></script>
<style scoped src="../../assets/Artist/ArtistCover/ArtistCover.css"></style>
