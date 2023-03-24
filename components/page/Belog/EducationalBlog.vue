<template>
  <div class="my-5">
    <BlockTitle :block-title="blogCaption" class="my-5" />
    <v-row justify="space-between" align="center">
      <MiniEducationalBlog
        v-for="(blog, index) in blogList"
        :key="index"
        :blog-education="blog"
        @show="showBlogs($event)"
      />
    </v-row>
  </div>
</template>

<script>
import BlockTitle from '@/components/common/BlockTitle/BlockTitle'
import MiniEducationalBlog from '@/components/page/Belog/EducationalBlog/MiniEducationalBlog'
export default {
  name: 'EducationalBlog',
  components: { MiniEducationalBlog, BlockTitle },
  data() {
    return {
      blogCaption: {
        icon: 'mdi-book-open-page-variant',
        title: 'وبلاگ آموزشی',
      },
      blogList: []
    }
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get('/blogs')
      this.blogList = data
    }
    catch (err) {
      console.log(err)
    }
  },
  methods: {
    showBlogs($event) {
      this.blogList.forEach((item) => {
        item.id === $event ? (item.showText = true) : (item.showText = false)
          })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>