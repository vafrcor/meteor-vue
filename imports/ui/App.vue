<template>
  <div>
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
        v-for="task in getTasks()" 
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
    getTasks() {
      return [
        { _id: 1, text: "This is task 1" },
        { _id: 2, text: "This is task 2" },
        { _id: 3, text: "This is task 3" },
        { _id: 4, text: "This is task 4" }
      ];
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
