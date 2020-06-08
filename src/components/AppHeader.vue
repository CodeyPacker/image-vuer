<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
    Image Storage
    </a>
  </div>
</template>

<script>
// Connect action to component via "mapActions"
import { mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  methods: mapActions(['login'])
}
</script>