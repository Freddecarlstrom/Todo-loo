'use strict';

// Vendor
var Vue = require('vue');
// Bootstrap CSS
require('bootstrap/dist/css/bootstrap.min.css');
// Components
var App = require('App.vue');

// Start app
var app = new Vue({
	el: '#app',
	template: '<app></app>',
	components: {
		app: App
	}
});