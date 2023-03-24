<template>
  <div>
    <v-card class="pa-2 rounded-lg">
      <v-simple-table class="product_list">
        <template #default>
          <thead>
            <tr class="grey lighten-4">
              <th class="text-center black--text">حذف محصول</th>
              <th class="text-center black--text">پیش نمایش</th>
              <th class="text-center black--text">محصول</th>
              <th class="text-center black--text">قیمت</th>
              <th class="text-center black--text">تعداد</th>
              <th class="text-center black--text">جمع جزء</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cart" :key="product.detail.name">
              <td class="text-center">
                <v-icon
                  color="red"
                  size="15"
                  @click="
                    $store.dispatch('cart/productRemove', product.detail.id)
                  "
                  >mdi-close</v-icon
                >
              </td>
              <td class="text-center">
                <div class="image-wrapp mx-auto">
                  <img
                    :src="product.detail.image"
                    class="image-dimention"
                    :alt="product.detail.image"
                    @error="setAltImg"
                  />
                </div>
              </td>
              <td class="text-center custom-font-13">
                {{ product.detail.name }}
              </td>
              <td class="text-center custom-font-13">
                {{
                  product.price.final_amount
                    ? numberWithCommas(product.price.final_amount)
                    : 'رایگان'
                }}
              </td>
              <td class="text-center custom-font-13">
                {{ numberWithCommas(product.amount) }}
              </td>
              <td class="text-center custom-font-13">
                {{
                  numberWithCommas(product.amount * product.price.final_amount)
                }}
                تومان
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-card class="pa-2 rounded-lg mt-5 grey lighten-4">
      <v-simple-table class="grey lighten-4">
        <template #default>
          <thead>
            <tr>
              <th class="text-right black--text border_none custom-font-15">
                جمع کل سبد خرید
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-right custom-font-13">جمع جزء</td>
              <td class="text-right custom-font-13">
                {{ numberWithCommas(totalAmount) }}
                <span class="green--text">تومان</span>
              </td>
            </tr>
            <tr>
              <td class="text-right custom-font-13">مجموع</td>
              <td class="text-right custom-font-13">
                {{ numberWithCommas(totalAmount) }}
                <span class="green--text">تومان</span>
              </td>
            </tr>
            <tr v-if="totalDiscount">
              <td class="text-right custom-font-13">تخفیف دریافتی</td>
              <td class="text-right custom-font-13">
                {{ numberWithCommas(totalDiscount) }}
                <span class="green--text">تومان</span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-btn
        color="#424242"
        class="rounded-pill white--text my-3 custom-font-11"
        @click="$emit('orderContinue', false)"
        >ادامه جهت تسویه حساب</v-btn
      >
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductList',
  computed: {
    ...mapState({ cart: (state) => state.cart.basket }),
    totalAmount() {
      const amount = this.cart.map((item, index) => {
        return item.price.final_amount * item.amount
      })
      return amount.length ? amount.reduce((pre, cur) => pre + cur) : 0
    },
    totalDiscount() {
      const discount = this.cart.map((item, index) => {
        return item.price.discount_amount * item.amount
      })
      return discount.length ? discount.reduce((pre, cur) => pre + cur) : 0
    },
  },
  watch: {
    cart(newVal) {
      if (newVal.length === 0) {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.product_list {
  border: 1px solid rgba(199, 198, 198, 0.582);
  td {
    border-left: 1px solid rgba(199, 198, 198, 0.571);
  }
  .image-wrapp {
    width: 95%;
    height: 70%;
  }
}

.border_none {
  border-bottom: none !important;
}
</style>
