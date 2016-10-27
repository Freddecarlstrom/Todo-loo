<style>
    #todo-description{
        margin-top:5%;
    }
</style>

<template>
    <div class="col-md-12">
        <h1>Create new todo-loo</h1>
        <div class="row">
            <div class="col-md-offset-3 col-md-6">
                <input class="form-control" v-model="name" placeholder="Name">
            </div>
            <div class="col-md-offset-3 col-md-6" id="todo-description">
                <textarea class="form-control" v-model="description" placeholder="Add description"  rows="10"></textarea>
            </div>
            <button class="btn btn-primary" v-on:click="saveTodo">Save</button>
        </div>
    </div>
</template>

<script>
    'use strict';

    module.exports = {
        data: function() {
            return {
                name: 'Test',
                description: 'Hej hej'
            }
        },
        methods: {
            saveTodo: function() {
                fetch('http://localhost:9090/todos', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        description: this.description,
                    })
                })
            }
        }
    }
</script>