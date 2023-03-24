<template>
  <div class="col-12 d-flex justify-lg-end socials">
    <Social v-for="(social, index) in socials" :key="index" :social="social" />
  </div>
</template>

<script>
import Social from '@/components/common/Social/Social'
export default {
  name: 'FooterSocials',
  components: {
    Social,
  },
  data() {
    return {
      socials: [
        { icon: 'mdi-facebook',path:'/',color:'grey' },
        { icon: 'mdi-youtube',path:'/',color:'grey' },
        { icon: 'mdi-movie-roll',path:'/',color:'grey' },
        { icon: 'mdi-linkedin',path:'/',color:'grey' },
        { icon: 'mdi-google-plus',path:'/',color:'grey' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width:1264px){
    .socials{
        justify-content: center !important;
    }
}
</style>