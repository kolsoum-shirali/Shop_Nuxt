<template>
  <v-card flat class="my-5 rounded-lg solid-border">
    <v-tabs v-model="tab" :height="60" fixed-tabs hide-slider show-arrows centered>
      <v-tab v-for="item in productDetail.tabs" :key="item.tab" active-class="show-active" class="black--text">
        <v-icon color="#ea1d21" left class="ml-3">{{ item.icon }}</v-icon>
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Description :product-info="productDetail.description" />
      </v-tab-item>
      <v-tab-item v-if="productDetail.tabs.length === 3">
        <CourseTopic :topics='productDetail.topics'/>
      </v-tab-item>
      <v-tab-item>
        <Comment :product-detail="productDetail"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Description from '@/components/page/Product/Single/ProductTabs/Description'
import CourseTopic from '@/components/page/Product/Single/ProductTabs/CourseTopic'
import Comment from '@/components/page/Product/Single/ProductTabs/Comment'

export default {
  name: 'ProductDescription',
  components: {
    Description,
    CourseTopic,
    Comment,
  },
  props: {
    productDetail: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      tab: null,
    }
  },

}
</script>

<style lang="scss" scoped>
.v-card.solid-border {
  @include applyShadow;
}
.show-active {
  background-color: #ea1d21;
  color: white !important;
  position: relative;
  z-index: 100;
  overflow: unset;
  margin-bottom: 15px;
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
  &::after {
    position: absolute;
    top: 100%;
    content: "\25bc";
    color: red;
  }
  .v-icon {
    color: white !important;
  }
}
</style>