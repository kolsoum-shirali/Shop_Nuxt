<template>
  <v-app>
    <Header />
    <ProductHead/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import ProductHead from '@/components/page/Product/Single/ProductHead'
export default {
  name: 'ProductLayout',
  components: {
    ProductHead,
    Footer,
    Header,
  },
}
</script>

<style lang="scss" scoped>
</style>