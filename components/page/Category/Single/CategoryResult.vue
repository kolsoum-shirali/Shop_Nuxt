<template>
  <div class="category_items">
    <BlockTitle :block-title="blockTitle" />
    <v-row
      class="grey lighten-1 rounded-lg mt-3"
      justify="space-around"
      align="center"
      style="z-index: 1000"
    >
      <v-col cols="12" sm="6">
        <p class="custom-font-15 ma-0 white--text">
          نمایش
          <span>{{ categoryItems.length }}</span> نتیجه
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          v-model="select"
          solo
          background-color="white"
          hide-details
          :height="35"
          rounded
          item-text="title"
          :items="items"
          item-value="id"
          dense
          label="مرتب سازی پیش فرض"
          @change="sortProducts"
        ></v-select>
      </v-col>
    </v-row>
    <div v-if="!loading">
      <div v-if="categoriesList.length">
        <v-row class="mt-5">
          <v-col
            v-for="(item, index) in categoriesList"
            :key="index"
            class="col-12 col-lg-4 col-md-6"
          >
            <ProductCard :product-info="item" />
          </v-col>
        </v-row>
        <v-pagination
          v-model="page"
          class="mx-auto mt-3 pagination_wrapp"
          color="#ea1d21"
          :length="categoryItems.length > 6 ? totalPage : 1"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
      <v-alert
        v-else
        class="rounded-lg blue--text col-12 mt-5"
        dense
        color="#E3F2FD"
        >هیچ محصولی یافت نشد
      </v-alert>
    </div>

    <v-row v-else>
      <v-col
        v-for="(skeleton, index) in 9"
        :key="index"
        class="col-12 col-md-4 col-sm-6"
      >
        <v-skeleton-loader type="image"></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BlockTitle from '@/components/common/BlockTitle/BlockTitle'
import ProductCard from '@/components/page/Product/Card/ProductCard'
export default {
  name: 'CategoryResult',
  components: { ProductCard, BlockTitle },
  data() {
    return {
      totalPage: 2,
      items: [
        { title: 'مرتب سازی پیش فرض', id: 1 },
        { title: 'مرتب سازی براساس گران ترین دوره', id: 2 },
        { title: 'مرتب سازی براساس ارزان ترین دوره', id: 3 },
        { title: 'مرتب سازی براساس پرفروش ترین دوره', id: 4 },
      ],
      select: '',
    }
  },
  computed: {
    ...mapState({
      categoryItems: (state) => state.category.categoryProducts,
      blockTitle: (state) => state.category.blockTitle,
      loading: (state) => state.category.loading,
    }),
    page:{
          set(value) {
                this.$store.dispatch('category/setPagination', value)
            },
            get() {
                return this.$store.state.category.page
            },
    },
    categoriesList() {
      let result = []
      if (this.categoryItems.length > 6) {
        if (this.page === 2) {
          result = this.categoryItems.slice(6)
        } else if (this.page === 1) {
          result = this.categoryItems.slice(0, 6)
        }
      } else {
        result = this.categoryItems.slice(0, 6)
      }
      return result
    },
  },

  watch: {
    $route() {
      this.sortProducts(1)
    },
    page(newVal) {
      window.scrollTo({ top: 100, behavior: 'smooth' })
    },
  },
  methods: {
    async sortProducts(newVal) {
      if (newVal === 1) {
        await this.$store.dispatch(
          'category/getCategoryProducts',
          this.$route.query.category_id
        )
      } else {
        await this.$store.dispatch('category/sortedProducts', newVal)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep.category_items {
  .btn_arrow {
    height: 35px !important;
    min-width: 33px !important;
  }
}

::v-deep.v-expansion-panel .v-expansion-panel-header__icon {
  position: absolute;
  bottom: -10px;
  right: 50%;
  left: 50%;
}
::v-deep.pagination_wrapp .v-pagination{
  display: flex !important;
  flex-direction: row-reverse !important;
}
</style>
