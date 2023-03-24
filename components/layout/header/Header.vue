<template>
  <header class="main_header">
    <v-container>
      <HeaderTop />
      <HeaderCenter />
    </v-container>
    <HeaderButtom
      v-if="$vuetify.breakpoint.lgAndUp"
      :class="[isSticky ? 'sticky-top' : '']"
    />
    <HeaderList v-else />
  </header>
</template>

<script>
import HeaderTop from '@/components/layout/header/HeaderTop'
import HeaderCenter from '@/components/layout/header/HeaderCenter'
import HeaderButtom from '@/components/layout/header/HeaderButtom'
import HeaderList from '@/components/layout/header/HeaderList'
export default {
  name: 'ShopHeader',
  components: {
    HeaderTop,
    HeaderCenter,
    HeaderButtom,
    HeaderList,
  },
  data() {
    return {
      isSticky: false,
    }
  },
  mounted() {
    const app = this
    window.addEventListener('scroll', function () {
      window.pageYOffset > 170 ? (app.isSticky = true) : (app.isSticky = false)
    })
  },
}
</script>

<style lang="scss" scoped>
.main_header {
  background-color: white;
  position: relative;
  .sticky-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 0 7px 3px rgba($color: #000000, $alpha: 0.5);
  }
}
</style>