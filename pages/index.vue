<template>
  <v-row>
    <div class="col-12">
      <Feature />
      <ProductSlider
        :products-list="amazingProducts"
        :block-caption="discountCaption"
      />
      <Baner />
      <BookSlider :book-caption="bookCaption" />
      <LastPeriod />
      <EducationalBlog />
      <BlogSlider />
      <TeacherSlider />
    </div>
  </v-row>
</template>

<script>
import Feature from '@/components/common/Feature/Feature'
import ProductSlider from '@/components/page/Product/Slider/ProductSlider'
import Baner from '@/components/common/Banner/Baner'
import BookSlider from '@/components/page/Product/Slider/BookSlider'
import LastPeriod from '@/components/page/Product/LastPeriod'
import EducationalBlog from '@/components/page/Belog/EducationalBlog'
import BlogSlider from '@/components/page/Belog/BlogSlider'
import TeacherSlider from '@/components/page/Teacher/TeacherSlider'

export default {
  name: 'IndexPage',
  components: {
    Feature,
    ProductSlider,
    Baner,
    BookSlider,
    LastPeriod,
    EducationalBlog,
    BlogSlider,
    TeacherSlider,
  },
  async asyncData({ $axios, store }) {
    await store.dispatch('product/getProduct')
    let products
    store.dispatch('product/sliderLoading', true)
    try {
      const { data } = await $axios.get('/amazingdiscount')
      products = data
    } catch (err) {
      console.log(err)
    }
    store.dispatch('product/sliderLoading', false)
    return {
      amazingProducts: products,
    }
  },
  data() {
    return {
      amazingProducts: [],
      discountCaption: {
        icon: 'mdi-timer-sand',
        title: 'تخفیف شگفت انگیز',
      },
      bookCaption: {
        icon: 'mdi-bookshelf',
        title: 'کتاب الکترونیکی',
      },
    }
  },
}
</script>
