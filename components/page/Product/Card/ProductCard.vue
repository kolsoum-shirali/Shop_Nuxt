<template>
  <div>
    <v-card flat class="product__card solid-border rounded-lg">
      <img
        :src="productInfo.image || setAltImg"
        width="100%"
        height="200"
        :alt="productInfo.name"
        @error="setAltImg"
      />
      <div
        v-if="productInfo.price.discount_percentage !== 0"
        class="product_label"
      >{{ productInfo.price.discount_percentage }}</div>
      <h5 class="product__card_title custom-font-13 px-5 pt-2">{{ productInfo.name }}</h5>
      <v-card-subtitle>
        <div
          class="product__card_detail grey lighten-3 rounded-t-xl rounded-br-xl d-flex justify-space-between align-center"
        >
          <v-btn
            class="btn_arrow rounded-t-xl rounded-br-xl px-1 py-2"
            x-small
            color="#ea1d21"
            :to="'/product/' + productInfo.id + '/' + decodePersianName(productInfo.name)"
          >
            <v-icon size="15" color="white">mdi-arrow-left</v-icon>
          </v-btn>
          <div v-if="productInfo.price.amount" class="d-flex align-center">
            <h4
              v-if="productInfo.price.discount_percentage"
              class="mx-2 line-decoration"
            >{{ numberWithCommas(productInfo.price.amount) }}</h4>
            <h4 class="d-flex mx-3 text-red">
              {{ numberWithCommas(productInfo.price.final_amount) }}
              <span
                class="grey--text mx-1"
              >تومان</span>
            </h4>
          </div>
          <div v-else >
            <h4 class="ml-2">رایگان</h4>
          </div>
        </div>
        <div class="mt-5 d-flex justify-space-between">
          <div class="d-flex">
            <v-icon color="#FBC02D">mdi-star-outline</v-icon>
            <v-btn
              fab
              elevation="0"
              x-small
              class="mr-1 align-center"
              color="#F5F5F5"
            >{{ productInfo.avarage_rate }}</v-btn>
          </div>
          <div class="d-flex">
            <v-icon color="#BDBDBD" class="mx-2">mdi-account-group-outline</v-icon>
            <v-btn
              class="align-center"
              fab
              elevation="0"
              x-small
              color="#F5F5F5"
            >{{ productInfo.users_class }}</v-btn>
          </div>
        </div>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productInfo: {
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
  min-height: 370px;
  .product_label {
    @include productLabel;
  }
  &_title {
    height: 42px;
    line-height: 1.5em;
    overflow: hidden;
  }
  &_detail {
    height: 35px;
    overflow: hidden;

    .btn_arrow {
      min-width: 25px !important;
      height: 18px !important;
    }
  }
}
</style>
