<template>
    <v-card class="mt-10">
        <div class="realtime_suggestion">
            <WidgetTitle :widget-title="widgetTitle" />
            <v-carousel
                v-if="!loading"
                :height="388"
                :interval="1500"
                dark
                cycle
                :show-arrows="false"
                hide-delimiters
                progress
                progress-color="#BDBDBD"
                class="mt-2 pa-2"
            >
                <v-carousel-item v-for="(offerProduct, index) in offerProducts" :key="index">
                    <ProductCard :product-info="offerProduct" />
                </v-carousel-item>
            </v-carousel>
            <div v-else class="pa-3">
                <v-skeleton-loader type="image"></v-skeleton-loader>
                <v-skeleton-loader
                    v-for="(item, index) in 2"
                    :key="index"
                    class="mt-2"
                    type="heading"
                ></v-skeleton-loader>
                <v-row class="my-2 mx-0" justify="space-around">
                    <v-skeleton-loader v-for="(item, index) in 2" :key="index" type="button"></v-skeleton-loader>
                </v-row>
            </div>
        </div>
    </v-card>
</template>

<script>
import WidgetTitle from "@/components/common/WidgetTitle/WidgetTitle"
import ProductCard from '@/components/page/Product/Card/ProductCard'
export default {
    name: 'RealtimeSuggestion',
    components: { WidgetTitle, ProductCard },
    data() {
        return {
            widgetTitle: 'پیشنهاد لحظه ای',
            offerProducts: [],
            loading: false
        };
    },
    async fetch() {
        this.loading = true
        try {
            const { data } = await this.$axios.get('/realtime/Suggestion')
            this.offerProducts = data
        }
        catch (err) {
            console.log(err)
        }
        this.loading = false
    }


};
</script>

<style lang="scss" scoped>
::v-deep .v-skeleton-loader__heading {
    width: 100%;
}
::v-deep.realtime_suggestion {
    .btn_arrow {
        height: 35px !important;
        min-width: 33px !important;
    }
}
@media screen and (max-width: 960px) {
    .widget__wrapp {
      @include widget;
    }
  }
</style>