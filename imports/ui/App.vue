<template>
  <div class="app">
    <!-- 
    <h1>Welcome to Meteor!</h1>
    <hello/>
    <info/> 
    -->
    <header>
      <div className="app-bar">
        <div className="app-header">
          <h1>
            📝️ Todo list&nbsp;
            <span v-if="incompleteCount > 0">({{ incompleteCount }})</span>
          </h1>
        </div>
      </div>
    </header>
    <div class="main">
      <TaskForm />

      <div class="filter">
        <button
            v-model="hideCompleted"
            @click="toggleHideCompleted"
        >
          <span v-if="hideCompleted">Show All</span>
          <span v-else>Hide Completed Tasks</span>
        </button>
      </div>

      <ul class="tasks">
        <Task 
          class="task"
          v-for="task in tasks" 
          v-bind:key="task._id"
          v-bind:task="task"
        />
      </ul>
    </div>
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
    return {
      hideCompleted: false
    };
  },
  methods: {
    toggleHideCompleted() {
      this.hideCompleted = !this.hideCompleted;
    }
  },
  meteor: {
    tasks() {
      let filteredTasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
    
      if (this.hideCompleted) {
        filteredTasks = filteredTasks.filter(task => !task.checked);
      }

      return filteredTasks;
    },
    incompleteCount(){
      return TasksCollection.find({checked: { $ne: true }}).count()
    }
  }
}
</script>
