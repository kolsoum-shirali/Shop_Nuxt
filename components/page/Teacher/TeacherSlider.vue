<template>
  <div>
    <div class="d-flex justify-space-between align-center my-5">
      <BlockTitle class="full-width" :block-title="blockCaption" />
      <div>
        <v-btn to="/teacher" class="teacher_wrapper_btn rounded-xl" depressed color="#F5F5F5">
          <div class="wrap_icon d-flex justify-center align-center">
            <v-icon size="12" color="white">mdi-chevron-left</v-icon>
          </div>
          <span class="custom-font-10 font-weight-bold">مشاهده همه</span>
        </v-btn>
      </div>
    </div>
    <div class="teacher_wrapper">
      <div class="button-swiper-wrapper">
        <v-btn class="swiper-button-prev ml-2" fab x-small color="white">
          <v-icon color="grey">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="swiper-button-next" fab x-small color="white">
          <v-icon color="grey">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @slideChangeTransitionStart="handleSlideChange"
      >
        <template v-if="!loading && teachersList.length">
          <swiper-slide v-for="(teacher, index) in teachersList" :key="index" class="ma-1 mb-15">
            <TeacherCard :teacher="teacher" class="ma-1" />
          </swiper-slide>
        </template>
        <template v-else>
          <swiper-slide v-for="(item, index) in 8" :key="index" class="ma-1 mb-15">
            <v-card>
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-card>
          </swiper-slide>
        </template>
        <div slot="pagination" class="swiper-pagination mt-15" />
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import TeacherCard from '@/components/page/Teacher/TeacherCard/TeacherCard'
import BlockTitle from '@/components/common/BlockTitle/BlockTitle'
SwiperCore.use([Pagination, Navigation])

const breakpoints = {
  1904: 4,
  1024: 3,
  768: 2,
  640: 1,
}
export default {
  name: 'TeatureSlider',

  components: {
    Swiper,
    SwiperSlide,
    TeacherCard,
    BlockTitle,
  },

  data() {
    return {
      loading: false,
      teachersList: [],
      blockCaption: {
        icon: 'mdi-account-outline',
        title: 'مدرسین',
      },
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
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
  async created() {
    this.loading = true
    try {
      const { data } = await this.$axios.get('/teachers')
      this.teachersList = data
    }
    catch (err) {
      console.log(err)
    }
    this.loading = false
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
.teacher_wrapper {
  position: relative;

  .button-swiper-wrapper {
    display: none;
  }
  .swiper-button-next:after,
  .v-btn--is-elevated.v-btn--fab:after {
    content: "" !important;
  }
  &:hover {
    .button-swiper-wrapper {
      display: block !important;
    }
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
.teacher_wrapper_btn {
  width: 100px !important;
  height: 27px !important;
  @include applyTransition;
  .wrap_icon {
    width: 17px !important;
    height: 17px !important;
    border-radius: 50%;
    background-color: #ea1d21;
  }
  &:hover {
    background-color: #2d2e33 !important;
    color: white;
  }
}
</style>