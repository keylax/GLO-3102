<template>
    <ul v-bind:id="navBarID" v-bind:class="navBarClass">
        <li class="pull-left">
            <NavLink v-bind:textLink="playlistsLink.textLink"
                     v-bind:iconLink="playlistsLink.iconLink" 
                     v-bind:routerLink="playlistsLink.routerLink"
                     v-bind:containerClass="navLinkClass.containerClass"
                     v-bind:routerClass="navLinkClass.routerClass"
                     v-bind:iconClass="navLinkClass.iconClass"
                     v-bind:textClass="navLinkClass.textClass"/>
        </li>
        <li class="pull-left search-li">
            <NavSearch v-bind:containerClass="searchClass.containerClass"
                       v-bind:inputClass="searchClass.inputClass"
                       v-bind:labelClass="searchClass.labelClass"
                       v-bind:idClearButton="searchID.idClearButton"
                       v-bind:idInput="searchID.idInput"/>
        </li>
        <li class="pull-right" v-on:click="disconnectUser" v-if="connectedUser.length !== 0">
            <NavLink v-bind:textLink="logoutLink.textLink" 
                     v-bind:iconLink="logoutLink.iconLink" 
                     v-bind:routerLink="logoutLink.routerLink"
                     v-bind:containerClass="navLinkClass.containerClass"
                     v-bind:routerClass="navLinkClass.routerClass"
                     v-bind:iconClass="navLinkClass.iconClass"
                     v-bind:textClass="navLinkClass.textClass"/>
        </li>
        <li class="pull-right" v-if="connectedUser.length !== 0">
            <NavLink v-bind:textLink="settingsLink.textLink" 
                     v-bind:iconLink="settingsLink.iconLink" 
                     v-bind:routerLink="settingsLink.routerLink"
                     v-bind:containerClass="navLinkClass.containerClass"
                     v-bind:routerClass="navLinkClass.routerClass"
                     v-bind:iconClass="navLinkClass.iconClass"
                     v-bind:textClass="navLinkClass.textClass"/>
        </li>
        <li class="pull-right" v-if="connectedUser.length === 0">
            <NavLink v-bind:textLink="signinLink.textLink" 
                     v-bind:iconLink="signinLink.iconLink" 
                     v-bind:routerLink="signinLink.routerLink"
                     v-bind:containerClass="navLinkClass.containerClass"
                     v-bind:routerClass="navLinkClass.routerClass"
                     v-bind:iconClass="navLinkClass.iconClass"
                     v-bind:textClass="navLinkClass.textClass"/>
        </li>
        <li class="pull-right" v-if="connectedUser.length === 0">
            <NavLink v-bind:textLink="signupLink.textLink" 
                     v-bind:iconLink="signupLink.iconLink" 
                     v-bind:routerLink="signupLink.routerLink"
                     v-bind:containerClass="navLinkClass.containerClass"
                     v-bind:routerClass="navLinkClass.routerClass"
                     v-bind:iconClass="navLinkClass.iconClass"
                     v-bind:textClass="navLinkClass.textClass"/>
        </li>
        <li class="connected-user pull-right" v-if="connectedUser.length !== 0">
            <NavLabel v-bind:textLabel="connectedUser" 
                      v-bind:iconLabel="accountLabel.iconLabel"/>
        </li>
        <li class="home-icon pull-right">
            <router-link class="nav-home-icon material-icons nav-link" to="/">home</router-link>
        </li>
    </ul>
</template>

<script scoped src="../../assets/Navigation/NavBar/NavBar.js"></script>
<style scoped src="../../assets/Navigation/NavBar/NavBar.css"></style>
