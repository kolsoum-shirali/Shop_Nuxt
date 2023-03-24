<template>
  <div>
    <div class="d-flex justify-space-between align-center my-5">
      <BlockTitle class="full-width" :block-title="blockCaption" />
      <v-tabs v-if="$vuetify.breakpoint.mdAndUp" v-model="tab" hide-slider>
        <v-tab
          v-for="(item, index) in tabs"
          :key="index"
          class="rounded-pill custom-font-11 black--text grey lighten-3"
        >{{ item.tab }}</v-tab>
      </v-tabs>
      <v-menu v-if="$vuetify.breakpoint.smAndDown" offset-y>
        <template #activator="{ on, attrs }">
          <v-btn color="#ea1d21" v-bind="attrs" v-on="on">منوها</v-btn>
        </template>
        <v-tabs v-model="tab" hide-slider>
          <v-tab
            v-for="(item, index) in tabs"
            :key="index"
            class="rounded-pill custom-font-11 black--text grey lighten-3 my-1"
          >{{ item.tab }}</v-tab>
        </v-tabs>
      </v-menu>
    </div>
    <div>
      <v-tabs-items v-if="!loading">
        <v-expansion-panels v-if="courses.length" flat ripple>
          <v-expansion-panel>
            <v-expansion-panel-header class="mb-3" :expand-icon="show ? 'mdi-chevron-down' : ''">
              <div class="mt-5">
                <div class="row period_wrapper">
                  <ProductCard
                    v-for="(course, index) in courses.slice(0, 8)"
                    :key="index"
                    :product-info="course"
                    class="col-12 col-lg-3 col-md-4 col-sm-6 single_period"
                  />
                </div>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content v-if="courses.length > 8">
              <div class="mt-5">
                <div class="row period_wrapper">
                  <ProductCard
                    v-for="(course, index) in courses.slice(8)"
                    :key="index"
                    :product-info="course"
                    class="col-12 col-lg-3 col-md-4 col-sm-6 single_period"
                  />
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <h5 v-else>متاسفانه تعداد مطلب ( حداقل 1 ) کافی برای این بلاک وجود ندارد.</h5>
      </v-tabs-items>
      <div v-else class="row">
        <div v-for="(item, index) in 4" :key="index" class="col-3">
          <v-card>
            <v-skeleton-loader type="card"></v-skeleton-loader>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockTitle from '@/components/common/BlockTitle/BlockTitle'
import ProductCard from '@/components/page/Product/Card/ProductCard'
export default {
  name: 'LastPeriod',
  components: {
    BlockTitle,
    ProductCard,
  },
  data() {
    return {
      showMore: false,
      loading: false,
      blockCaption: {
        icon: 'mdi-book-open-page-variant',
        title: 'آخرین دوره ها',
      },
      tab: 0,
      courses: [],
      tabs: [
        {
          tab: 'همه',
        },
        {
          tab: 'ویژه',
        },
        {
          tab: 'پرفروش ترین',
        },
        {
          tab: 'بالاترین امتیاز',
        },
        {
          tab: 'حراج',
        },
      ],
    }
  },
  computed: {
    show() {
      return this.courses.length > 6
    }
  },
  watch: {
    tab(newVal) {
      this.changeCourses()
    },
  },
  async created() {
    this.loading = true
    try {
      const { data } = await this.$axios.get('/lastperiods', {
        query: { sort: this.tab },
      })
      this.courses = data
    } catch (err) {
      console.log(err)
    }
    this.loading = false
  },

  methods: {
    async changeCourses() {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/lastperiods', {
          query: { sort: this.tab },
        })
        this.courses = data
      } catch (err) {
        console.log(err)
      }
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep.v-tabs {
  width: 50% !important;
  .v-slide-group__next,
  .v-slide-group__prev {
    display: none !important;
  }
  .v-slide-group__content {
    justify-content: space-between !important;
    align-items: center;
    .v-tab {
      height: 20px !important;
      min-width: 30px !important;
      transition: all 0.3s ease;
      &:hover {
        background-color: #ea1d21 !important;
        color: white !important;
      }
    }

    .v-tab--active {
      &::before {
        opacity: 0 !important;
      }
      &::after {
        position: absolute;
        content: "";
        opacity: 1;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        right: 0;
        background-color: red;
      }
    }
  }
}
::v-deep.period_wrapper {
  .btn_arrow {
    height: 35px !important;
    min-width: 33px !important;
  }
}
@media screen and (max-width: 1264px) {
  .full-width {
    width: 55% !important;
  }
}
@media screen and (max-width: 960px) {
  .full-width {
    width: 100% !important;
  }
  ::v-deep.v-tabs {
    width: 100% !important;
    .v-item-group {
      height: 130px;
    }
    .v-slide-group__content {
      flex-direction: column;
    }
  }
}
::v-deep.v-expansion-panel .v-expansion-panel-header__icon {
  position: absolute;
  bottom: -10px;
  right: 50%;
  left: 50%;
}
</style>
