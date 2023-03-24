<template>
    <div>
        <v-row>
            <v-col cols="12" md="9">
                <BlogDescription />
                <ContentList :list="blogs" :loading="loading" />
            </v-col>
            <v-col cols="12" md="3">
                <TelegramWidget />
                <MostView />
                <InstagramWidget class="my-5" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import TelegramWidget from "@/components/page/Belog/Single/TelegramWidget"
import MostView from "@/components/page/Belog/Single/MostView"
import InstagramWidget from "@/components/page/Belog/Single/InstagramWidget"
import BlogDescription from "@/components/page/Belog/BlogList/BlogDescription"
import ContentList from '@/components/page/Belog/BlogList/ContentList'
export default {
    name: 'BlogIndex',
    components: {
        TelegramWidget, MostView, InstagramWidget, BlogDescription, ContentList
    },
    async asyncData({ $axios }) {
        let blogs
        let loading = false
        loading = true
        try {
            const { data } = await $axios.get('/blog/all')
            blogs = data
        }
        catch (err) {
            console.log(err)
        }
        loading = false
        return {
            blogs,
            loading
        }
    },
    data() {
        return {
            blogs: [],
            loading: false
        };
    },


};
</script>

<style lang="scss" scoped>
</style>