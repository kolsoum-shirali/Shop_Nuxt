<template>
  <div class="bg-red">
    <v-container class="d-flex justify-space-between">
      <div class="d-flex align-center">
        <v-btn
          depressed
          color="rgba(206, 5, 5, 0.726)"
          @click="drawer = !drawer"
        >
          <v-icon color="white" size="33">mdi-format-list-bulleted</v-icon>
          <h4 class="white--text mx-1">فهرست</h4>
        </v-btn>
        <v-navigation-drawer
          v-model="drawer"
          style="z-index: 9999"
          :hide-overlay="true"
          fixed
          right
          width="300"
        >
          <v-icon
            class="float-left"
            style="top: 5px; left: 5px"
            @click="drawer = !drawer"
            >mdi-close</v-icon
          >
          <SidebarMenu />
        </v-navigation-drawer>
      </div>
      <div class="left-align">
        <SearchBtn @searchVal="searchIcon = $event" />
      </div>
    </v-container>
    <Search :search-icon="searchIcon" />
  </div>
</template>

<script>
import SearchBtn from '@/components/layout/header/SearchBtn'
import Search from '@/components/layout/header/Search'
import SidebarMenu from '@/components/layout/header/SidebarMenu'
export default {
  name: 'HeaderList',
  components: {
    SearchBtn,
    Search,
    SidebarMenu,
  },
  data() {
    return {
      searchIcon: false,
      drawer: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
