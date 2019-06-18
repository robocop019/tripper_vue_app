<template>
  <div class='tripper-new'>
    <h1>Create a Flight</h1>

<div class='container'>
    <form v-on:submit.prevent="submit()">
      <div class="form-group">
        <label for="status">Flight Status</label>
        <input v-model="status" type="text" class="form-control" id="status" aria-describedby="flightHelp" placeholder="Status">
      </div>

      <div class="form-group">
        <label for="airline">Airline</label>
        <input v-model="airline" type="text" class="form-control" id="airline" aria-describedby="flightHelp" placeholder='Airline'>
      </div>

      <div class="form-group">
        <label for="boarding_time">Boarding Time</label>
        <input v-model="boarding_time" type="text" class="form-control" id="boarding_time" aria-describedby="flightHelp" placeholder='trip.boarding_time'>
      </div>

      <div class="form-group">
        <label for="arrival_time">Arrival Time</label>
        <input v-model="arrival_time" type="text" class="form-control" id="arrival_time" aria-describedby="flightHelp" placeholder="Arrival_time">
      </div>
      
      <div class="form-group">
        <label for="departure_time">Departure Time</label>
        <input v-model="departure_time" type="text" class="form-control" id="departure_time" aria-describedby="flightHelp" placeholder="Departure_time">
      </div>

      <div class="form-group">
        <label for="arrival_airport">Arrival Airport</label>
        <input v-model="arrival_airport" type="text" class="form-control" id="arrival_airport" aria-describedby="flightHelp" placeholder="Aarrival Airport">
      </div>

      <div class="form-group">
        <label for="departure_airport">Departure Airport</label>
        <input v-model="departure_airport" type="text" class="form-control" id="departure_airport" aria-describedby="flightHelp" placeholder="Departure Airport">
      </div>
      <button type="submit" class="btn btn-info">Create</button>
    </form>
  </div>


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
      var params = {
                    status: this.newStatus, 
                    airline: this.newAirline,
                    arrival_time: this.newArrivalTime,
                    boarding_time: this.newBoardingTime,
                    departure_time: this.newDepartureTime, 
                    departure_airport: this.newDepartureAirport,
                    arrival_airport: this.newArrivalAirport
                    };

      axios.post('api/trips', params).then(response => {
        this.$router.push('/flights') 
      })
    }
  }
};
</script>