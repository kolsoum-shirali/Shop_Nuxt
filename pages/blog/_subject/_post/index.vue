<template>
  <div>
    <v-card flat class="grey lighten-3 solid-border rounded-lg">
      <BreadCrumb class="py-2" :breadcrumbs="breadCrumbs" />
    </v-card>
    <v-row>
      <v-col cols="12" lg="9" md="8">
        <BlogContent :blog-content="selectedBlog" :loading="blogLoading" />
        <RelatedContent
          :block-caption="contentCaption"
          :related-contents="selectedBlog.relatedContents"
          :loading="blogLoading"
        />
        <UserComment
          :block-caption="commentCaption"
          :comments="selectedBlog.comments"
          :loading="blogLoading"
        />
        <SendComment :send-caption="sendCaption" :class="[blogLoading ? 'extend-sticky' : '']" />
      </v-col>
      <v-col cols="12" lg="3" md="4">
        <News />
        <NewBlogs />
        <LastComment :recent-comments="selectedBlog.recentComments" :loading="blogLoading" />
        <WidgetCategory />
        <TelegramWidget />
        <MostView />
        <InstagramWidget class="my-5"/>
        <ProductCategory
          class="extend-sticky"       
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BreadCrumb from '@/components/common/BreadCrumb/BreadCrumb'
import BlogContent from '@/components/page/Belog/Single/BlogContent'
import RelatedContent from '@/components/page/Belog/Single/RelatedContent'
import UserComment from '@/components/page/Belog/Single/UserComment'
import SendComment from '@/components/page/Belog/Single/SendComment'
import NewBlogs from '@/components/page/Belog/Single/NewBlogs'
import LastComment from '@/components/page/Belog/Single/LastComment'
import WidgetCategory from '@/components/page/Belog/Single/WidgetCategory'
import TelegramWidget from '@/components/page/Belog/Single/TelegramWidget'
import MostView from '@/components/page/Belog/Single/MostView'
import InstagramWidget from '@/components/page/Belog/Single/InstagramWidget'
import ProductCategory from '@/components/page/Category/Single/ProductCategory'
import News from "@/components/page/Belog/Single/News";

export default {
  name: 'BlogPage',
  components: { BreadCrumb, BlogContent, RelatedContent, UserComment, SendComment, NewBlogs, LastComment, WidgetCategory, TelegramWidget, MostView, InstagramWidget, ProductCategory, News },
  layout: 'blog',
  async asyncData({ $axios, route }) {
    const breadCrumbsValue = []
    let selectedBlog    
    let blogLoading = true
    blogLoading = true
    try {
      const { data } = await $axios.get('/blog/single', { params: { subject: route.params.subject, post: route.params.post } })
      selectedBlog = data
      data.breadcrumbs.forEach((item, index) => {
        breadCrumbsValue.push({
          title: item.title,
          path: item.path,
          color: index === 2 ? 'grey' : 'black',
        })
      })
    }
    catch (err) {
      console.log(err)
    }
    blogLoading = false
  
    return {
      selectedBlog,
      breadCrumbs: breadCrumbsValue,
      blogLoading,
    }
  },
  data() {
    return {
      blogLoading: false,
      selectedBlog: {},
      breadCrumbs: [],
      contentCaption: {
        icon: 'mdi-shuffle-variant',
        title: 'مطالب مرتبط',
        color: '#ea1d21'
      },
      commentCaption: {
        color: '#ea1d21',
        icon: 'mdi-comment-text-multiple-outline',
        title: 'دیدگاه کاربران',
      },
      sendCaption: {
        color: '#ea1d21',
        icon: 'mdi-comment-text-multiple-outline',
        title: 'ارسال دیدگاه',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
</style>