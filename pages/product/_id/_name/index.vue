<template>
  <div>
    <v-row style="margin-top: -18em;">
      <BreadCrumb :breadcrumbs="breadCrumbs" class="col-12" />
      <ProductTitle
        :product-name="product.name"
        :english-name="product.englishName"
        class="col-12 mb-5"
      />

      <div class="col-12 col-md-9">
        <ProductVideo
          v-if="product.type === 0"
          style="position: relative"
          :video-link="product.video"
          :image-link="product.image"
        />
        <ProductAudio v-else :audio-link="product.audio" />
        <ProductService class="mt-3" />
        <ProductDescription :product-detail="productDetail" />
      </div>
      <div class="col-12 col-md-3">
        <PrerequisiteCourse
          :product="product"
          :prerequisite-course="product.PrerequisiteCourse"
          style="position: relative"
        />
        <EmojeRate :emogy-rate="product.emogyRate" />
        <ProductSellInfo :benefits="product.benefits" />
        <CourseInformation :course-info="product.courseLevelInfo" />
        <ProductAuthore :authore="product.authore" />
        <ProductShare :btn-category="product.btnCategory" />
      </div>
    </v-row>
    <ProductSlider :products-list="relatedCourse" :block-caption="blockCaption" />
    <StickyCard :product="product" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/common/BreadCrumb/BreadCrumb'
import PrerequisiteCourse from '@/components/page/Product/Single/PrerequisiteCourse'
import ProductVideo from '@/components/page/Product/Single/ProductVideo'
import EmojeRate from '@/components/page/Product/Single/EmojeRate'
import ProductSellInfo from '@/components/page/Product/Single/ProductSellInfo'
import CourseInformation from '@/components/page/Product/Single/CourseInformation'
import ProductAuthore from '@/components/page/Product/Single/ProductAuthore'
import ProductShare from '@/components/page/Product/Single/ProductShare'
import ProductDescription from '@/components/page/Product/Single/ProductDescription'
import ProductSlider from '@/components/page/Product/Slider/ProductSlider'
import StickyCard from '@/components/page/Product/Single/StickyCard'
import ProductService from '@/components/page/Product/Single/ProductService'
import ProductAudio from '@/components/page/Product/Single/ProductAudio'
import ProductTitle from '@/components/page/Product/Single/ProductTitle'
export default {
  name: 'ProductIndex',
  components: {
    PrerequisiteCourse,
    ProductVideo,
    EmojeRate,
    ProductSellInfo,
    CourseInformation,
    ProductAuthore,
    ProductShare,
    ProductDescription,
    ProductSlider,
    StickyCard,
    ProductService,
    ProductAudio,
    BreadCrumb,
    ProductTitle
  },
  layout: 'product',
  async asyncData({ $axios, route, store }) {
    let course,
      breadcrumbs,
      subjectId
    const relatedProducts = []

    try {
      const { data } = await $axios.get('/courses', { params: { id: route.params.id } })
      course = data
      breadcrumbs = [
        {
          title: 'صفحه اصلی',
          icon: 'mdi-home',
          color: 'white'
        },
        {
          title: 'دسته بندی',
          color: 'white',
          icon: 'mdi-map',
        },
      ]
      course.breadcrumbs.forEach((item) => {
        if (item.type === 'subject') {
          subjectId = item.id
        }
        breadcrumbs.push({
          title: item.title,
          type: item.type,
          id: item.id,
          color: 'white'
        })
      })
      breadcrumbs.forEach((item, index) => {
        if (index - 1 === -1) {
          item.path = '/'
        } else if (item.type === 'subject') {
          item.path = `/category?category_id=${item.id}&title=${(item.title.replace(/[\u200B-\u200C\uFEFF]/g, ' ')
            .replace(/  +/g, ' ')
            .split(' ')
            .join('-'))}`
        } else if (item.type === 'product') {
          item.color = '#BDBDBD'
        }
      })
    }
    catch (err) {
      console.log(err)
    }
    store.dispatch('product/sliderLoading', true)
    try {
      const { data } = await $axios.get('/courses/allProducts')
      data.forEach((course) => {
        if (course.breadcrumbs[0].id === subjectId) {
          relatedProducts.push(course)
        }
      })
      const productIndex = relatedProducts.findIndex((item) => {
        return item.id === Number(route.params.id)
      })
      relatedProducts.splice(productIndex, 1)
    } catch (err) {
      console.log(err)
    }
    store.dispatch('product/sliderLoading', false)
    return {
      product: course,
      breadCrumbs: breadcrumbs,
      productDetail: course.detail,
      relatedCourse: relatedProducts
    }
  },
  data() {
    return {
      product: {},
      productDetail: {},
      breadCrumbs: [],
      blockCaption: {
        icon: 'mdi-repeat-variant',
        title: 'محصولات مرتبط',
        color: '#ea1d21'
      },
    }
  },

}
</script>

<style lang="scss" scoped>
</style>