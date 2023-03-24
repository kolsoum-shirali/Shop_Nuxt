<template>
  <v-card class="mt-10">
    <WidgetTitle :widget-title="widgetTitle" />
    <div v-if="!loading" class="pa-2">
      <v-rating
        v-model="voteRate.rate"
        color="yellow darken-3"
        background-color="grey darken-1"
        empty-icon="$ratingFull"
        half-increments
        size="20"
      ></v-rating>
      <h5 class="mr-2">({{ voteRate.voteAverage }})</h5>
    </div>
    <v-skeleton-loader v-else class="py-3" type="heading"></v-skeleton-loader>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import WidgetTitle from '@/components/common/WidgetTitle/WidgetTitle'
export default {
  name: 'RateFilter',
  components: { WidgetTitle },
  data() {
    return {
      widgetTitle: 'میانگین رای(امتیاز)',
    }
  },
  computed: {
    ...mapState({
      voteRate: (state) => state.category.voteRate,
      loading: (state) => state.category.loading,
    }),
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-skeleton-loader__heading {
  width: 90%;
  margin: 0 auto;
}
@media screen and (max-width: 960px) {
    .widget__wrapp {
      @include widget;
    }
  }
</style>
