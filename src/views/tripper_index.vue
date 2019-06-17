<template>
  <div class="tripper-index">
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
            <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['airport_info']['departure_airport']">{{flight['airport_info']['departure_airport']}} </router-link></td>
            <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['airport_info']['arrival_airport']">{{flight['airport_info']['arrival_airport']}} </router-link></td>
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
      flights: [],
      hidden: true
    };
  },

  created: function() {
    if (localStorage.getItem("jwt")) {
      var func = response => {
        this.flights = response.data;
        console.log('somthing');
      }

      axios.get('/api/trips').then(func);
    }

    console.log('fsdf');
  },
  methods: {
  }
};
</script>
