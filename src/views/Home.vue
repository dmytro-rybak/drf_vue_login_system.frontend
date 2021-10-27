<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{user.firstName}} {{user.lastName}}</p>
    <p>Username: {{user.username}}</p>
    <p>Email: {{user.email}}</p>
    <button v-on:click="logout" type="button">Logout</button>
    <p></p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
    return {
      user: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
      },
    }
  },
  mounted() {
     axios.get('http://localhost:8000/api/v1/users/me/', {headers: {'Authorization': "JWT " + this.$store.state.accessToken}})
      .then(response => {
        this.user.username = response.data.username;
        this.user.email = response.data.email
        this.user.firstName = response.data.first_name;
        this.user.lastName = response.data.last_name
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>
