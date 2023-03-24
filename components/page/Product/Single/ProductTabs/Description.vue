<template>
  <v-card flat class="ma-5 extend-line">
    <div class="custom-font-15" v-html="productInfo" ></div>
  </v-card>
</template>

<script>
export default {
  name: 'DescriptionTab',

  props: {
    productInfo: {
      type: String,
      default: ''
    }
  },

}
</script>

<style lang="scss" scoped>
</style>