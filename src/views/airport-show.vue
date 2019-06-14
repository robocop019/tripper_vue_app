<template>
  <div class="airport-show">
    <div class="container">
      <h1> {{airport.name}} </h1>
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
              <tr v-for="flight in flights" v-if="flight.departure_airport === airport_code">
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
              <tr v-for="flight in flights" v-if="flight.arrival_airport === airport_code">
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
      <div class="row">
        <div class="col-md-6">
          
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
      airport_code: "",
      airport: [],
      hotels: [],
      restaurants: []
    };
  },
  created: function() {
    axios.get('/api/trips').then(response => {
      this.flights = response.data;
      console.log(this.flights);
      this.airport_code = this.$route.params.id;
      console.log(this.airport_code);
    });
    axios.get('/api/airports/' + this.$route.params.id).then(response => {
      this.airport = response.data;
      console.log(this.airport);
    });
  },
  methods: {},

  beforeRouteUpdate (to, from, next) {
    axios.get('/api/trips').then(response => {
      this.flights = response.data;
      console.log(this.flights);
      this.airport_code = to.params.id;
      console.log(this.airport_code);
    });
    axios.get('/api/airports/' + to.params.id).then(response => {
      this.airport = response.data;
      console.log(this.airport);
    });
    next();
  }
};
</script>
