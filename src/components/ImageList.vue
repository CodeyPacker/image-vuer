<template>
  <div>
    <!-- When a variable needs to be used in an attribute, use "v-bind:" or ":" -->
    <img v-for="image in allImages" :src="image.link" :key="image.id" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages()
  }
}
</script>