<template>
  <v-card flat class="extend-line px-2 py-3 rounded-lg my-5 center-align">
    <div class="mx-auto authore_product">
      <img
        :src="require('@/assets/images/user-profile.png')"
        alt="avatar_user.png"
        class="image-dimention"
        @error="setAltImg"
      />
    </div>
    <span class="px-3 mx-2 grey lighten-4 rounded-lg custom-font-11">{{authore.caption}}</span>
    <h5>{{authore.fullName}} </h5>
    <div class="custom-font-11 product_desk">
     {{authore.content}}
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ProductAuthore',
props:{
  authore:{
    type:Object,
    default:()=>{}
  }
}
  
}
</script>

<style lang="scss" scoped>
.v-card {
  @include applyShadow;
  .authore_product {
    border-radius: 0% 0% 65% 65%;
    width: 96px;
    max-height: 96px;
    border: 4px double #ddd;
    overflow: hidden;
  }
  .product_desk {
    position: relative;
    &::after {
        content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 65%;
      background: linear-gradient(to bottom,rgba(255, 255, 255, 0) 0,#fff 100%
      );
    }
  }
}
</style>