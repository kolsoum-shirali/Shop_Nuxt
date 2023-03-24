<template>
  <v-container v-if="searchIcon" class="my-0 py-0" style="position:relative">
    <v-autocomplete
      :items="items"
      :search-input.sync="search"
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="id"
      placeholder="کلیدواژه موردنظر..."
      solo
      append-icon="mdi-magnify"
      background-color="#EEEEEE"
      color="white"
      class="rounded-bl-xl rounded-br-xl"
      style="position: absolute;left:0;right:0;z-index:1000"
    >
      <template #no-data>
        <v-list-item>
          <v-list-item-title>نتیجه ای یافت نشد</v-list-item-title>
        </v-list-item>
      </template>

      <template #item="{ item }">
        <v-list-item-avatar :height="50" :width="50">
          <img :src="item.image" :alt="item.image" @error="setAltImg" />
        </v-list-item-avatar>
        <v-list-item-content style="border-bottom:1px dotted grey" @click="searched(item)">
          <v-list-item-title class="custom-font-13">{{ item.name }}</v-list-item-title>
          <div class="d-flex align-self-center mt-3">
            <h5
              v-if="item.price.discount_amount > 0"
              class="red--text line-decoration"
            >{{ item.price.amount }} تومان</h5>
            <h5 class="mr-3 green--text">{{ item.price.final_amount }} تومان</h5>
          </div>
        </v-list-item-content>
      </template>
    </v-autocomplete>
  </v-container>
</template>

<script>
export default {
  name: 'ShopSearch',
  props: {
    searchIcon: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    items: [],
    search: null,
  }),
  watch: {
    search(newVal) {
      newVal && this.getProducts(newVal)
      this.items = []
    }
  },
  methods: {
    async getProducts(val) {
      try {
        const { data } = await this.$axios.get('/search/allProducts')
        data.forEach((item, index) => {
          if (item.name.includes(val)) {
            this.items.push(item)
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    searched(item) {
      if (item.type === 0 || item.type === 1) {
        this.$router.push(`/product/${item.id}/${item.name.replace(/[\u200B-\u200C\uFEFF]/g, ' ')
          .replace(/  +/g, ' ')
          .split(' ')
          .join('-')}`)
      } else if (!item.type) {
        this.$router.push(`/product/book/${item.id}/${item.name.replace(/[\u200B-\u200C\uFEFF]/g, ' ')
          .replace(/  +/g, ' ')
          .split(' ')
          .join('-')}`)

      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>