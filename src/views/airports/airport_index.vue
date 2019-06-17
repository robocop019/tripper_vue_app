<template>
  <div class="airport-show">
    <div class="container">
      <h1> {{airport.name}} </h1>
      
      <!-- <p>{{ data['results']['geometry'] }}</p> -->

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
              <tr v-for="flight in flights">
                {{ flight['arrival_code'] }}
                <th scope="row"> <router-link class="flight-link" v-bind:to="'/flight/' + flight['id']">{{flight['id']}}</router-link> </th>
                <td> {{flight['airline']}} </td>
                <td> {{flight['formatted']['boarding_time']}} </td>
                <td> {{flight['formatted']['departure_time']}} </td>
                <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['airport_info']['arrival_airport']">{{flight['airport_info']['arrival_airport']}} </router-link></td>
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
              <tr v-for="flight in flights">
                <th scope="row"> <router-link class="flight-link" v-bind:to="'/flight/' + flight['id']">{{flight['id']}}</router-link> </th>
                <td> {{flight['airline']}} </td>
                <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['airport_info']['departure_airport']">{{flight['airport_info']['departure_airport']}} </router-link></td>
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
      arrival_code: "",
      departure_code: '', 
      airport: [],
      hotels: [],
      restaurants: [],
      data: []
    };
  },
  created: function() {
    axios.get('/api/trips').then(response => {
      this.flights = response.data;
      this.departure_code = this.flights.departure_airport;
      this.arrival_code = this.flights.arrival_airport;
      // console.log(this.airport_code);
    });
    axios.get('/api/airports/' + this.$route.arrival_code).then(response => {
      this.airport = response.data;
      // this.data = respnose.data; 
      // console.log(this.airport);
    });
  },
  methods: {},
  beforeRouteUpdate (to, from, next) {
    axios.get('/api/trips').then(response => {
      this.flights = response.data;
      // console.log(this.flights);
      this.airport_code = to.params.id;
      // console.log(this.airport_code);
    });
    axios.get('/api/airports/' + to.params.id).then(response => {
      this.airport = response.data;
      // console.log(this.airport);
    });
    next();
  }
};
</script>
