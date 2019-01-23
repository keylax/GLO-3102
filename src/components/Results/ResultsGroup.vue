<template>
    <div class="main-container grey lighten-1">
        <div class="title-container">
            <i class="material-icons">{{groupIcon}}</i>
            <span class="group-title"><b>{{groupTitle}}</b></span>
        </div>
        <div class="collection results-container">
            <div class="link-container" v-for="result in results" v-bind:key="result._id">
                <nav-search-result class="collection-item link-result"  :item="result" :isTrack="wrapperType === wrapperTypeTrack" 
                                                            :isArtist="wrapperType === wrapperTypeArtist" 
                                                            :isAlbum="wrapperType === wrapperTypeCollection"
                                                            :isUser="wrapperType === wrapperTypeUser"
                                                            :enableAlbumCover="enableAlbumCover">
                </nav-search-result>
                <a v-if="wrapperType !== wrapperTypeUser" data-target="results-assignations-modal" v-on:click="setSelectedResult(result)" class="collection-item modal-link modal-trigger">
                    <i class="material-icons add-icon">library_add</i>
                </a>
                <a v-if="wrapperType === wrapperTypeUser && !isUserFollowed(result)" v-on:click="follow(result)" class="collection-item follow-link">
                    <i class="material-icons add-icon">thumb_up</i>
                    <span class="follow">Follow</span>
                </a>
                <a v-if="wrapperType === wrapperTypeUser && isUserFollowed(result)" v-on:click="unfollow(result)" class="collection-item unfollow-link">
                    <i class="material-icons unfollow-icon">thumb_down</i>
                    <span>Unfollow</span>
                </a>
            </div>
            <div v-if="wrapperType !== wrapperTypeUser && enableLoadMore" v-on:click="notifyLoadRequest">
                <a class="collection-item">
                    <div class="load-container" >
                        <i class="material-icons">autorenew</i>
                        <span><b>Load More</b></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script scoped src="../../assets/Results/ResultsGroup/ResultsGroup.js"></script>
<style scoped src="../../assets/Results/ResultsGroup/ResultsGroup.css"></style>
