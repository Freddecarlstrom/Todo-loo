<style>
</style>

<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <bar-component></bar-component>
            </div>
        </div>
        <div class="row">
            <div class=col-md-12>
                <div class="col-md-6">
                    <todo-list></todo-list>
                </div>
                <div class="col-md-6">
                    <new-todo></new-todo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	'use strict';

	var barComponent = require('bar-component.vue');
	var newTodo = require('components/new-todo.vue');
	var TodoList = require('TodoList.vue');

	module.exports = {

		components: {
					'bar-component': barComponent,
					'new-todo': newTodo,
					'todo-list': TodoList,
		},
	}





</script>