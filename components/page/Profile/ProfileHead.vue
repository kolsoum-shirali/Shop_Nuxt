<template>
  <div class="my-5">
    <div class="d-flex justify-end">
      <div>
        <nuxt-link to="/profile/announcements">
          <v-badge
            class="black--text"
            bordered
            color="grey lighten-2"
            left
            dot
            offset-x="10"
            offset-y="10"
          >
            <v-icon size="25" title="اطلاعیه ها">mdi-bell-outline</v-icon>
          </v-badge>
        </nuxt-link>
        <nuxt-link to="/profile/account-detail"><v-icon size="25" title="تنظیمات">mdi-cog-outline</v-icon></nuxt-link>
        <v-icon
          size="25"
          title="خروج از حساب"
          @click="$store.dispatch('auth/logout')"
          >mdi-power</v-icon
        >
      </div>
      <nuxt-link
        class="black--text d-flex align-center"
        title="بازگشت به صفحه اصلی"
        to="/"
      >
        <h5 class="mx-2 custom-font-13 text-grey-darken">صفحه نخست</h5>
        <v-icon size="25">mdi-home-outline</v-icon>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHead',
}
</script>
