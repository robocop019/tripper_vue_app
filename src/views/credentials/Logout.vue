<template>
  <div class='logout'>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios'

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorizations"];
    localStorage.removeItem("jwt");
    this.$router.push("/");
  }
};
</script>