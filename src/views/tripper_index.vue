<template>
  <div class="home">
    <div class="container">
      <h1>All Flights</h1>
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
          <tr v-for="flight in flights">
            <th scope="row"> <router-link class="flight-link" v-bind:to="'/flight/' + flight['id']">{{flight['id']}}</router-link> </th>
            <td> {{flight['airline']}} </td>
            <td> {{flight['formatted']['boarding_time']}} </td>
            <td> {{flight['formatted']['departure_time']}} </td>
            <td> {{flight['departure_airport']}} </td>
            <td> {{flight['arrival_airport']}} </td>
            <td> {{flight['status']}} </td>
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
    if (localStorage.getItem("jwt")) {
    axios.get('http://localhost:3000/api/trips').then(response => {
      this.flights = response.data;
      console.log(flights);
      });
    }
  },
  methods: {}
};
</script>
