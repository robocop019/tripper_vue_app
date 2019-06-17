<template>
  <div class='tripper-update'>
    <h1>Message</h1>
      {{ trip }}
      
    <ul>
      <li v-for="error in errors">
        {{ error }}
      </li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Status:<input type="text" v-model="trip.status">
      </div>
        Airline: <input v-model="trip.airline">
      <div>
        Boarding Time: <input v-model="trip.formatted.boarding_time">
      </div>

      <div>
        Departure Time: <input v-model="trip.formatted.departure_time">
      </div>

      <div>
        Departure Airport:: <input v-model="trip.departure_airport">
      </div>

      <div>
        Arrival Airport: <input v-model="trip.arrival_airport">
      </div>

      <input type="submit" value = "Update Flight">
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
      errors: [], 
      trip: {
              status: "",
              airline: "",
              boarding_time: "",
              departure_time: "",
              arrival_airport: "",
              departure_airport: ""
            }
    };
  },
  created: function() {
    axios.get('/api/trips/' + this.$route.params.id).then(response => {
      console.log(this.trip);
      this.trip = response.data;
    }); 
  },
  methods: {
    submit: function() {
      var params = {
                    status: this.trip.status, 
                    airline: this.trip.airline,
                    boarding_time: this.trip.boarding_time,
                    departure_time: this.trip.departure_time, 
                    arrival_airport: this.trip.arrival_airport,
                    };

      axios.patch('api/trips/' + this.$route.params.id, params).then(response => {
        this.$router.push('/');
      })
    }
  }
};
</script>