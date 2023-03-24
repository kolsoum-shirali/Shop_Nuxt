<template>
  <v-card flat class="px-2 py-3 my-5 rounded-lg">
    <div class="product_posted">
      <span class="custom-font-11 text-grey-darken">
        <v-icon color="#757575">mdi-format-list-bulleted</v-icon>دسته :
      </span>
      <v-btn
        v-for="(btn, index) in btnCategory"
        :key="index"
        class="custom-font-10 rounded-pill dot-border ma-1 px-2"
        depressed
        :to="btn.path"
      >{{ btn.title }}</v-btn>
    </div>
    <div class="product_shortlink solid-border my-2 rounded-lg">
      <p class="custom-font-11 px-2 pt-3 left-align">
        https://demos.mahdisweb.net/digiacad
        <v-icon style="flex: 0 0 100%" color="black" size="16">mdi-content-copy</v-icon>
      </p>
    </div>
    <div class="product_socials center-align">
      <v-btn
        v-for="(social, index) in socials"
        :key="index"
        depressed
        :color="social.color"
        class="pa-1 mx-1"
        to="/"
      >
        <v-icon color="white" size="20">{{ social.icon }}</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ProductShare',
  props: {
    btnCategory: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
   
      socials: [
        { icon: 'mdi-movie-roll', path: '/', color: '#757575' },
        { icon: 'mdi-youtube', path: '/', color: '#BDBDBD' },
        { icon: 'mdi-facebook', path: '/', color: '#E0E0E0' },
        { icon: 'mdi-linkedin', path: '/', color: '#EEEEEE' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  @include applyShadow;
  .product_posted {
    .v-btn {
      height: 25px;
      &:hover {
        @include applyTransition;
        background-color: #ea1d21;
        color: white;
        border: 2px dotted #c2181b;
      }
    }
  }
  .product_shortlink {
    overflow: hidden;
    height: 55px;
  }
  .product_socials {
    .v-btn {
      min-width: 20px !important;
      height: 25px;
      &:nth-child(1):hover {
        @include applyTransition;
        background-color: #abad09 !important;
      }
      &:nth-child(2):hover {
        @include applyTransition;
        background-color: #750aa0 !important;
      }
      &:nth-child(3):hover {
        @include applyTransition;
        background-color: #680634 !important;
      }
      &:nth-child(4):hover {
        @include applyTransition;
        background-color: #200a9c !important;
      }
    }
  }
}
</style>