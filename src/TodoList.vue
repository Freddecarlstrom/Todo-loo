<style>
	div {
		display: inline-block;
	}
</style>

<template>
    <ul>
        <todo-list-item
                v-for="(listItem, index) in listItems"
                :listItem="listItem"
                @remove="listItems.splice(index, 1)"
        ></todo-list-item>
    </ul>
</template>

<script>
	'use strict';
	var todoListItem = require('TodoListItem.vue')
	module.exports = {
		components: {
			'todo-list-item': todoListItem
		},
		data: function(){
			return {
				listItems: [
					{name: "Kalle", description: "Hej, Kalle."},
					{name: "Lars", description: "Här är Lars."}
				]
			}
		}
	}
</script>