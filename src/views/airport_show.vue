<template>
  <div class="airport_show">
    <div class="container">
      <h1> {{this.$route.params.id}} </h1>
      <div class="row">
        <div class="col-md-6">
          <h1>Departures</h1>
          <table class="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Flight #</th>
                <th scope="col">Airline</th>
                <th scope="col">Boarding Time</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Arrival</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="flight in flights" v-if="flight.departure_airport === airport">
                <th scope="row"> <router-link class="flight-link" v-bind:to="'/flight/' + flight['id']">{{flight['id']}}</router-link> </th>
                <td> {{flight['airline']}} </td>
                <td> {{flight['formatted']['boarding_time']}} </td>
                <td> {{flight['formatted']['departure_time']}} </td>
                <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['arrival_airport']">{{flight['arrival_airport']}} </router-link></td>
                <td> {{flight['status']}} </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h1>Arrivals</h1>
          <table class="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Flight #</th>
                <th scope="col">Airline</th>
                <th scope="col">Departed</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="flight in flights" v-if="flight.arrival_airport === airport">
                <th scope="row"> <router-link class="flight-link" v-bind:to="'/flight/' + flight['id']">{{flight['id']}}</router-link> </th>
                <td> {{flight['airline']}} </td>
                <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['departure_airport']">{{flight['departure_airport']}} </router-link></td>
                <td> {{flight['formatted']['arrival_time']}} </td>
                <td> {{flight['status']}} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      flights: [],
      airport: "",
      hotels: [],
      restaurants: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/trips').then(response => {
      this.flights = response.data;
      this.airport = this.$route.params.id
    });
  },
  methods: {}
};
</script>
