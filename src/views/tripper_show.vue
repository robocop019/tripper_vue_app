<template>
  <div class="tripper-show">
    <div class="container">
      <h1> Flight #{{flight.id}} </h1>
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
            <td> {{ flight['formatted']['boarding_time'] }} </td>
            <td> {{flight['formatted']['departure_time']}} </td>
            <td>
              <router-link class="airport-link" v-bind:to="'/airport/' + flight['info']['departure_airport']">{{flight['info']['departure_airport']}} </router-link>
            </td>
            <td>
              <router-link class="airport-link" v-bind:to="'/airport/' + flight['info']['arrival_airport']">{{flight['info']['arrival_airport']}} </router-link>
            </td>
            <td> {{flight['status']}} </td>
          </tr>
        </tbody>
      </table>
    
        <button><router-link class="update-flight" v-bind:to="'/flight/' + this.$route.params.id + '/edit'">Update Flight</router-link></button> 

    </div>
  </div>
</template>

<script>
import axios from "axios";
    
export default {
  
  data: function() {
     if (localStorage.getItem('is_employee') === true) {
        console.log("I'm an admin");
      }
    return {
      flight: [],
      user: [],
      // is_employee: localStorage.getItem('is_employee')
    };
  },
  created: function() {
    axios.get('/api/trips/' + this.$route.params.id).then(response => {
      this.flight = response.data;
    });
    
  },
  methods: {
    
  }
};
</script>
