<template>
  <div class="fixed_tabs bg-red">
    <v-container class="d-flex justify-space-between align-center pa-0">
      <div>
        <v-btn  v-for="(btn, index) in items" :key="index" class="white--text" exact :to="btn.path" depressed color="rgba(206, 5, 5, 0.726)">{{btn.title}}</v-btn>
      </div>
      <div class="col-lg-2">
        <SearchBtn class="left-align" @searchVal="searchIcon = $event" />
      </div>
    </v-container>
    <Search :search-icon="searchIcon" />
  </div>
</template>

<script>
import Search from '@/components/layout/header/Search'
import SearchBtn from '@/components/layout/header/SearchBtn'
export default {
  name: 'HeaderButtom',
  components: {
    Search,
    SearchBtn,
  },
  data: () => ({
    searchIcon: false,
    items: [
      {
        title: 'صفحه نخست',
        icon: 'mdi-home-outline',
        path: '/',
      },
      {
        title: 'برنامه نویسی',
        icon: 'mdi-keyboard-settings-outline',
        path: '/category?category_id=2&title=برنامه-نویسی',
      },
      {
        title: 'وردپرس',
        icon: 'mdi-wordpress',
        path: '/category?category_id=11&title=وردپرس',
      },

      {
        title: 'گرافیک  ',
        icon: 'mdi-brush',
        path: '/category?category_id=10&title=گرافیک-و-طراحی',
      },
      {
        title: 'علوم کامپیوتر',
        icon: 'mdi-laptop',
        path: '/category?category_id=7&title=علوم-کامپیوتر',
      },
      {
        title: 'سایرموضوعات',
        icon: 'mdi-layers-plus',
        path: '/category?category_id=5&title=سایرموضوعات',
      },
      {
        title: 'وبلاگ آکادمی',
        icon: 'mdi-book-open-page-variant-outline',
        path: '/blog',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.fixed_tabs {
  position: sticky;
  top: -3rem;
  transition: 1s;
  z-index: 100;
}
.drop_down {
  border-top: 3px solid var(--color-red) !important;
  border-radius: 10px !important;
}
.single_submenu:hover {
  .submenu_icon {
    color: var(--color-black-red) !important;
  }
}
.v-menu__content {
  box-shadow: 0 0 9px -5px rgb(0 0 0 /80%) !important;
}

.v-tabs.under_menu {
  border-left: none !important;
  &:nth-child(1) {
    border-top: 3px solid var(--color-red) !important;
    border-radius: 15px 15px 0 0;
  }
}
</style>



