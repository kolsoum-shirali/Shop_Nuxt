<template>
    <div>
        <v-row>
            <v-col cols="12" md="9">
                <BlockTitle :block-title="blogCaption" />
                <ContentList :list="news" :loading="loading" />
            </v-col>
            <v-col cols="12" md="3">
                <TelegramWidget />
                <MostView />
                <InstagramWidget class="my-5"/>
                <ProductCategory class="extend-sticky"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BlockTitle from "@/components/common/BlockTitle/BlockTitle"
import TelegramWidget from "@/components/page/Belog/Single/TelegramWidget"
import MostView from "@/components/page/Belog/Single/MostView"
import InstagramWidget from "@/components/page/Belog/Single/InstagramWidget"
import ContentList from '@/components/page/Belog/BlogList/ContentList'
import ProductCategory from "@/components/page/Category/Single/ProductCategory"
export default {
    name: 'NewsIndex',
    components: {
        TelegramWidget, MostView, InstagramWidget, ContentList, BlockTitle, ProductCategory
    },
    async asyncData({ $axios }) {
        let news
        let loading = false
        loading = true
        try {
            const { data } = await $axios.get('/news')
            news = data
        }
        catch (err) {
            console.log(err)
        }
        loading = false    
        return {
            news,
            loading,
        }
    },
    data() {
        return {
            news: [],
            loading: false,
            blogCaption: {
                title: 'محتوای اخبار',
                icon: 'mdi-book'
            },
        };
    },


};
</script>

<style lang="scss" scoped>
</style>