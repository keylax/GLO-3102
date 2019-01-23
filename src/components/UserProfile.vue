<template>
  <div id="container">
    <div id="profile">
      <div id="user-info-desktop">
        <div class="collection with-header">
          <h5 class="collection-header header">{{this.name}}</h5>
          <h6 class="collection-item"><b>Email :</b> {{this.email}} </h6>
          <h6 class="collection-item"><b>Following :</b> {{this.following.length}} User(s)</h6>
        </div>
        <div id="follow" v-if="connectedUserId != '' && $route.params.valueOf().id !== connectedUserId">
          <button v-if="!connectedUserFollowers.includes($route.params.valueOf().id)" class="btn" v-on:click="follow($route.params.valueOf().id)">Follow</button>
          <button v-else class="btn" v-on:click="unfollow($route.params.valueOf().id)">Unfollow</button>
        </div>
      </div>
      <div id="profile-tabs">
        <ul class="tabs">
          <li class="tab col s3"><a href="#swipe-1">Following</a></li>
          <li class="tab col s3"><a href="#swipe-2">Playlists</a></li>
        </ul>
        <div id="swipe-1">
          <div class="collection">
            <Subscriber v-for="user in following"
                        v-bind:id="user.id"
                        v-bind:name="user.name"
                        v-bind:email="user.email"
                        v-bind:connectedUserId="connectedUserId"
                        v-bind:connectedUserFollowers="connectedUserFollowers"
                        v-on:followed="followed(user.id)"
                        v-on:unfollowed="unfollowed(user.id)">
            </Subscriber>
          </div>
        </div>
        <div id="swipe-2">
          <div class="collection">
            <UserPlaylist v-for="playlist in playlists"
            v-bind:tracks="playlist.tracks"
            v-bind:playlistName="playlist.name"
            v-bind:id="playlist.id"
            v-on:playMusic="playtracks">
            </UserPlaylist>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../assets/UserProfile/UserProfile.js">
</script>

<style scoped src="../assets/UserProfile/UserProfile.css">
</style>
