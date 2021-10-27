<template>
  <section class="vh-100" style="background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);">
  <div class="container py-10 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <h4 class="text-black text-center pt-5"> Sign in </h4>
          <div class="card-body p-5 text-center">
            <form class="login" @submit.prevent="signIn">
              <div class="form mb-3">
                <input required type="text" v-model="login.username"
                       class="form-control form-control-lg" placeholder="Username"/>
              </div>
              <div class="form mb-4">
                <input required type="password" v-model="login.password"
                       class="form-control form-control-lg" placeholder="Password"/>
              </div>
              <button class="btn btn-primary btn-lg btn-block mb-3" type="submit">Log in</button>
            </form>
            <div class="col">
              <small><a href="#">Forgot password?</a></small>
            </div>
            <hr class="my-4">

            <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-4" style="background-color: #3b5998;" type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
            <small>Don't have an account? <a href="/register">Sign Up</a></small>
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
  mounted() {
    document.title = 'Sign in';
  },
  data(){
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    signIn(){
      this.$store.dispatch('login', {"username": this.login.username, "password": this.login.password})
    }
  }
}

</script>
