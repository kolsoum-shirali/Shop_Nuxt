<template>
  <div class="features_wrap justify-md-center mb-15">
    <div v-for="(hexagone, index) in features" :key="index" class="single_feature mt-5">
      <div class="hexagone_wrap" :style="{ color: hexagone.bg ? hexagone.bg : '' }">
        <svg
          style="visibility: hidden; position: absolute"
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="round">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <h4 class="hexagone_wrap_content">
          <v-icon color="black" size="35">{{ hexagone.icon }}</v-icon>
          <p class="black--text custom-font-13">{{ hexagone.title }}</p>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopFeature',

  data() {
    return {
      features: [
        { title: 'آموزش وردپرس', icon: 'mdi-wordpress', bg: '#007bff' },
        {
          title: 'پلاگین نویسی',
          icon: 'mdi-power-plug-outline',
          bg: '#fd7e14',
        },
        { title: 'ارزهای دیجیتال', icon: 'mdi-bitcoin', bg: '#EA1D21' },
        { title: 'آموزش وب', icon: 'mdi-web', bg: '#e83e8c' },
        { title: 'فضای ابری', icon: 'mdi-cloud', bg: '#28a745' },
        { title: 'آموزش جاوا', icon: 'mdi-language-java', bg: '#6f42c1' },
        { title: 'آموزش پایتون', icon: 'mdi-language-python', bg: '#007bff' },
        { title: 'آموزش گرافیک', icon: 'mdi-format-color-fill', bg: '#EA1D21' },
        { title: 'آموزش php', icon: 'mdi-language-php', bg: '#28a745' },
        { title: 'آموزش لاراول', icon: 'mdi-laravel', bg: '#28a745' },
        { title: 'آموزش لینوکس', icon: 'mdi-linux', bg: '#6f42c1' },
        { title: 'آموزش امنیت', icon: 'mdi-shield-lock', bg: '#fd7e14' },
        { title: 'نصب ویندوز', icon: 'mdi-microsoft-windows', bg: '#20c997' },
        { title: 'آموزش ورد', icon: 'mdi-file-word-outline', bg: '#ffc100' },
        { title: 'آشپزی آسان', icon: 'mdi-pizza', bg: '#e83e8c' },
        { title: 'بلوتوث', icon: 'mdi-bluetooth-connect', bg: '#fd7e14' },
        { title: 'بازاریابی اینستا', icon: 'mdi-instagram', bg: '#20c997' },
        { title: 'آموزش انگولار', icon: 'mdi-angularjs', bg: '#17a2b8' },
        { title: 'آموزش اکسل', icon: 'mdi-file-excel', bg: '#ffc107' },
        { title: 'آموزش ری اکت', icon: 'mdi-react', bg: '#007bff' },
        { title: 'اپلیکیشن ها', icon: 'mdi-android', bg: '#17a2b8' },
        { title: 'جذب ثروت', icon: 'mdi-sack-percent', bg: '#ffc107' },
        { title: 'برنامه نویسی', icon: 'mdi-apple', bg: '#28a745' },
        { title: 'آموزش css', icon: 'mdi-language-css3', bg: '#EA1D21' },
        {
          title: 'آموزش vs',
          icon: 'mdi-microsoft-visual-studio-code',
          bg: '#6f42c1',
        },
        { title: 'آموزش sass', icon: 'mdi-sass', bg: '#e83e8c' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
div[class] {
  width: 120px;
  filter: url(#round);
}
.hexagone_wrap {
  position: relative;
  color: rgb(223, 223, 223);
  &:hover {
    color: rgb(135, 85, 228) !important;
    cursor: pointer;
    @include applyTransition;
    p,
    .v-icon {
      @include applyTransition;
      color: white !important;
    }
  }
  &::before {
    content: "";
    display: block;
    padding-top: 86.6%;
    background: currentColor;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
  }
  &_content {
    position: absolute;
    top: 23%;
    width: 100% !important;
    text-align: center;
    right: 0;
    color: rgb(0, 0, 0) !important;
  }
}
.features_wrap {
  width: 100% !important;
  display: flex;
  flex-wrap: wrap;
}
.single_feature {
  display: block;
}
@media screen and (max-width: 960px) {
  .features_wrap {
    display: flex !important;
    flex-wrap: nowrap;
    overflow-x: scroll;
    width: 100% !important;
    margin: 0 !important;
  }
  .single_feature {
    margin: 15px 0;
  }
}
</style>
