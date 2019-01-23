<template>
  <a class="wrap">
    <span class="title">ARTIST</span>
    <div class="infos">
      <span>{{artist.artistName}}</span>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'nav-search-result-artist',
    props: ['artist']
  };
</script>

<style scoped src="../../../assets/Navigation/NavSearch/NavSearchResult.css"></style>
