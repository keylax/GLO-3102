<template>
    <div>
        <router-link v-bind:to="routerLink" v-bind:class="routerClass">
            <div v-bind:class="containerClass">
                <i v-bind:class="iconClass">{{iconLink}}</i>
                <p v-bind:class="textClass">{{textLink}}</p>
            </div>
        </router-link>  
    </div>
</template>

<script scoped src="../../assets/Navigation/NavLink/NavLink.js"></script>
<style scoped src="../../assets/Navigation/NavLink/NavLink.css"></style>
