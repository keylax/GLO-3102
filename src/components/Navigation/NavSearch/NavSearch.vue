<template>
  <div v-bind:class="containerClass">
    <button class="search material-icons prefix" v-on:click="redirectToResults">search</button>
    <input v-model="searchInput" v-bind:class="inputClass" v-bind:id="idInput" v-on:keyup="onInputKeyUpHandler" v-on:input="search" type="text"/>
    <label v-bind:class="labelClass" v-bind:for="idInput">Search</label>
    <button v-if="searchInput.length !== 0" class="search material-icons prefix" v-bind:id="idClearButton" v-on:click="clearInputValue">close</button>
    <div class="search-results">
      <ul>
        <li v-if="searchInput.length > 0" class="more-results-text"><span>Press "enter" for more results</span></li>
        <li v-for="result in searchResults" v-bind:key="result._id">
          <nav-search-result v-on:clearInputValue="clearInputValue" :item="result" :isTrack="result.wrapperType === wrapperTypeTrack" :isArtist="result.wrapperType === wrapperTypeArtist" :isAlbum="result.wrapperType === wrapperTypeCollection"></nav-search-result>
          <!--<div v-if="result.wrapperType === wrapperTypeArtist">
            <nav-search-result-artist :artist="result"></nav-search-result-artist>
          </div>
          <div v-else-if="result.wrapperType === wrapperTypeCollection">
            <nav-search-result-collection :collection="result"></nav-search-result-collection>
          </div>
          <div v-else-if="result.wrapperType === wrapperTypeTrack">
            <nav-search-result-track :track="result"></nav-search-result-track>
          </div>-->
        </li>
        <li v-for="result in searchUserResults.slice(0, nbOfUsersToShows)" v-bind="result._id">
          <nav-search-result v-on:clearInputValue="clearInputValue" :item="result" :isUser="true"></nav-search-result>
        </li>
      </ul>
    </div>
  </div>
</template>

<script scoped src="../../../assets/Navigation/NavSearch/NavSearch.js"></script>
<style scoped src="../../../assets/Navigation/NavSearch/NavSearch.css"></style>
