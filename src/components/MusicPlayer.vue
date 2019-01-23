<template>
    <div class="container">
        <div class="main-container row">
            <img v-bind:src="track.coverImage" />
            <div class="track-container">
                <div class="track-infos">
                    <span class="track-name"><b>{{track.artistName}}</b> - <b>{{track.trackName}}</b></span>
                    <span>{{trackPlayTimeDisplay}} / {{trackDurationDisplay}}</span>
                </div>
                <div class="player-container">
                    <button v-on:click="pausePlayHandler" class="material-icons">{{playPauseIcon}}</button>
                    <progress v-on:mouseup="modifyProgressionValue" v-bind:value="trackPlayTime" v-bind:max="trackDuration"></progress>
                    <button v-on:click="stopHandler" class="material-icons">stop</button>
                    <button v-if="nbTracksInQueue !== 0" v-on:click="skipHandler" class="material-icons">skip_next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped src="../assets/MusicPlayer/MusicPlayer.js"></script>
<style scoped src="../assets/MusicPlayer/MusicPlayer.css"></style>
