<template>
  <div class="d-flex col-12 col-md-4 col-sm-8 justify-sm-center wrap_img">
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="require(`@/assets/images/${img.name}.png`)"
      :alt="`${img.name}.png`"      
    />
  </div>
</template>

<script>
export default {
  name: 'FooterImage',

  data() {
    return {
      images: [
        {
          name: 'trust_namad',
        },
        { name: 'samandehi_logo' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@media screen and (max-width:600px){
  .wrap_img{
    justify-content: space-around !important;
  }
}
</style>