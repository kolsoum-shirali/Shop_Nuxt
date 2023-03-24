<template>
  <div class="book_wrapper mt-10">
    <div class="d-flex justify-space-between align-center">
      <BlockTitle :block-title="bookCaption" class="subject full-width" />
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
    <div class="button-swiper-wrapper">
      <v-btn class="swiper-button-prev" fab x-small color="white">
        <v-icon color="grey">mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn class="swiper-button-next" fab x-small color="white">
        <v-icon color="grey">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions" @slideChangeTransitionStart="handleSlideChange">
      <template v-if="!loading && books.length">
        <swiper-slide v-for="(book, index) in books" :key="index" class="ma-1 mb-10">
          <BookCard :book-info="book" />
        </swiper-slide>
      </template>
      <template v-else>
        <swiper-slide v-for="(item, index) in 8" :key="index" class="ma-1 mb-10">
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
import { mapState } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper/core'
import BookCard from '@/components/page/Product/Card/BookCard'
import BlockTitle from '@/components/common/BlockTitle/BlockTitle'
SwiperCore.use([EffectCoverflow, Pagination, Navigation])

const breakpoints = {
  1904: 6,
  1024: 5,
  768: 3,
  640: 2,
}
export default {
  name: 'BookSlider',
  components: {
    Swiper,
    SwiperSlide,
    BookCard,
    BlockTitle,
  },
  props: {
    bookCaption: {
      type: Object,
      default: () => { },
    },
  },

  data() {
    return {
      swiperOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
  computed: {
    ...mapState({
      loading: state => state.product.loading,
      books: state => state.product.books,
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

<style lang="scss" scoped>
.book_wrapper {
  position: relative;
  .button-swiper-wrapper {
    display: none;
  }
  &:hover {
    .button-swiper-wrapper {
      display: block !important;
    }
  }

  .single_btn {
    width: 15px !important;
    height: 35px !important;
  }

  .swiper-button-next:after,
  .v-btn--is-elevated.v-btn--fab:after {
    content: "" !important;
  }
  .swiper-button-prev:hover {
    background-color: #ea1d21 !important ;
    .v-btn__content {
      i {
        color: white !important;
      }
    }
  }
  .swiper-button-next:hover {
    background-color: #ea1d21 !important ;
    .v-btn__content {
      i {
        color: white !important;
      }
    }
  }
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