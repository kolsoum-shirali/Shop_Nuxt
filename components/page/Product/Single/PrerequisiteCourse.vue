<template>
  <v-card flat class="rounded-lg box__card">
    <v-card-text class="pa-3">
      <div class="d-flex justify-space-around rounded-lg dot-border box__card_course black--text">
        <h4 class="d-flex align-center px-5 custom-font-13 price_text">قیمت :</h4>
        <div
          v-if="product.price.amount"
          class="d-flex flex-column align-center justify-center custom-font-15 price_course"
        >
          <h4
            v-if="product.price.discount_amount"
            class="line-decoration d-flex align-center"
          >{{ numberWithCommas(product.price.amount) }}</h4>
          <div>
            <span class="red--text">{{ numberWithCommas(product.price.final_amount) }}</span>
            <span class="custom-font-11">تومان</span>
          </div>
        </div>
        <h4 v-else class="d-flex align-center custom-font-15 green--text">رایگان</h4>
      </div>
    </v-card-text>
    <div>
      <v-card-text v-if="prerequisiteCourse.length" class="box__prerequisites_course px-2 mt-2">
        <div class="dash-border rounded-lg pa-3">
          <v-btn
            depressed
            class="custom-font-10 rounded-pill prerequisites_title deep-purple--text"
          >پیش نیازهای دوره</v-btn>

          <div
            v-for="(course, index) in prerequisiteCourse"
            :key="index"
            class="prerequisites extend-line"
          >
            <v-icon size="10" color="#FFF3E0">mdi-play</v-icon>
            <nuxt-link
              :to="'/product/' + course.id + '/' + decodePersianName(course.title)"
              class="custom-font-11 black--text"
            >{{ course.title }}</nuxt-link>
            <v-btn
              class="custom-font-10 rounded-pill"
              color="#FFF3E0"
              depressed
              :to="'/product/' + course.id + '/' + decodePersianName(course.title)"
            >مشاهده</v-btn>
          </div>
        </div>
      </v-card-text>
      <v-card-text v-if="prerequisiteCourse.length" class="px-2 mt-1 alet_text">
        <div class="rounded-lg custom-font-11 pa-3 black--text orange lighten-5">
          <v-icon color="#ff9800">mdi-alert</v-icon>
          <span>برای خرید این دوره بهتر است پیش نیاز ها را گذرانده باشید</span>
        </div>
      </v-card-text>
    </div>
    <div>
      <v-card-text class="add_to_cart">
        <v-btn
          width="100%"
          height="50"
          depressed
          color="#17b334"
          class="white--text justify-space-around rounded-lg add_to_cart_button"
          @click="addToCart(product)"
        >
          <v-icon>mdi-credit-card</v-icon>
          <h5>افزودن به سبد خرید</h5>
        </v-btn>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PrerequisiteCourse',

  props: {
    product: {
      type: Object,
      default: () => { }
    },
    prerequisiteCourse: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addToCart',{detail:{id:product.id,name:product.name,englishName:product.englishName,image:product.image},price:product.price})
    }
  }
}
</script>

<style lang="scss" scoped>
.box__card {
  @include applyShadow;
  &_course {
    min-height: 60px;
  }
  .price_text {
    border-left: 2px dotted rgba(184, 184, 184, 0.253);
  }
  .box__prerequisites_course {
    .dash-border {
      position: relative;
      .prerequisites_title {
        position: absolute;
        right: 0;
        top: -15px;
        height: 30px;
        cursor: default !important;
        &::before {
          background-color: deep-purple--text !important;
        }
      }
      .prerequisites {
        .v-icon {
          transform: rotate(180deg);
        }
        .v-btn {
          height: 25px;
          &:hover {
            @include applyTransition;
            background-color: rgba(241, 241, 239, 0.377) !important;
          }
          &::before {
            background-color: rgba(241, 241, 239, 0.377) !important;
          }
        }
      }
    }
  }
  .alet_text {
    div {
      border: 1px dashed rgba(0, 0, 0, 0.212) !important;
    }
  }
}
.add_to_cart {
  &_button {
    @include applyTransition;
    border: 1px dashed rgb(255, 255, 255) !important;
    &:hover {
      background-color: #ea1d21 !important;
    }
  }
}
</style>