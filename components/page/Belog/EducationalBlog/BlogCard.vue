<template>
  <v-card class="blog solid-border">
    <v-list class="justify-space-between">
      <div class="d-flex">
        <v-list-item class="d-flex">
          <v-avatar width="50" height="50">
            <img
              :src="require('@/assets/images/user-profile.png')"
              class="image-dimention"
              alt="user-profile.png"
            />
          </v-avatar>
          <div class="pa-2 d-flex flex-column">
            <v-list-item-title class="custom-font-11 mb-1">{{
              blog.fullName
            }}</v-list-item-title>
            <v-list-item-title class="custom-font-11 mb-1 grey--text">{{
              blog.job
            }}</v-list-item-title>
          </div>
        </v-list-item>
        <div class="d-flex justify-md-center blog_icon">
          <v-icon color="#F5F5F5" large> mdi-comma</v-icon>
          <v-icon color="#F5F5F5" large> mdi-comma</v-icon>
        </div>
      </div>
      <v-list-item-subtitle class="px-2 blog_content custom-font-13">
        {{ blog.content }}
      </v-list-item-subtitle>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'BlogCard',

  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.blog {
  @include applyShadow;
  overflow: hidden;
  &_icon {
    transform: rotate(180deg);
  }
}
.v-list-item__subtitle {
  white-space: pre-wrap !important;
  min-height: 100px;
  max-height: 100px;
}
</style>