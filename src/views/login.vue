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
        <center><button type="submit" id="logged_in" class="btn btn-info" value="submit">Submit</button></center>

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
  data: function() {
    return {
      email: '', 
      password: '', 
      user_id: '',
      errors: []
    };
  },
  created: function() {
    // $('button.btn').disable(false);
    if (localStorage.getItem('jwt')) {
     
      alert("You're already logged in!")
      axios.get('/api/trips').then(response => {
      this.flights = response.data;
      this.$router.push('/');
      })

    }
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
          // console.log(response.data.user_id);
          localStorage.setItem('is_employee', response.data.is_employee);
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
