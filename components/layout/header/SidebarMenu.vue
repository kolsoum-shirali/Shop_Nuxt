<template>
  <div>
    <v-treeview
      class="mt-10"
      :transition="true"
      :open-on-click="true"
      :items="items"
      expand-icon
    >
      <template #prepend="{ item }">
        <div>
          <v-icon v-if="item.icon" color="#cdcdcd">{{ item.icon }}</v-icon>
        </div>
      </template>
      <template #append="{ item, open }">
        <div>
          <v-icon
            v-if="item.children && item.children.length > 0"
            color="#cdcdcd"
            >{{ open ? 'mdi-chevron-down' : 'mdi-chevron-left' }}</v-icon
          >
        </div>
      </template>
      <template #label="{ item }">
        <nuxt-link
          class="custom-font-13 black--text d-block py-4"
          :to="item.path"
          >{{ item.name }}</nuxt-link
        >
      </template>
    </v-treeview>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data: () => ({
    items: [
      {
        id: 1,
        icon: 'mdi-home-outline',
        name: 'صفحه نخست',
        path: '/',
      },
      {
        id: 2,
        icon: 'mdi-keyboard-settings-outline',
        name: 'برنامه نویسی',
        path: '/category?category_id=2&title=برنامه-نویسی',
      },
      {
        id: 3,
        name: 'وردپرس',
        icon: 'mdi-file-word-outline',
        path: '/category?category_id=11&title=وردپرس',
      },
      {
        id: 4,
        name: 'گرافیک و طراحی ',
        icon: 'mdi-brush',
        path: '/category?category_id=10&title=گرافیک-و-طراحی',
      },
      {
        id: 5,
        name: 'علوم کامپیوتر',
        icon: 'mdi-laptop',
        path: '/category?category_id=7&title=علوم-کامپیوتر',
      },
      {
        id: 6,
        name: 'سایرموضوعات ',
        icon: 'mdi-layers-plus',
        path: '/category?category_id=5&title=سایرموضوعات',
      },
      {
        id: 7,
        name: 'وبلاگ آموزشی ',
        icon: 'mdi-book-open-page-variant-outline',
        path: '/blog',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
::v-deep .v-treeview .v-treeview-node__root {
  border-bottom: 0.1px dashed rgba(206, 202, 202, 0.514);
}
::v-deep .v-treeview .v-treeview-node__root:last-child {
  border-bottom: none;
}
::v-deep .v-treeview .v-treeview-node {
  border-bottom: 1px dashed rgb(206, 202, 202);
}
::v-deep .v-treeview .v-treeview-node:last-child {
  border-bottom: none;
}
</style>
