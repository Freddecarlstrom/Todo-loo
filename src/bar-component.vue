<style scoped>

nav {
	display: inline-block;
	background-color: #9fc3dd;
	margin: 60px auto 45px;
}

nav a {
	display: inline-block;
	padding: 20px;
	font-weight: bold;
	font-size: 14px;
	text-decoration: none;
}

.button {
	background-color: green;
	color: white;
}


nav a:first-child{
	border-radius: 2px 0 0 2px;
}
nav a:last-child {
 	border-radius: 0 2px 2px 0;
}

</style>

<template>
	<div class="bar">
		<nav v-on:click.prevent>
			<a href="#">Home</a>
			<a href="#">About</a>
			<a href="#">Call me</a>
			<form>
				Search for a Todo-loo
				<input v-model="searchMsg" placeholder="A Todo-loo">
				<button class="button" v-on:click="search">DO IT</button>
			</form>
		</nav>
	</div>
</template>

<script>
	'use strict';

	module.exports = {
		data: {
			searchMsg: 'nothing'
		},

		methods: {
			search: function(event) {
				alert('You searched for: ' + this.searchMsg)
			},
		}

	}
</script>