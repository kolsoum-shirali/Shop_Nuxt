<template>
  <v-card flat class="box-shadow center-align px-2 py-3 my-5 rounded-lg">
    <div>
      <v-icon
        v-for="(emoje, index) in emogyRate.emojes"
        :key="index"
        :color="emoje.color"
        size="30"
      >{{ emoje.name }}</v-icon>
    </div>
    <h6 v-if="emogyRate.rate.vote" class="mt-2 custom-font-11">
      امتیاز
      <span class="px-3 mx-2 grey lighten-4 rounded-lg">
        {{
          emogyRate.rate.score
        }}
      </span>
      از
      <span class="px-3 mx-2 grey lighten-4 rounded-lg">{{ emogyRate.rate.vote }}</span>رای
    </h6>
    <h5 v-else class="mt-3 custom-font-13">امتیازی ثبت نشده است</h5>
  </v-card>
</template>

<script>
export default {
  name: 'EmojeRate',

  props: {
    emogyRate: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  @include applyShadow;
}
</style>