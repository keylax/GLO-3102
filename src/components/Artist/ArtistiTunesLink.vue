<template>
  <div class="artist-savoirplus-div">
    <h5 style="text-decoration: underline">
      More about {{this.artistName}}
    </h5>
    <a v-bind:href="itunesLink" class="iTunes-link"></a>
  </div>
</template>

<script scoped src="../../assets/Artist/ArtistiTunesLink/ArtistiTunesLink.js"></script>
<style scoped src="../../assets/Artist/ArtistiTunesLink/ArtistiTunesLink.css"></style>
