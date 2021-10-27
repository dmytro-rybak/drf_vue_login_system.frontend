<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import store from "./store";
import mapGetters from "vuex/dist/vuex.mjs";
import mapState from "vuex/dist/vuex.mjs";

export default {
  computed: {
    access(){
      return this.$store.state.accessToken
    },
    refresh(){
      return this.$store.state.refreshToken
    },
    auth(){
      return this.$store.getters.isAuth
    }
  },
  mounted() {
    if (this.access){
      store.dispatch('verifyToken',{"accessToken": this.accessToken, "refreshToken": this.refreshToken})
    }
  }
}
</script>

