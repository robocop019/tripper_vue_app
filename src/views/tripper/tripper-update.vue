<template>
  <div class='tripper-update'>
    <h1>Edit a Flight</h1>
    <ul> 
      <li v-for="error in errors">
        {{ error }}
      </li>
    </ul>

    <form v-on:submit.prevent="submit()">

      <div>
        Status: <input v-model="flight.status">
      </div>

      <div>
        Airline: <input v-model="flight.airline">
      </div>

      <div>
        Boarding Time: <input v-model="flight.boarding_time">
      </div>

      <div>
        Arrival Time: <input v-model="flight.arrival_time">
      </div>
      
      <div>
        Departure Time: <input v-model="flight.departure_time">
      </div>

      <div>
        Arrival Airport: <input v-model="flight.arrival_airport">
      </div>

      <div>
        Departure Airport: <input v-model="flight.departure_airport">
      </div>

    </form>
      
  <button v-on:click="submit()">Update</button>

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
