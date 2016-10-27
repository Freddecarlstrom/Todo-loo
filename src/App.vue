<style>
</style>

<template>
	<div>
		Todo-loo
		<new-todo></new-todo>
	</div>
</template>

<script>
	'use strict';
	var newTodo = require('components/new-todo.vue');
	module.exports = {

		components: {
			'new-todo': newTodo
		},
	}

</script>