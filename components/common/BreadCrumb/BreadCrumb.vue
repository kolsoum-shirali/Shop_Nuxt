<template>
  <v-breadcrumbs :items="breadcrumbs" class="px-0 mr-3 extend-line">
    <template #divider>
      <v-icon  color="#BDBDBD">mdi-chevron-left</v-icon>
    </template>
    <template #item="{ item }">
      <v-breadcrumbs-item :to="item.path" exact>
        <span :style="[{ color: item.color }]">
          <v-icon v-if="item.icon" color="#EEEEEE" size="35">
            {{
              item.icon
            }}
          </v-icon>
          {{ item.title }}
        </span>
      </v-breadcrumbs-item>
    </template>     
 
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
</style>