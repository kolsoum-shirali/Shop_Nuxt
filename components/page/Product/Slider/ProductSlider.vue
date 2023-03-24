<template>
  <div v-if="productsList.length" class="mt-15">
    <div class="d-flex justify-space-between align-center">
      <BlockTitle :block-title="blockCaption" class="subject full-width" />
      <div class="navigation_btn d-flex justify-end">
        <v-btn
          class="single_btn align-center mx-1 rounded-tr-xl rounded-b-xl"
          x-small
          color="#ea1d21"
          @click="nextSlide('prev')"
        >
          <v-icon color="white">mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          class="single_btn align-center mx-1 rounded-t-xl rounded-bl-xl"
          x-small
          color="#ea1d21"
          @click="nextSlide('next')"
        >
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
      </div>
    </div>

    <swiper
      ref="mySwiper"
      class="mt-5"
      :options="swiperOptions"
      @slideChangeTransitionStart="handleSlideChange"
    >
      <template v-if="!sliderLoading">
        <swiper-slide v-for="item in productsList" :key="item.id" class="ma-1 mb-10">
          <ProductCard :product-info="item" />
        </swiper-slide>
      </template>
      <template v-else>
        <swiper-slide v-for="item in 8" :key="item.id" class="ma-1">
          <v-card>
            <v-skeleton-loader type="card"></v-skeleton-loader>
          </v-card>
        </swiper-slide>
      </template>
      <div slot="pagination" class="swiper-pagination mt-15" />
    </swiper>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperCore, { Pagination, Autoplay } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ProductCard from '@/components/page/Product/Card/ProductCard'
import BlockTitle from '@/components/common/BlockTitle/BlockTitle'
SwiperCore.use([Pagination, Autoplay])
const breakpoints = {
  1904: 5,
  1024: 4,
  768: 3,
  640: 2,
}
export default {
  name: 'ProductSlider',
  components: {
    Swiper,
    SwiperSlide,
    ProductCard,
    BlockTitle,
  },
  props: {
    blockCaption: {
      type: Object,
      default: () => { },
    },
    productsList: {
      type: Array,
      default: () => []
    },
  },
 
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 10,
        breakpoints: {
          1904: {
            slidesPerView: breakpoints['1904'],
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: breakpoints['1024'],
            spaceBetween: 10,
          },
          768: {
            slidesPerView: breakpoints['768'],
            spaceBetween: 10,
          },
          640: {
            slidesPerView: breakpoints['640'],
            spaceBetween: 10,
          },
        },
      },
    }
  },
   computed:{
    ...mapState({
      sliderLoading:state => state.product.sliderLoading
    })
  },
  methods: {
    handleSlideChange() {
      const swiper = this.$refs.mySwiper.$swiper
      this.activeIndex = swiper.activeIndex
      const next = breakpoints[swiper.currentBreakpoint]
      this.lastIndex = Math.max(this.$refs.mySwiper.$children.length - next, 0)
    },

    nextSlide(val) {
      const swiper = this.$refs.mySwiper.$swiper
      const next = breakpoints[swiper.currentBreakpoint]
      if (val === 'next') {
        swiper.slideTo(swiper.activeIndex + next)
      } else {
        swiper.slideTo(swiper.activeIndex - next)
      }
    },
  },
}
</script>

<style scoped lang="scss" >
.single_btn {
  width: 15px !important;
  height: 35px !important;
}
.swiper-pagination {
  cursor: default;
  ::v-deep.swiper-pagination-bullet {
    background-color: black !important;
    &-active {
      border: 2px solid #fff;
      box-shadow: 0 0 0 2px #ea1d21;
    }
  }
}
</style>