<template>
  <a class="wrap">
    <span class="title">TRACK</span>
    <div class="infos">
      <span>{{track.trackName}} • FROM: {{track.collectionName}} • BY: {{track.artistName}}</span>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'nav-search-result-track',
    props: ['track']
  };
</script>

<style scoped src="../../../assets/Navigation/NavSearch/NavSearchResult.css"></style>
