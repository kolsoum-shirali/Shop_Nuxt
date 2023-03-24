<template>
    <v-card class="my-10">
        <WidgetTitle :widget-title="widgetTitle" />
        <div class="pa-3">
            <v-timeline align-top dense>
                <v-timeline-item v-for="(item, index) in news" :key="index" color="pink" small>
                    <nuxt-link :to="`/blog/${item.category.id}/${item.id}`" class="black--text">
                        <h6 class="text-grey-darken">{{ item.publishedDate }}</h6>
                        <h5 class="custom-font-13">{{ item.title }}</h5>
                    </nuxt-link>
                </v-timeline-item>
            </v-timeline>
        </div>
    </v-card>
</template>

<script>
import WidgetTitle from '@/components/common/WidgetTitle/WidgetTitle'
export default {
    name: 'DashboardLastNews',
    components: {
        WidgetTitle,
    },
    data() {
        return {
            widgetTitle: '  آخرین اخبار',
            news: []
        }
    },
    async fetch() {
        try {
            const { data } = await this.$axios.get('/news')
            this.news = data
        } catch (err) {
            console.log(err)
        }
    },
}
</script>

<style lang="scss" scoped>
.widget__wrapp {
    @include widget;
}
</style>
