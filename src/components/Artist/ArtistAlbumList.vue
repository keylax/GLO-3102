<template>
  <ul v-bind:class='mainClass' data-collapsible="accordion">
    <li v-for="album of albums" :key="album.id">
      <div v-bind:class='headerClass'><i><img class="circle album-cover" v-bind:src="album.artworkUrl60"></i>
        <div class="album-title-div">
         {{album.collectionName}}
          <p class="album-year">({{album.releaseDate.substring(0,4)}})</p>
        </div>
      </div>
      <ArtistAlbumTrackList v-bind:albumId="album.collectionId"
                            v-bind:bodyClass='bodyClass'
                            v-bind:collectionItemClass='collectionItemClass'
                            v-bind:collectionClass='collectionClass'/>
    </li>
  </ul>
</template>

<script scoped src="../../assets/Artist/ArtistAlbumList/ArtistAlbumList.js"></script>
<style scoped src="../../assets/Artist/ArtistAlbumList/ArtistAlbumList.css"></style>
