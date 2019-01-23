<template>
    <div class="error-div" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li class="error" v-for="error in errors"  v-bind:key="error">{{ error }}</li>
        </ul>
    </div>
</template>

<script scoped src="../../assets/Playlist/PlaylistErrors/PlaylistErrors.js"></script>
<style scoped src="../../assets/Playlist/PlaylistErrors/PlaylistErrors.css"></style>