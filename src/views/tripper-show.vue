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
            <td> {{flight['formatted']['boarding_time']}} </td>
            <td> {{flight['formatted']['departure_time']}} </td>
            <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['departure_airport']">{{flight['departure_airport']}} </router-link></td>
            <td><router-link class="airport-link" v-bind:to="'/airport/' + flight['arrival_airport']">{{flight['arrival_airport']}} </router-link></td>
            <td> {{flight['status']}} </td>
          </tr>
        </tbody>
      </table>

      <button><router-link to='/flight/:id/edit'>Update Flight</router-link> </button>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
    
export default {
  data: function() {
    return {
      flight: [],
      user: [],
      hidden: true
    };
  },
  created: function() {
    axios.get('/api/trips/' + this.$route.params.id).then(response => {
      this.flight = response.data;
      // var hidden = true 

    });
        if (localStorage.getItem('is_employee') == false) {
          this.hidden = true 
        } else {
          this.hidden = false;
        }
  },

  methods: {
    updateFlight: function() {
      
    }
  }
};
</script>
