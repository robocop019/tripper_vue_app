<template>
  <div class="airport-show">
    <div class="container">
      <h1 class="page-title"> {{airport.name}} </h1>
      <br>
      <br>
      <div class="row">
        <div class="col-md-6">
          <h2 class="departures">Departures</h2>
          <table class="table table-striped table-dark table-hover mt-2">
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
                <td class="status-green" v-if="flight['status'] === 'On Time'"> {{flight['status']}} </td>
                <td class="status-yellow" v-else-if="flight['status'] === 'Delayed'"> {{flight['status']}} </td>
                <td class="status-red" v-else-if="flight['status'] === 'Cancelled'"> {{flight['status']}} </td>
                <td class="status-blue" v-else-if="flight['status'] === 'Departed'"> {{flight['status']}} </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h2 class="arrivals">Arrivals</h2>
          <table class="table table-striped table-dark table-hover mt-2">
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
                {{ flight.lodging }}
                <th scope="row"> <router-link class="flight-link" v-bind:to="'/flight/' + flight['id']">{{flight['id']}}</router-link> </th>
                <td> {{flight['airline']}} </td>
                <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['departure_airport']">{{flight['departure_airport']}} </router-link></td>
                <td> {{flight['formatted']['arrival_time']}} </td>
                <td class="status-green" v-if="flight['status'] === 'On Time'"> {{flight['status']}} </td>
                <td class="status-yellow" v-else-if="flight['status'] === 'Delayed'"> {{flight['status']}} </td>
                <td class="status-red" v-else-if="flight['status'] === 'Cancelled'"> {{flight['status']}} </td>
                <td class="status-blue" v-else-if="flight['status'] === 'Departed'"> {{flight['status']}} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2 class="hotels">Nearby Hotels</h2>
          <br>
          <br>
          <ul class="list-group list-group-flush list-hover">
            <div v-for="hotels_nearby in hotels">
              <div v-for="hotel in hotels_nearby['list']">
                <li class="list-group-item list-group-item-dark" v-if="hotel['types'].indexOf('lodging') !== -1">
                  {{ hotel['name'] }}
                    <br>
                  {{ hotel['vicinity'] }}
                  Rating: {{ hotel['rating'] }}
                    <br>
                  Total Reviews: {{ hotel['user_ratings_total'] }}
                </li>
              </div>
          </div>
          </ul>
        </div>
        <div class="col-md-6">
          <h2 class="restaurants">Nearby Restaurants</h2>
          <br>
          <br>
          <ul class="list-group list-group-flush">
            <div v-for="restaurant in restaurants">
              <div v-for="food in restaurant['list']">
            <li class="list-group-item list-group-item-dark" v-if="food['types'].indexOf('food') !== -1">
              {{ food['name'] }}
                <br>
              {{ food['vicinity'] }}
                <br>
              Rating: {{ food['rating'] }}
                <br>
              Total Reviews: {{ food['user_ratings_total'] }}
            </li>
            
              </div>
            </div>
          </ul>
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
      // console.log(this.flights);
      this.airport_code = this.$route.params.id;
      // console.log(this.airport_code);
    });
    axios.get('/api/airports/' + this.$route.params.id.toUpperCase()).then(response => {
      this.airport = response.data;
      this.restaurants = response.data;
      this.hotels = response.data;
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
      this.restaurants = response.data;
      this.hotels = response.data;

      // console.log(this.airport);
    });
    next();
  }
};
</script>
