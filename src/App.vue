<template>
  <div class="app-wrapper">
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background-color: #f7f7f7;
}
</style>