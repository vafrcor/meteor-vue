<template>
	<form class="task-form" @submit.prevent="handleSubmit">
		<input type="text" placeholder="Type to add new task" v-model="newTask" />
		<button type="submit">Add Task</button>
	</form>
</template>

<script>
  import Vue from 'vue';
  import { TasksCollection } from "../../api/collections/Tasks";

  export default {
    data(){
      return {
        newTask: ""
      }
    },
    methods: {
      handleSubmit(event){
        if (this.newTask.length === 0) return;

        const user= Meteor.user();

        Meteor.call('tasks.insert', this.newTask.trim());

        // Clear form
        this.newTask= "";
      }
    }
  }
</script>
