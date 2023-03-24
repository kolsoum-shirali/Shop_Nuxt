<template>
  <v-card>
    <div>
      <WidgetTitle :widget-title="widgetTitle" class="mt-10" />
      <v-treeview
        v-if="!loading"
        class="pa-2 category_wrapp"
        :transition="true"
        :open-on-click="true"
        :items="items"
        expand-icon
        color="red"
        activatable
      >
        <template #prepend="{}">
          <v-icon class="mt-1" size="10" color="#cdcdcd"
            >mdi-circle-outline</v-icon
          >
        </template>
        <template #append="{ item, open }">
          <div>
            <v-icon v-if="item.children" color="#cdcdcd">{{
              open ? 'mdi-minus-circle-outline' : 'mdi-plus-circle-outline'
            }}</v-icon>
          </div>
        </template>
        <template #label="{ item }">
          <div
            @click="
              $store.dispatch(
                'category/getCategoryProducts',
                $route.query.category_id
              )
            "
          >
            <nuxt-link
              class="custom-font-11 black--text category_title d-block py-4"
              :to="`/category?category_id=${item.id}&title=${decodePersianName(
                item.name
              )}`"
              :class="[
                item.id === Number($route.query.category_id)
                  ? 'extend_color'
                  : '',
              ]"
              >{{ item.name }}</nuxt-link
            >
          </div>
        </template>
      </v-treeview>
      <div v-else>
        <v-skeleton-loader
          v-for="(skeleton, index) in 6"
          :key="index"
          v-bind="attrs"
          type="card-heading"
        ></v-skeleton-loader>
      </div>
    </div>
  </v-card>
</template>

<script>
import WidgetTitle from '@/components/common/WidgetTitle/WidgetTitle'
export default {
  name: 'ProductCategory',
  components: { WidgetTitle },

  data() {
    return {
      attrs: {
        boilerplate: false,
        elevation: 0,
      },
      items: [],
      loading: false,
      widgetTitle: 'دسته بندی دوره ها',
    }
  },
  async fetch() {
    this.loading = true
    try {
      const { data } = await this.$axios.get('/category')
      this.items = data
    } catch (err) {
      console.log(err)
    }
    this.loading = false
  },
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
::v-deep .v-skeleton-loader__heading {
  width: 90%;
}
.extend_color {
  color: #ea1d21 !important;
}
.category_wrapp {
  max-height: 400px;
  overflow-y: auto;
  .category_title {
    &:hover {
      @include applyTransition;
      color: #ea1d21 !important;
    }
  }
}
@media screen and (max-width: 960px) {
    .widget__wrapp {
      @include widget;
    }
  }
</style>
