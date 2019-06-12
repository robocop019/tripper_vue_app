<template>
  <div class='login'>
   <div class="container">

      <form>
        <center>
          <div class="w-75 form-group">
            <label for="userEmail">Email address</label>
            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">Please enter your full email</small>
          </div>
        </center>

        <center>
          <div class="w-75 form-group">
            <label for="userPassword">Password</label>
            <input type="password" class="form-control" id="userPassword" placeholder="Password">
          </div>
        </center>

          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="remember me">
            <label class="form-check-label" for="remember me">Remember me</label>
          </div>

        <button type="submit" class="btn btn-primary">Submit</button> 
      </form>

    </div>

  </div>
</template>

<style>

</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {

    };
  },
  created: function() {

  },
  methods: {

  }
};
</script>
