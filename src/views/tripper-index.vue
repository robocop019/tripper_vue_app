<template>
  <div class="home
  ">
    <div class="container">
      <h1 class="page-title">All Flights</h1>
      <table class="table table-striped table-dark mt-2">
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
          <tr v-for="flight in flights">
            <th scope="row"> <router-link class="flight-link" v-bind:to="'/flight/' + flight['id']">{{flight['id']}}</router-link> </th>
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
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters';

export default {
  data: function() {
    return {
      flights: []
    };
  },
  created: function() {
    // if (localStorage.getItem("jwt")) {
    axios.get('/api/trips').then(response => {
      this.flights = response.data;
      console.log(flights);
      });
    // }
  },
  methods: {}
};
</script>
