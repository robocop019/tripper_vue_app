<template>
  <div class="home">
    <div class="container">
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
            <td> {{flight['departure_airport']}} </td>
            <td> {{flight['arrival_airport']}} </td>
            <td> {{flight['status']}} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      flight: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/trips/' + this.$route.params.id).then(response => {
      this.flight = response.data;
      console.log(flight);
    });
  },
  methods: {}
};
</script>
