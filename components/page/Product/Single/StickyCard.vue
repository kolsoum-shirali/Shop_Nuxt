<template>
  <v-card
    flat
    class="sticky_add_to_cart pa-2 center-align rounded-lg"
    width="170"
    height="120"
    :class="[showSticky ? 'show-sticky' : '']"
  >
    <div class="sell_course">
      <h5 class="right-align mr-1">قیمت :</h5>
      <p v-if="product.price.amount" class="text-red">
        <span
          v-if="product.price.discount_amount"
          class="ml-2 line-decoration text-grey-light"
          >{{ numberWithCommas(product.price.amount) }}</span
        >
        {{ numberWithCommas(product.price.final_amount) }}
        <span class="text-grey-light">تومان</span>
      </p>
      <p v-else class="green--text custom-font-17 font-weight-bold">رایگان</p>
    </div>
    <v-btn depressed color="#17b334" class="white--text rounded-lg cart_btn" @click="addToCart(product)">
      <v-icon size="20">mdi-cart-plus</v-icon>
      <h6>افزودن به سبد خرید</h6>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'StickyCard',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showSticky: false,
    }
  },
  mounted() {
    const app = this
    window.addEventListener('scroll', function () {
      window.pageYOffset > 250
        ? (app.showSticky = true)
        : (app.showSticky = false)
    })
  },

  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addToCart', {
        detail: {
          id: product.id,
          name: product.name,
          englishName: product.englishName,
          image: product.image,
        },
        price: product.price,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.sticky_add_to_cart {
  @include applyShadow;
  position: fixed;
  right: 4%;
  bottom: 10px;
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  .cart_btn:hover {
    @include applyTransition;

    background-color: #ea1d21 !important;
  }
}
.show-sticky {
  visibility: visible !important;
  opacity: 1;
}
</style>
