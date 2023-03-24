<template>
    <div>
        <BlockTitle :block-title="blogCaption" />
        <v-card v-if="!loading" flat class="rounded-lg pa-4 mt-4">
            <div v-html="article"></div>
        </v-card>
        <v-skeleton-loader v-else class="mt-5" type="paragraph"></v-skeleton-loader>
    </div>
</template>

<script>
import BlockTitle from "@/components/common/BlockTitle/BlockTitle";
export default {
    name: 'BlogDescription',
    components: {
        BlockTitle
    },
    data() {
        return {
            blogCaption: {
                title: 'محتوای وبلاگ',
                icon: 'mdi-book'
            },
            article: '',
            loading: false
        };
    },
    async fetch() {
        this.loading = true
        try {
            const { data } = await this.$axios.get('/blog/description')
            this.article = data
        }
        catch (err) {
            console.log(err)
        }
        this.loading = false
    }
};
</script>

<style lang="scss" scoped>
.v-card {
    @include applyShadow;
}
</style>