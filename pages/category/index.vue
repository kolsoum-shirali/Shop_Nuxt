<template>
    <v-row :style="[{ flexWrap: $vuetify.breakpoint.smAndDown ? 'wrap-reverse' : 'wrap'}]">
        <v-col cols="12" lg="3" md="5" sm="6">
            <ProductCategory />
            <RealtimeSuggestion />
            <RateFilter />
            <TelegramWidget />
        </v-col>
        <v-col cols="12" lg="9" md="7" sm="6">
            <CategoryResult />
        </v-col>
    </v-row>
</template>

<script>
import ProductCategory from "@/components/page/Category/Single/ProductCategory"
import RealtimeSuggestion from '@/components/page/Category/Single/RealtimeSuggestion'
import RateFilter from "@/components/page/Category/Single/RateFilter"
import TelegramWidget from "@/components/page/Belog/Single/TelegramWidget";
import CategoryResult from "@/components/page/Category/Single/CategoryResult";
export default {
    name: 'CategoryIndex',
    components: { ProductCategory, RealtimeSuggestion, RateFilter, TelegramWidget, CategoryResult },
    layout: 'category',
    async asyncData({ store, route }) {
        await store.dispatch('category/getCategoryProducts', route.query.category_id);
    },
};
</script>

<style lang="scss" scoped>

</style>