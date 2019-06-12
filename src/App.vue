<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <router-link id="tripper-header" class="navbar-brand" to="/">Tripper</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link id="navbar-item-1" class="nav-item nav-link" to="/">Flights</router-link>
          <router-link id="navbar-item-2" class="nav-item nav-link" to="/">Log In</router-link>
          <!-- <span class="sr-only">(current)</span> -->
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
