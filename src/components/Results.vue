<template>
    <div class="main-container">
        <h3><span class="page-title">Search results</span></h3>
        <div v-if="artistsSearchResults.length === 0 &&
                   albumsSearchResults.length === 0  &&
                   tracksSearchResults.length === 0  &&
                   usersSearchResults.length === 0" class="empty-result-container">
                <h5>The search return no results</h5>
        </div>
        <div class="results-container">
            <results-group class="group-results" v-if="artistsSearchResults.length !== 0"
                                                 v-bind:groupIcon="artistIcon" 
                                                 v-bind:groupTitle="artistTitle" 
                                                 v-bind:wrapperType="wrapperTypeArtist" 
                                                 v-bind:results="artistsSearchResults"
                                                 v-bind:connectedUser="connectedUser"
                                                 v-on:loadMoreRequest="searchMoreArtists"
                                                 v-on:selectResult="selectResult"/>

            <results-group class="group-results" v-if="albumsSearchResults.length !== 0"
                                                 v-bind:groupIcon="albumIcon"
                                                 v-bind:groupTitle="albumTitle" 
                                                 v-bind:wrapperType="wrapperTypeCollection" 
                                                 v-bind:results="albumsSearchResults"
                                                 v-bind:connectedUser="connectedUser"
                                                 v-on:loadMoreRequest="searchMoreAlbums"
                                                 v-on:selectResult="selectResult"/>

            <results-group class="group-results" v-if="tracksSearchResults.length !== 0"
                                                 v-bind:groupIcon="trackIcon" 
                                                 v-bind:groupTitle="trackTitle" 
                                                 v-bind:wrapperType="wrapperTypeTrack" 
                                                 v-bind:results="tracksSearchResults"
                                                 v-bind:connectedUser="connectedUser"
                                                 v-on:loadMoreRequest="searchMoreTracks"
                                                 v-on:selectResult="selectResult"/>

            <results-group class="group-results" v-if="usersSearchResults.length !== 0"
                                                 v-bind:groupIcon="userIcon" 
                                                 v-bind:groupTitle="userTitle" 
                                                 v-bind:wrapperType="wrapperTypeUser" 
                                                 v-bind:results="usersSearchResults"
                                                 v-bind:connectedUser="connectedUser"
                                                 v-on:selectResult="selectResult"
                                                 v-on:update-user="connectUser"/>
        </div>      
        <results-assignations v-bind:selectedValue="selectedResult" v-bind:selectedWrapperType="selectedWrapperType"/>
    </div>
</template>

<script scoped src="../assets/Results/Results.js"></script>
<style scoped src="../assets/Results/Results.css"></style>
