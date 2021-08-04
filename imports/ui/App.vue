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
import { TasksCollection } from "../api/collections/Tasks.js";

export default {
  components: {
    // Hello,
    // Info,
    Task
  },
  data(){
    return {};
  },
  methods: {
    getTasks(){
      return [
        { _id: 1, text: 'ABC' },
        { _id: 2, text: 'DEF' },
        { _id: 3, text: 'GHI' }
      ]
    }
  },
  meteor: {
    tasks() {
      return TasksCollection.find({}).fetch();
    }
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
