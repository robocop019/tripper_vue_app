<template>
  <div class='tripper-update'>
    <h1>Edit Flight</h1>
    <ul> 
      <li v-for="error in errors">
        {{ error }}
      </li>
    </ul>
  <div class='container'>
    <form v-on:submit.prevent="submit()">
      <div class="form-group">
        <label for="status">Flight Status</label>
        <input v-model="flight.status" type="text" class="form-control" id="status" aria-describedby="flightHelp" v-bind:placeholder="trip.status">
      </div>

      <div class="form-group">
        <label for="airline">Airline</label>
        <input v-model="flight.airline" type="text" class="form-control" id="airline" aria-describedby="flightHelp" v-bind:placeholder='trip.airline'>
      </div>

      <div class="form-group">
        <label for="boarding_time">Boarding Time</label>
        <input v-model="flight.boarding_time" type="text" class="form-control" id="boarding_time" aria-describedby="flightHelp" v-bind:placeholder='trip.boarding_time'>
      </div>

      <div class="form-group">
        <label for="arrival_time">Arrival Time</label>
        <input v-model="flight.arrival_time" type="text" class="form-control" id="arrival_time" aria-describedby="flightHelp" v-bind:placeholder="trip.arrival_time">
      </div>
      
      <div class="form-group">
        <label for="departure_time">Departure Time</label>
        <input v-model="flight.departure_time" type="text" class="form-control" id="departure_time" aria-describedby="flightHelp" v-bind:placeholder="trip.departure_time">
      </div>

      <div class="form-group">
        <label for="arrival_airport">Arrival Airport</label>
        <input v-model="flight.arrival_airport" type="text" class="form-control" id="arrival_airport" aria-describedby="flightHelp" v-bind:placeholder="trip.arrival_airport">
      </div>

      <div class="form-group">
        <label for="departure_airport">Departure Airport</label>
        <input v-model="flight.departure_airport" type="text" class="form-control" id="departure_airport" aria-describedby="flightHelp" v-bind:placeholder="trip.departure_airport">
      </div>
      <button type="submit" class="btn btn-info">Update</button>
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
      errors: [],
      trip: [],
      flight: {
              status: "", 
              airline: "",
              boarding_time: "",
              arrival_time: "",
              departure_time: "",
              arrival_airport: "",
              departure_airport: "",
              formatted: {
                          boarding_time: "",
                          departure_time: "",
                          arrival_time: "" 
                        }
              },
    };
  },
  created: function() {
    axios.get('/api/trips/' + this.$route.params.id).then(response => {
      this.trip = response.data 
    })
  },
  methods: {
    submit: function() {
      var params = {
                    status: this.flight.status,
                    airline: this.flight.airline, 
                    boarding_time: this.flight.boarding_time, 
                    arrival_time: this.flight.arrival_time, 
                    departure_time: this.flight.departure_time, 
                    arrival_airport: this.flight.arrival_airport,
                    departure_airport: this.flight.departure_airport
                    };
      axios.patch('/api/trips/' + this.$route.params.id, params).then(response => {
        this.$router.push('/flight/' + this.$route.params.id);
      })
    }
  }
};
</script>


