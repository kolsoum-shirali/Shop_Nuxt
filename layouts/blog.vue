<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
export default {
  name: 'BlogLayout',
  components: { Header, Footer },
  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
</style>