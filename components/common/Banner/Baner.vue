<template>
  <div class="banner_wrap d-flex justify-space-between flex-wrap mt-5">
    <div v-for="(banner, index) in banners" :key="index" class="banner__single">
      <v-img
        :src="banner.image"
        :lazy-src="banner.lazyImage"
        aspect-ratio="1"
        class="banner__single_img grey lighten-2 rounded-lg"
        :height="170"
      >
        <v-btn
          fab
          class="banner__single_number mx-2"
          elevation="0"
          x-small
          color="#F5F5F5"
        >{{ banner.number }}</v-btn>
        <div class="banner__single_overflow d-flex flex-column justify-center align-center"></div>
        <div class="banner__single_title">
          <v-icon dark>{{ banner.icon }}</v-icon>
          <h5 class="white--text">{{ banner.title }}</h5>
        </div>
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopBaner',
  data() {
    return {
      banners: []
    }
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get('/banner')
      this.banners = data
    }
    catch (err) {
      console.log(err)
    }
  },

}
</script>

<style lang="scss" scoped>
.banner_wrap {
  .banner__single {
    flex: 0 0 calc(20% - 5px);
    &:nth-child(1) .banner__single_overflow {
      background-image: linear-gradient(
        130deg,
        #ffb535 0%,
        #f2295b 100%
      ) !important;
      opacity: 0.5;
      &:hover {
        opacity: 0.7;
      }
    }
    &:nth-child(2) .banner__single_overflow {
      background-image: linear-gradient(
        130deg,
        #30c4e5 0%,
        #27e55c 100%
      ) !important;
      opacity: 0.5;
      &:hover {
        opacity: 0.7;
      }
    }
    &:nth-child(3) .banner__single_overflow {
      background-image: linear-gradient(
        130deg,
        #9c33f7 0%,
        #2b9fff 100%
      ) !important;
      opacity: 0.5;
      &:hover {
        opacity: 0.7;
      }
    }
    &:nth-child(4) .banner__single_overflow {
      background-image: linear-gradient(
        130deg,
        #ff3571 0%,
        #870075 100%
      ) !important;
      opacity: 0.5;
      &:hover {
        opacity: 0.7;
      }
    }
    &:nth-child(5) .banner__single_overflow {
      background-image: linear-gradient(
        130deg,
        #ed3195 0%,
        #d300e2 100%
      ) !important;
      opacity: 0.5;
      &:hover {
        opacity: 0.7;
      }
    }
    &_img {
      position: relative;
    }
    &_number {
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 1;
    }
    &_overflow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &_title {
      position: absolute;
      text-align: center;
      top: 40%;
      left: 0;
      right: 0;
      z-index: 100;
      color: white !important;
    }
  }
}
@media screen and (max-width: 600px) {
  .banner__single {
    flex: 0 0 calc(100%) !important;
    margin-top: 5px;
  }
}
</style>