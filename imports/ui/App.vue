<template>
  <div class="container">
    <!-- 
    <h1>Welcome to Meteor!</h1>
    <hello/>
    <info/> 
    -->
    <header>
      <h1> Todo list</h1>
    </header>
    <TaskForm />
    <ul>
      <Task 
        v-for="task in tasks" 
        v-bind:key="task._id"
        v-bind:task="task"
      />
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
// import Hello from './components/Hello.vue';
// import Info from './components/Info.vue';
import Task from './components/Task.vue';
import TaskForm from './components/TaskForm.vue';
import { TasksCollection } from "../api/collections/Tasks.js";

export default {
  components: {
    // Hello,
    // Info,
    Task,
    TaskForm
  },
  data(){
    return {};
  },
  methods: {},
  meteor: {
    tasks() {
      return TasksCollection.find({}, { sort: { createdAt: -1 }}).fetch();
    }
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
  .new-task{
    margin-top: 1rem;
    border-color: red;
  }
</style>
