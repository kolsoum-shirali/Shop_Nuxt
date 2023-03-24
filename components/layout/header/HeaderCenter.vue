<template>
  <v-row class="header_center">
    <div class="col-lg-6 col-md-4 col-sm-12">
      <div
        class="header_logo d-sm-flex justify-md-start justify-sm-center"
        title="پوسته آموزش آنلاین دیجی آکادمی"
      >
        <img
          :src="require('@/assets/images/logo-1-min.png')"
          alt="logo-1-min.png"
          @error="setAltImg"
        />
      </div>
    </div>
    <div class="col-lg-6 col-md-8 col-sm-12">
      <div
        class="mini_cart d-flex flex-row-reverse justify-sm-center justify-md-start"
      >
        <v-sheet
          class="d-flex mini_cart_box rounded-lg box-shadow pa-2"
          :title="cart.caption"
          @click="observeBasket()"
        >
          <v-icon class="custom-font-20">{{ cart.shopIcon }}</v-icon>
          <span class="amount_box">
            <v-icon class="custom-font-20" color="#17b334">
              {{ cart.messageIcon }}
            </v-icon>
            <span class="amount_box_products white--text">
              {{ basket.length }}
            </span>
          </span>
        </v-sheet>
        <v-sheet
          class="d-flex align-center login_wrap justify-space-between rounded-lg box-shadow py-3 ml-4 custom-font-13 px-1"
        >
          <v-btn
            v-if="!isUserCookie"
            :to="'/signup'"
            depressed
            color="white"
            class="singup_user pa-0 custom-font-13"
          >
            <v-icon class="custom-font-20">mdi-account-lock-outline</v-icon
            >عضویت
          </v-btn>
          <v-btn
            v-else
            depressed
            color="white"
            class="singup_user pa-0 custom-font-13"
            @click="$store.dispatch('auth/logout')"
          >
            <v-icon class="custom-font-20">mdi-exit-to-app</v-icon>خروج
          </v-btn>

          <v-btn
            v-if="!isUserCookie"
            :to="'/login'"
            class="mr-5 pa-0 custom-font-13"
            depressed
            color="white"
          >
            <v-icon class="custom-font-20">mdi-account-lock-open-outline</v-icon
            >ورود
          </v-btn>
          <v-btn
            v-else
            :to="'/profile'"
            class="mr-5 pa-0 custom-font-13"
            depressed
            color="white"
          >
            <v-icon class="custom-font-20">mdi-account</v-icon>ورودبه پنل کاربری
          </v-btn>
        </v-sheet>
      </div>
    </div></v-row
  >
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderCenter',
  data() {
    return {
      cart: {
        shopIcon: 'mdi-shopping-outline',
        messageIcon: 'mdi-message',
        caption: 'مشاهده سبد خرید',
      },
    }
  },

  computed: {
    ...mapState({
      basket: (state) => state.cart.basket,
      isUserCookie: (state) => state.auth.isUserCookie,
    }),
  },
  methods: {
    observeBasket() {
      if (this.basket.length) {
        this.$router.push('/cart')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.singup_user {
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: #b4b5b4c8;
    width: 1px;
    height: 40px;
    top: 0;
    left: -12px;
  }
}

.mini_cart_box {
  cursor: pointer;
  direction: ltr;

  .amount_box {
    position: relative;

    &_products {
      position: absolute;
      right: 35%;
    }
  }
}

.login_wrap {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .mini_cart {
    justify-content: center !important;
  }

  .header_logo {
    display: flex;
    justify-content: center !important;
  }
}
</style>
