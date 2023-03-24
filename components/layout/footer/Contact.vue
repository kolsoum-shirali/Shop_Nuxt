<template>
  <v-col class="contact col-12 col-md-6 col-sm-12">
    <div class="contact__wrap">
      <div class="contact__wrap_about">
        <h5 class="my-3">درباره ما</h5>
        <h5 class="custom-font-11">
          گروه ماهدیس وب از سال 1390 فعالیت خود را در زمینه طراحی و توسعه نرم
          افزارهای تحت وب با توجه به استانداردها و متدولوژی های روز دنیا و مد
          نظر قرار دادن ارزش ها و باورهای حرفه ای و نیز مطالعات کیفی و کمی در
          زمینه سیستم های یکپارچه مدیریت تحت وب , به منظور طرح,توسعه کاربرد نرم
          افزارهای مبتنی بر وب اغاز نمود.
        </h5>
      </div>
      <div class="contact__wrap_location">
        <div>
          <h5 class="my-3">ارتباط با ما</h5>
          <div class="d-flex custom-font-15">
            <v-icon color="white">mdi-map</v-icon>
            <h5 class="white--text">
              تهران - سهروردی شمالی - ساختمان نگار - واحد 15
            </h5>
          </div>
        </div>
        <div class="d-flex align-center my-2 custom-font-15">
          <v-icon color="white">mdi-phone-in-talk</v-icon>
          <h5><span class="black--text mx-1">021</span>46235418</h5>
        </div>
        <div class="custom-font-15 email rounded-pill py-2">
          <v-btn color="#ea1d21" class="mx-2" fab x-small>
            <h2 class="white--text">@</h2>
          </v-btn>
          <h5>mahdisweb20@gmail.com</h5>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'FooterContact',
}
</script>

<style lang="scss" scoped>
.contact {
  color: white !important;
  &__wrap {
    display: flex;
    justify-content: space-between;
    &_about {
      flex: 0 0 calc(50% - 5px);
      line-height: 2;
    }
    &_location {
      flex: 0 0 calc(50% - 5px);
      line-height: 2;
      .email {
        display: flex;
        align-items: center;
        background-color: var(--color-black-darkin);
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .contact__wrap {
    justify-content: space-around;
    &_about {
      flex: 0 0 calc(40% - 5px);
    }
    &_location {
      flex: 0 0 calc(40% - 5px);
    }
  }
}
@media screen and (max-width: 600px) {
  .contact__wrap {
    flex-wrap: wrap;
    &_about {
      flex: 0 0 calc(80%);
    }
    &_location {
      flex: 0 0 calc(80%);
    }
  }
}
</style>