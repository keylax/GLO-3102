<template>
  <nav class="nav-extended">
    <div class="purple darken-4 nav-wrapper">
      <a href="#" class="brand-logo">
        <router-link class="nav-logo brand-logo left" to="/">UBeat</router-link>
      </a>
      <a href="#" data-activates="mobile-side-nav" class="button-collapse"><i class="material-icons">menu</i></a>
      <NavBar v-bind:connectedUser="connectedUser" v-on:user-disconnection="disconnectUser" v-bind:navBarID="navBarParams.id" v-bind:navBarClass="navBarParams.class" />
      <NavBarMobile v-bind:connectedUser="connectedUser" v-on:user-disconnection="disconnectUser" v-bind:navBarID="mobileNavBarParams.id" v-bind:navBarClass="mobileNavBarParams.class" />
    </div>
  </nav>
</template>

<script scoped src="../assets/Navigation/Navigation.js"></script>
<style scoped src="../assets/Navigation/Navigation.css"></style>
