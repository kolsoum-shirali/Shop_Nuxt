<template>
  <div
    class="main__blog"
    :class="[
      $vuetify.breakpoint.mdAndUp
        ? blogEducation.blogWidth[0].minWidth
        : blogEducation.blogWidth[1].maxWidth,
      $vuetify.breakpoint.smAndDown ? 'blog_responsive' : '',
    ]"
  >
    <v-img
      :src="blogEducation.image"
      :lazy-src="blogEducation.lazyImage"
      aspect-ratio="1"
      class="grey lighten-2 rounded-xl main__blog_img"
      height="290"
      width="100%"
      :alt="blogEducation.title"
    >
      <div
        class="d-flex align-center white--text main__blog_title"
        :style="[blogEducation.showText ? { 'justify-content': 'center' } : '']"
      >
        <v-btn
          small
          color="white"
          dark
          fab
          :title="blogEducation.title"
          :to="'/blog/' + blogEducation.category.id + '/' + blogEducation.id"
        >
          <v-icon :color="blogEducation.color" size="20">{{ blogEducation.icon }}</v-icon>
        </v-btn>
        <div
          class="text_blog"
          :style="[
            blogEducation.showText ? { display: 'block' } : { display: 'none' },
          ]"
        >
          <v-tab-transition group>
            <h5 :key="1" class="ma-1">{{ blogEducation.title }}</h5>
            <h5 :key="2" class="ma-1">{{ blogEducation.subTitle }}</h5>
          </v-tab-transition>
        </div>
      </div>
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'MiniEducationalBlog',
  props: {
    blogEducation: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      reduceBlog: false,
    }
  },
  mounted() {
    const wrapperBlog = document.querySelectorAll('.main__blog')
    wrapperBlog.forEach((blog, index) => {
      blog.addEventListener('click', (e) => {
        wrapperBlog.forEach((element) => {
          element.classList.remove('col-7')
          element.classList.add('col-1')
        })
        blog.classList.add('col-7')
        this.$emit('show', index + 1)
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.main__blog {
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  &_img {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0.5) 35%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  &_title {
    position: absolute;
    right: 5%;
    left: 0;
    margin: auto !important;
    bottom: 5%;
  }
}

.blog_responsive {
  .main__blog_title {
    justify-content: center !important;
  }
  .text_blog {
    display: block !important;
  }
}
</style>