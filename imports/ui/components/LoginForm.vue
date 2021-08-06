<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username</label>
      <input 
        id="username"
        type="text" 
        name="username"
        placeholder="Username"
        required 
        v-model="username" 
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input 
        id="password"
        type="password" 
        name="password"
        placeholder="Password"
        required 
        v-model="password" 
      />
    </div>
    <div>
      <button type="submit">Log In</button>
    </div>
  </form>
</template>

<script>
  import { Meteor } from 'meteor/meteor';

  export default {
    name: "LoginForm",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      handleSubmit(event){
        Meteor.loginWithPassword(this.username, this.password);
      }
    }

  }
</script>
