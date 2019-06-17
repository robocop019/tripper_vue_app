<template>
  <div class='trippernew'>
    <h1>Message</h1>
      <form v-on:submit.prevent="submit()">
        <div>
          Status:<input type="text" v-model="newStatus">
        </div>
          Airline: <input v-model="newAirline">
        <div>
          Boarding Time: <input v-model="newBoardingTime">
        </div>

        <div>
          Departure Airport: <input v-model="newDepartureAirport">
        </div>

        <div>
          Departure Time: <input v-model="newDepartureTime">
        </div>

        <div>
          Arrival Airport: <input v-model="newArrivalAirport">
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
                    boarding_time: this.newBoarding_time,
                    departure_time: this.newDeparture_time, 
                    arrival_airport: this.newArrival_airport
                    };

      axios.post('api/trips').then(response => {
        this.$router.push('/') 
      })
    }
  }
};
</script>