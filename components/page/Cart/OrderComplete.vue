<template>
  <div>
    <v-alert class="green accent-1 custom-font-13 rounded-lg text-center"
      >مشتری گرامی از خرید شما سپاسگزاریم به امید دیدار مجدد شما در خریدهای
      آتی</v-alert
    >
    <div class="d-flex justify-center dot-border pa-5 rounded-lg customer_info">
      <div class="text-center px-4">
        <p class="custom-font-13">نام و نام خانوادگی :</p>
        <h5>{{ user.firstName }} {{ user.lastName }}</h5>
      </div>
      <div class="text-center px-4">
        <p class="custom-font-13">ایمیل:</p>
        <h5>{{ user.email }}</h5>
      </div>
      <div class="text-center px-4">
        <p class="custom-font-13">شماره موبایل:</p>
        <h5>{{ user.mobile }}</h5>
      </div>
      <div class="text-center px-4">
        <p class="custom-font-13">روش پرداخت:</p>
        <h5>پرداخت هنگام دریافت</h5>
      </div>
    </div>
    <div>
      <p class="mt-5 text-grey-darken custom-font-13">
        پرداخت نقدی پس از تحویل
      </p>
      <h5 class="mt-5">مشخصات سفارش</h5>
    </div>
    <OrderInfo />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrderInfo from '@/components/page/Cart/Single/OrderInfo'
export default {
  name: 'OrderComplete',
  components: { OrderInfo },
  computed: {
    ...mapState({ user: (state) => state.auth.user }),
  },
}
</script>

<style lang="scss" scoped>
.customer_info {
  div {
    border-left: 2px dotted rgba(199, 198, 198, 0.571);
  }
  :last-child {
    border-left: none !important;
  }
}
</style>
