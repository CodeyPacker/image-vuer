<template>
  <div class="dropper">
    <!--
      By using $event.target.files like this,
      I can pass the images directly as an argument

      (the '$event' tells vue that I want to take the
      event object from @change, instead of looking for a variable, etc...)
    -->
    <input
      type="file"
      @change="uploadImages($event.target.files)"
      multiple
      accept="image/*"
      />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>