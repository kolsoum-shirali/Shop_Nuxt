<template>
  <div class="block d-flex justify-space-between">
    <div class="block__title d-flex align-center">
      <v-icon :color="blockTitle.color?blockTitle.color:'grey'" size="40">{{ blockTitle.icon }}</v-icon>
      <h5 class="center-align">{{ blockTitle.title }}</h5>
    </div>
    <div class="block__line_dot my-5"></div>
  </div>
</template>

<script>
export default {
  name: 'BlockTitle',

  props: {
    blockTitle: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.block {
  &__title {
    width: 10% !important;
  }
  &__line_dot {
    border-bottom: 2px dotted grey !important;
    width: 90% !important;
  }
}
@media screen and (max-width:1904px){
  .block {
  &__title {
    width: 15% !important;
  }
  &__line_dot {
    border-bottom: 2px dotted grey !important;
    width: 85% !important;
  }
}
}
@media screen and (max-width:1264px){
  .block {
  &__title {
    width: 20% !important;
  }
  &__line_dot {
    border-bottom: 2px dotted grey !important;
    width: 80% !important;
  }
}
}
@media screen and (max-width:960px){
  .block {
  &__title {
    width: 25% !important;
  }
  &__line_dot {
    border-bottom: 2px dotted grey !important;
    width: 85% !important;
  }
}
}
@media screen and (max-width:600px){
  .block {
  &__title {
    width: 38% !important;
  }
  &__line_dot {
    border-bottom: 2px dotted grey !important;
    width: 62% !important;
  }
}
}
</style>