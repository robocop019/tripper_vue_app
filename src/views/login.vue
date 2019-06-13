<template>
<body>
  <div class='login'>
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Log In</h1>
          <div class="w-80 form-group">
            <label for="userEmail">Email address</label>
            <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">Please enter your full email</small>
          </div>

          <div class="w-80 form-group">
            <label for="userPassword">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
          </div>

          <!-- <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="remember me">
            <label class="form-check-label" for="remember me">Remember me</label>
          </div> -->
        <center><button type="submit" class="btn btn-info" value="submit">Submit</button></center>
      </form>

    </div>
  </div>
</body>
</template>

<style>
 
</style>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data: function() {
    return {
      email: '', 
      password: '', 
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
      });
    }
  }

};
</script>
