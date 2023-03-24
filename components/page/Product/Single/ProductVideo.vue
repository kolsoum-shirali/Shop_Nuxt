<template>
  <v-card flat class="rounded-lg pa-0">
    <video
      controls
      :poster="imageLink"
      width="100%"
      height="100%"
    >
      <source :src="videoLink" type="video/mp4" />
    </video>
  </v-card>
</template>

<script>
export default {
  name: 'ProductVideo',

  props: {
    videoLink: {
      type: String,
      default: ''
    },
    imageLink: {
      type: String,
      default: ''
    }
  }




}
</script>

<style lang="scss" scoped>
</style>