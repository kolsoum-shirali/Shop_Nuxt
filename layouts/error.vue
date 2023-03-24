<template>
  <v-app>
    <div v-if="error.statusCode === 404" class="d-flex flex-column justify-center align-center error_wrapp">
      <img :src="require('@/assets/images/404.gif')" :alt="require('@/assets/images/404.gif')">
      <div class="error_wrapp-content text-center extend-line">
        <h5 class="custom-font-13">صفحه مورد نظر یافت نشد که به چند دلیل این اتفاق افتاده است:</h5>
        <h6 class="custom-font-11">آدرس صفحه تغییر کرده است.</h6>
        <h6 class="custom-font-11">صفحه به طور کلی حذف شده است.</h6>
        <h6 class="custom-font-11">مشکلی در دیتابیس بوجود آمده است.</h6>
      </div>
      <v-btn to="/" color="rgb(56, 56, 56)" class="white--text mt-3 custom-font-11">بازگشت به صفحه اصلی</v-btn>
    </div>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped lang='scss'>
.error_wrapp{
  img{
    max-width: 600px !important;
      filter: grayscale(95%);      
      @media screen and (max-width:600px){
            max-width: 300px !important;

      }
  }
}
</style>
