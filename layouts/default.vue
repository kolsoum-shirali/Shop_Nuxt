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
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Header,
  },
}
</script>
