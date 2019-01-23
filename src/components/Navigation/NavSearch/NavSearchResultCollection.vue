<template>
  <a class="wrap">
    <span class="title">COLLECTION</span>
    <div class="infos">
      <span>{{collection.collectionName}} • BY: {{collection.artistName}}</span>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'nav-search-result-collection',
    props: ['collection']
  };
</script>

<style scoped src="../../../assets/Navigation/NavSearch/NavSearchResult.css"></style>
