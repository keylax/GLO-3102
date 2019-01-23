<template>
  <a v-on:click="redirectTo" class="wrap">
    <div class="link-container">
      <img v-if="(isAlbum || isTrack)  && enableAlbumCover" v-bind:src="item.artworkUrl60" />
      <div>
        <span v-if="item.wrapperType" class="title">{{convertDisplay(item.wrapperType.toUpperCase())}}</span>
        <span v-else-if="item.name" class="title">{{isUserTitle.toUpperCase()}}</span>
        <div class="infos">
          <span v-if="isTrack">{{item.trackName}} • FROM: {{item.collectionName}} • BY: {{item.artistName}}</span>
          <span v-else-if="isAlbum">{{item.collectionName}} • BY: {{item.artistName}}</span>
          <span v-else-if="isArtist">{{item.artistName}}</span>
          <span v-else-if="isUser">{{item.name}} • {{item.email}}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<script scoped src="../../../assets/Navigation/NavSearch/NavSearchResult.js"></script>

<style scoped src="../../../assets/Navigation/NavSearch/NavSearchResult.css"></style>
