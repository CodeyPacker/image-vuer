<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>
    <div class="right menu">
    <div v-if="isLoggedIn">
      Logout
    </div>
    <a v-else href="#" class="ui item" @click="login">
      Login
    </a>
    </div>
  </div>
</template>

<script>
// Connect login action to component via "mapActions"
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login'])
}

// if other methods are needed use this syntax:

//  methods: {
//    ...mapActions(['login']),
//    newMethod() {
//  }

</script>