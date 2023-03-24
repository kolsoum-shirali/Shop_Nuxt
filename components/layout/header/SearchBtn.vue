<template>
  <div >
    <v-btn
      class="search_btn pa-5"
      color="rgba(206, 5, 5, 0.726)"
      depressed
      @click="searchIcon = !searchIcon"
    >
      <v-icon color="white">{{
        searchIcon ? 'mdi-close' : 'mdi-magnify'
      }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SearchBtn',

  data() {
    return {
      searchIcon: false,
    }
  },
  watch: {
    searchIcon(newVal) {
      this.$emit('searchVal', newVal)
    },
  },
}
</script>

<style scoped lang="scss">
.search_btn {
  background-color: var(--color-black-red) !important;
}
</style>