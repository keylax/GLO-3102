<template>
  <div>
    <ArtistCover v-bind:artistID="this.artistID"/>
    <div class="row z-depth-1 content-div">
      <div class="col s12">
        <ul class="tabs artist-tabs">
          <li class="tab col s3 artist-tab"><a class="active" href="#info">Information</a></li>
          <li class="tab col s3 artist-tab"><a href="#albums">Discography</a></li>
        </ul>
      </div>
      <div id="info" class="col s12">
        <ArtistGenre v-bind:artistID="this.artistID"/>
        <ArtistiTunesLink v-bind:artistID="this.artistID"/>
      </div>
      <div id="albums" class="col s12">
        <ArtistAlbumList v-bind:artistID="this.artistID"
                         v-bind:mainClass="mainClass"
                         v-bind:headerClass="headerClass"
                         v-bind:bodyClass="bodyClass"
                         v-bind:collectionClass="collectionClass"
                         v-bind:collectionItemClass="collectionItemClass"/>
      </div>
    </div>
  </div>
</template>

<script scoped src="../assets/Artist/Artist.js"></script>
<style scoped src="../assets/Artist/Artist.css"></style>
