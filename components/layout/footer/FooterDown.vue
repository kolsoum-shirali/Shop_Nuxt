<template>
  <v-container>
    <v-row>
      <div class="col-12">
        <div
          class="
            footer__down
            d-flex
            justify-md-space-between
            align-center
            justify-sm-space-around
            custom-font-15
          "
        >
          <div class="footer__down_content">
            <h5>کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد.</h5>
            <h5>طراحی و توسعه ماهدیس وب</h5>
          </div>
          <div class="go_btn">
            <v-btn
              class="go_btn__top rounded-pill"
              small
              color="black"
              @click="goUp()"
            >
              <span class="white--text">رفتن به بالا</span
              ><v-icon class="go_btn_icon mx-2 px-1" color="white">
                mdi-chevron-up
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FooterDown',
}
</script>

<style lang="scss" scoped>
.footer__down {
  line-height: 2;
  color: white !important;
  .go_btn {
    &__top {
      @include applyTransition;
      &:hover {
        background-color: white !important;
        span {
          color: black !important;
        }
        .go_btn_icon {
          color: black !important;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .footer__down {
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    &_content {
      flex: 0 0 calc(90%);
    }
    .go_btn {
      flex: 0 0 calc(90%);
      margin-top: 5px;
    }
  }
}
</style>