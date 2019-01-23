<template>
    <div class="manager-container grey lighten-4" v-bind:style="display">
        <div class="main-container">
            <div class="queue-container" v-if="nbTracksInQueue !== 0">
                <span><b>Next: {{nextInQueue}}</b></span>
                <span><b>{{nbTracksInQueue}} track(s) in queue</b></span>
            </div>
            <MusicPlayer v-on:musicEnded="changeTrack" v-on:stopPlaylist="endPlaylist" v-bind:nbTracksInQueue="nbTracksInQueue" v-bind:track="track" />
        </div>
    </div>
</template>

<script scoped src="../assets/MusicManager/MusicManager.js"></script>
<style scoped src="../assets/MusicManager/MusicManager.css"></style>
