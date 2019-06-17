<template>
  <div class="home">
    <div class="container">

      <h1 class="page-title">All Flights</h1>
      <br>
      <br>
      <div>
        Search by Airline: <input v-model="airlineFilter"> 
      </div>
        <table class="table table-striped table-dark mt-2">
          <thead>
            <tr>
              <th v-on:click="setSortAttribute('id')" scope="col">{{ isAscending('id') }} Flight #</th>
              <th v-on:click="setSortAttribute('airline')" scope="col">{{ isAscending('airline') }} Airline</th>
              <th v-on:click="setSortAttribute('boarding_time')" scope="col">{{ isAscending('boarding_time') }} Boarding Time</th>
              <th v-on:click="setSortAttribute('departure_time')" scope="col">{{ isAscending('departure_time') }} Departure Time</th>
              <th v-on:click="setSortAttribute('departure_airport')" scope="col">{{ isAscending('departure_airport') }} Departure</th>
              <th v-on:click="setSortAttribute('arrival_airport')" scope="col">{{ isAscending('arrival_airport') }} Arrival</th>
              <th v-on:click="setSortAttribute('status')" scope="col">{{ isAscending('status') }} Status</th>
            </tr>
          </thead>
          <tbody is="transition-group" appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
              <tr v-for="flight in orderBy(filterBy(flights, airlineFilter, 'airline'), sortAttribute, sortAscending)" v-bind:key="flight.id">
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
import Vue2Filters from 'vue2-filters';
import axios from "axios";

export default {
  data: function() {
    return {
      flights: [],
      airlineFilter: "",
      sortAttribute: "id",
      sortAscending: 1
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
  methods: {
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        this.sortAscending *= -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = inputAttribute;
    },
    isAscending: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        return this.sortAscending === 1 ? "⬆️" : "⬇️";
      }
    }
  },
  mixins: [Vue2Filters.mixin]
};
</script>
