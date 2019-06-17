<template>
  <div class='tripper-new'>
    <h1>Create a Flight</h1>
      <form v-on:submit.prevent="submit()">
        <div>
          Status: <input v-model="newStatus">
        </div>

        <div>
          Airline: <input v-model="newAirline">
        </div>

        <div>
          Boarding Time: <input v-model="newBoardingTime">
        </div>

        <div>
          Arrival Time: <input v-model="newArrivalTime">
        </div>
        
        <div>
          Departure Time: <input v-model="newDepartureTime">
        </div>

        <div>
          Arrival Airport: <input v-model="newArrivalAirport">
        </div>

        <div>
          Departure Airport: <input v-model="newDepartureAirport">
        </div>

      <input type="submit" value = "Create Flight">
    </form>

  </div>
</template>


<style>
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      newStatus: "", 
      newAirline: "",
      newArrivalTime: "",
      newBoardingTime: "",
      newDepartureTime: "",
      newDepartureAirport: "",
      newArrivalAirport: ""
    };
  },
  created: function() {

  },
  methods: {
    submit: function() {
      console.log('fdsfs');
      var params = {
                    status: this.newStatus, 
                    airline: this.newAirline,
                    arrival_time: this.newArrivalTime,
                    boarding_time: this.newBoardingTime,
                    departure_time: this.newDepartureTime, 
                    departure_airport: this.newDepartureAirport,
                    arrival_airport: this.newArrivalAirport
                    };

      axios.post('api/trips').then(response => {
        this.$router.push('/') 
      })
    }
  }
};
</script>