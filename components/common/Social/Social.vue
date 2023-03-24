<template>
  <v-btn
    :to="social.path"
    class="social_btn mx-1 d-flex justify-center"
    fab
    x-small
    color="#1d1e24"
  >
    <v-icon class="social_btn_icon" :color="social.color">
      {{ social.icon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'SingleSocial',

  props: {
    social: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.social_btn {
  @include applyTransition;

  &:hover {
    background-color: white !important;

    .social_btn_icon {
      color: black !important;
    }
  }
}
</style>