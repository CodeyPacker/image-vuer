<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>

    <div class="right menu">
    <a href="#" class="ui item" @click="login">
      Login
    </a>
    </div>
  </div>
</template>

<script>
// Connect login action to component via "mapActions"
import { mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  methods: mapActions(['login'])
}

// if other methods are needed use this syntax:

//  methods: {
//    ...mapActions(['login']),
//    newMethod() {
//  }

</script>