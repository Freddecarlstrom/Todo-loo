<style>
</style>

<template>
	<div>
		<todo-list></todo-list>
	</div>
</template>

<script>
	'use strict';
	var newTodo = require('components/new-todo.vue');
	var TodoList = require('TodoList.vue')

	module.exports = {

		components: {
			'new-todo': newTodo,
		'todo-list': TodoList
		},
	}

</script>