<template>
  <v-card flat class="extend-line px-2 py-3 rounded-lg">
    <h5 class="custom-font-13">
      <v-icon size="30" color="#BDBDBD" class="ml-2"
        >mdi-scale-unbalanced</v-icon
      >قوانین و مزایای استفاده
    </h5>
    <div v-for="(benenfit, index) in benefits" :key="index">
      <span class="custom-font-11">
        <v-icon size="15" color="#17b334" class="ml-1">mdi-check</v-icon
        >{{ benenfit.title }}
      </span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ProductSellinfo',
  props:{
    benefits:{
      type:Array,
      default:()=>[]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  @include applyShadow;
}
</style>