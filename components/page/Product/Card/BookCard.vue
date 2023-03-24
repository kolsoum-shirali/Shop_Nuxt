<template>
  <div>
    <v-card class="product__card solid-border rounded-lg">
      <img
        :src="bookInfo.image || setAltImg"
        width="100%"
        height="200"
        :alt="bookInfo.image"
        @error="setAltImg"
      />
      <div
        v-if="bookInfo.price.discount_percentage !== 0"
        class="product_label"
      >{{ bookInfo.price.discount_percentage }}</div>

      <div class="product__card_title custom-font-13 pa-3">
        <nuxt-link
          class="black--text"
          :to="'/product/book/' + bookInfo.id + '/' + decodePersianName(bookInfo.name)"
        >{{ bookInfo.name }}</nuxt-link>
      </div>

      <v-card-subtitle class="px-1">
        <div class="product__card_detail d-flex justify-space-between align-center">
          <v-btn
            class="shop__btn rounded-tl-xl rounded-b-xl"
            color="#ea1d21"
            :to="'/product/book/' + bookInfo.id + '/' + decodePersianName(bookInfo.name)"
          >
            <v-icon size="22" color="white">mdi-shopping-outline</v-icon>
          </v-btn>
          <div class="d-flex align-center">
            <h4
              v-if="bookInfo.price.discount_percentage !== 0"
              class="mx-2 line-decoration"
            >{{ numberWithCommas(bookInfo.price.amount) }}</h4>
            <h4 class="d-flex mx-3 text-red">
              {{ numberWithCommas(bookInfo.price.final_amount) }}
              <span class="grey--text">تومان</span>
            </h4>
          </div>
        </div>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    bookInfo: {
      type: Object,
      default: () => { },
    },
  },
}
</script>

<style lang="scss" scoped>
.product__card {
  @include applyShadow;
  position: relative;
  overflow: hidden;
  min-height: 350px;

  .product_label {
    @include productLabel;
  }
  &_title {
    height: 42px;
    line-height: 1.5em;
    overflow: hidden;
    a {
      overflow-wrap: break-word;
    }
  }
  &_detail {
    height: 55px;
    overflow: hidden;
  }
  .shop__btn {
    height: 40px !important;
    min-width: 20px;
  }
}
</style>
