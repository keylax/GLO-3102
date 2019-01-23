// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'materialize-css/dist/css/materialize.css';

import 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';

import Vue from 'vue';
import axios from 'axios';
import Meta from 'vue-meta';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';


Vue.use(VueAxios, axios);
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
