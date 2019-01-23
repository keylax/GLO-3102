<template>
    <div id="album">
        <div id="div-page-container">
          <div id="info-container">
            <div id="cover-and-info">
              <div id="cover-image-container">
                <img id="cover-image" v-bind:src="coverImage"></img>
              </div>
              <div id="info-album">
                <ul class="collection with-header">
                  <li class="collection-item header">
                    <b>Title :&nbsp</b> {{albumName}}
                  </li>
                  <li class="collection-item">
                    <b>Artist :</b> <a>{{artistName}}</a>
                  </li>
                  <li class="collection-item">
                    <b>Release Date :</b> {{formatDate(releaseDate)}}
                  </li>
                  <li class="collection-item">
                    <b>Genre :</b> <a>{{genre}}</a>
                  </li>
                  <li class="collection-item">
                    <b>Number of tracks :</b> {{numberTracks}}
                  </li>
                </ul>
                <div id="itune-link-desktop">
                  <a v-bind:href="'https://geo.itunes.apple.com/ca/album/' + albumName + '/' + $route.params.valueOf().id + '?mt=1&app=music&itscg=30200&itsct=afftoolset_1'" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat;width:157px;height:45px;background-size:contain;"></a>
                </div>
              </div>
            </div>
            <div id="div-tracks-container">
              <div class="collection with-header">
                <li class="collection-item track-header header">
                  <div class="track-header">
                     <span class="title album-header">
                        <h5 class="title-album">{{albumName}}</h5>
                        <h6 class="release-date">({{year(releaseDate)}})</h6>
                      </span>
                  </div>
                </li>
              <TracksManagement v-on:playMusic="changeTrackURL"></TracksManagement>
              </div>
              <div id="itune-link-mobile">
                <a v-bind:href="'https://geo.itunes.apple.com/ca/album/' + albumName + '/' + $route.params.valueOf().id + '?mt=1&app=music&itscg=30200&itsct=afftoolset_1'" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat;width:157px;height:45px;background-size:contain;"></a>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script src="../assets/Album/Album.js">
</script>

<style scoped src="../assets/Album/Album.css">
</style>

