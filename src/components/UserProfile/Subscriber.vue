<template>
  <div class="collection-item">
    <div>
      {{this.name}}
      <label>{{this.email}}</label>
    </div>
    <div id="follow" v-if="id !== connectedUserId">
      <button v-if="!connectedUserFollowers.includes(id)" class="btn" v-on:click="follow(id)">Follow</button>
      <button v-else class="btn" v-on:click="unfollow(id)">Unfollow</button>
    </div>
  </div>
</template>

<script src="../../assets/UserProfile/Subscriber.js">
</script>

<style scoped src="../../assets/UserProfile/Subscriber.css">
</style>
