<template>
  <div class="main_footer bg-red">
    <v-container>
      <v-row>
        <FooterImage />
        <QuickAccess />
        <Contact />
        <Socials />
      </v-row>
    </v-container>
    <div class="footer_line"></div>
    <FooterDown/>
  </div>
</template>

<script>
import QuickAccess from '@/components/layout/footer/QuickAccess'
import Contact from '@/components/layout/footer/Contact'
import FooterImage from '@/components/layout/footer/FooterImage'
import Socials from '@/components/layout/footer/Socials'
import FooterDown from '@/components/layout/footer/FooterDown'
export default {
  name: 'MainFooter',
  components: { QuickAccess, Contact, FooterImage, Socials,FooterDown },
}
</script>
<style lang="scss" scoped>
.main_footer {
  margin-top: 50px;
  .footer_line {
    border-bottom: 2px dotted white !important;
    margin:  20px 0 5px 0;
  }
}
</style>
