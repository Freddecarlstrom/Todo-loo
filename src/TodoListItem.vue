<style>
</style>

<template>
    <li>
        <h2>{{listItem.name}} <button v-on:click="$emit('remove')">X</button></h2>
        <p>
            {{listItem.description}}
        </p>
    </li>
</template>

<script>
	'use strict';
	module.exports = {
		props: ['listItem']

	}
</script>