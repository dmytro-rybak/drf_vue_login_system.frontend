<template>
  <section class="vh-100" style="background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);">
  <div class="container py-10 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <h4 class="text-black text-center pt-5"> Sign up </h4>
          <div class="card-body p-5 text-center">
            <form v-on:submit.prevent="register">
              <div class="form mb-3">
                <input v-model="form.first_name" type="text" id="firstName" class="form-control form-control-lg" placeholder="First name" />
              </div>
              <div class="form mb-3">
                <input v-model="form.last_name" type="text" id="lastName" class="form-control form-control-lg" placeholder="Last name" />
              </div>
              <div class="form mb-3">
                <input v-model="form.username" type="text" id="username" class="form-control form-control-lg" placeholder="Username"/>
              </div>

              <div class="form mb-3">
                <input v-model="form.email" type="email" id="email" class="form-control form-control-lg" placeholder="Email address"/>
              </div>

              <div class="form mb-3">
                <input v-model="form.password" type="password" id="password" class="form-control form-control-lg" placeholder="Password"/>
              </div>

              <div class="form mb-4">
                <input v-model="form.passwordConfirm" type="password" id="passwordConfirm" class="form-control form-control-lg" placeholder="Confirm password"/>
              </div>

              <button class="btn btn-primary btn-lg btn-block mb-3" type="submit">Submit</button>
              <hr class="my-4">
              <small>Already a member? <a href="/login">Sign in</a></small>
            </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data(){
    return {
      form: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  mounted() {
    document.title = 'Sign up'
  },
  methods: {
      register: function() {
        if(this.form.password === this.form.passwordConfirm){
          axios.post("http://localhost:8000/api/v1/users/",{
            "first_name": this.form.first_name,
            "last_name": this.form.last_name,
            "username": this.form.username,
            "email": this.form.email,
            "password": this.form.password
          })
          .catch(function (error) {
            console.log(error);
          });
          this.$router.push({name: 'Login'})
      } else {
          alert("Different passwords")
        }
    }
  }
}
</script>
