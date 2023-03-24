<template>
  <v-card flat class="mt-8 rounded-lg">
    <WidgetTitle :widget-title="widgetTitle" />
    <div v-if="!loading" class="new__item my-1 pa-3">
      <div
        v-for="(newItem, index) in news"
        :key="index"
        class="new__item_single d-flex align-center extend-line my-1"
      >
        <v-icon class="text_icon" size="20" color="#E0E0E0"
          >mdi-sticker-text-outline</v-icon
        >
        <nuxt-link
          :to="'/blog/' + `${newItem.category.id}/${newItem.id}`"
          class="mr-2 custom-font-11 black--text"
          >{{ newItem.title }}</nuxt-link
        >
      </div>
    </div>
    <div v-else>
      <v-skeleton-loader
        v-for="(skeleton, index) in 5"
        :key="index"
        v-bind="attrs"
        type="card-heading"
      ></v-skeleton-loader>
    </div>
  </v-card>
</template>

<script>
import WidgetTitle from '@/components/common/WidgetTitle/WidgetTitle'
export default {
  name: 'NewsComponent',
  components: { WidgetTitle },
  data() {
    return {
      widgetTitle: 'خبرهای تازه',
      news: [],
      loading: false,
      attrs: {
        boilerplate: false,
        elevation: 0,
      },
    }
  },
  async fetch() {
    this.loading = true
    try {
      const { data } = await this.$axios.get('/news')
      this.news = data
    } catch (err) {
      console.log(err)
    }
    this.loading = false
  },
}
</script>

<style lang="scss" scoped>

 
.v-card {
 @media screen and (max-width: 960px) {
    .widget__wrapp {
      @include widget;
    }
  }
  @include applyShadow;
  .new__item {
    &_single:hover {
      .text_icon {
        @include applyTransition;
        color: rgba(128, 125, 125, 0.897) !important;
      }
    }
  }
  ::v-deep .v-skeleton-loader__heading {
    width: 90%;
  }
}
</style>
