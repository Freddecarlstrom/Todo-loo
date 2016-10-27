<style>
</style>

<template>
	<div>
		<todo-list></todo-list>
	</div>
</template>

<script>
	'use strict';
	var TodoList = require('TodoList.vue')
	module.exports = {
		components: {
			'todo-list': TodoList
		}
	}
</script>