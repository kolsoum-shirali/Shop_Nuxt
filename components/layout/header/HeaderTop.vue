<template>
  <v-row class="header_top">
    <v-col cols="6" md="8" sm="7">
      <div v-if="$vuetify.breakpoint.smAndUp" class="top_menu ">
        <ul class="d-flex">
          <li
            v-for="(menu, index) in menus"
            :key="index"
            class="top_menu-item custom-font-11"
          >
            <nuxt-link class="text-black-light px-3" to="/">{{
              menu
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div v-else class="text-center">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn  class="custom-font-11" light depressed v-bind="attrs" v-on="on">
               انتخاب فهرست <v-icon class="custom-font-20" color="black">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="(item, index) in menus" :key="index">
              <v-list-item-title class="custom-font-11">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-col>
    <v-col cols="6" md="4" sm="5">
      <div class="tel_head d-flex justify-end align-center">
        <v-icon class="order-3">{{ telHead.icon }}</v-icon>
        <span class="custom-font-13 order-2 px-1">{{ telHead.prefix }}</span>
        <strong class="text-magenta custom-font-15 order-1">{{
          telHead.phone
        }}</strong>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeaderTop',
  data() {
    return {
    
      menus: [
        'ارتباط با ما',
        'کدهای کوتاه',
        'وبلاگ',
        'سوالات متداول',
        'فروشگاه',
      ],
      telHead: {
        icon: 'mdi-account-outline',
        prefix: '021',
        phone: 87654321,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.top_menu{
  float: right;
.top_menu-item {
  a {
    position: relative;
    &:hover {
      color: var(--color-red) !important;
      &::before {
        right: 0;
        opacity: 1;
      }
      &::after {
        left: 0;
        opacity: 1;
      }
    }
    &::before {
      position: absolute;
      content: '[';
      font-size: 12px;
      top: 0;
      right: 10px;
    @include applyTransition;
      opacity: 0;
      color: rgba(0, 0, 0, 0.3);
    }
    &::after {
      position: absolute;
      content: ']';
      font-size: 12px;
      top: 0;
      left: 10px;
    @include applyTransition;
      opacity: 0;
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
}

</style>