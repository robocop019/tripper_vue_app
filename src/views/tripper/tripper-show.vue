<template>
  <div class="tripper-show">
    <div class="container">
      <h1 class="page-title"> Flight #{{flight.id}} </h1>
      <br>
      <br>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Flight #</th>
            <th scope="col">Airline</th>
            <th scope="col">Boarding Time</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Departure</th>
            <th scope="col">Arrival</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{{flight['id']}}</th>
            <td> {{flight['airline']}} </td>
            <td> {{flight['formatted']['boarding_time']}} </td>
            <td> {{flight['formatted']['departure_time']}} </td>
            <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['departure_airport']">{{flight['departure_airport']}} </router-link></td>
            <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['arrival_airport']">{{flight['arrival_airport']}} </router-link></td>
            <td class="status-green" v-if="flight['status'] === 'On Time'"> {{flight['status']}} </td>
            <td class="status-yellow" v-else-if="flight['status'] === 'Delayed'"> {{flight['status']}} </td>
            <td class="status-red" v-else-if="flight['status'] === 'Cancelled'"> {{flight['status']}} </td>
            <td class="status-blue" v-else-if="flight['status'] === 'Departed'"> {{flight['status']}} </td>
          </tr>
        </tbody>
      </table>

    </div>
      <router-link v-bind:to="'/flight/' + flight['id'] + '/edit'"><button type="submit" class="btn btn-info">Edit</button></router-link>
      <button v-on:click="deleteFlight()" class="btn btn-danger mx-2">Delete Flight</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      flight: []
    };
  },
  created: function() {
    axios.get('/api/trips/' + this.$route.params.id).then(response => {
      this.flight = response.data;
    });
  },
  methods: {
    deleteFlight: function() {
      axios.delete('api/trips/' + this.$route.params.id).then(response => {
        this.$router.push('/');
      })
    }
  }
};
</script>
