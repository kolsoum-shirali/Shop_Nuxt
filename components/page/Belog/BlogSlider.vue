<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" @slideChangeTransitionStart="handleSlideChange">
      <template v-if="!loading">
        <swiper-slide v-for="(blog, index) in blogSlider" :key="index" class="ma-1 mb-10">
          <BlogCard :blog="blog" class="ma-2" />
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperCore, { Autoplay } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import BlogCard from '@/components/page/Belog/EducationalBlog/BlogCard'
SwiperCore.use([Autoplay])

const breakpoints = {
  1904: 3,
  1024: 3,
  768: 2,
  640: 1,
}
export default {
  name: 'BlogSlider',
  components: {
    Swiper,
    SwiperSlide,
    BlogCard,
  },
  data() {
    return {
      blogSlider: [],
      loading: false,
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
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
  async fetch() {
    this.loading = true
    try {
      const { data } = await this.$axios.get('/blogslider')
      this.blogSlider = data
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
  },
}
</script>