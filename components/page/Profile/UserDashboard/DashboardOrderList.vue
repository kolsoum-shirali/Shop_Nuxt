<template>
        <v-card class="mt-10">
            <WidgetTitle :widget-title="widgetTitle" />
        </v-card>
</template>

<script>
import WidgetTitle from "@/components/common/WidgetTitle/WidgetTitle";
export default {
    name: 'DashboardOrderList',
    components: {
        WidgetTitle
    },
    data() {
        return {
            widgetTitle: 'محصولات خریداری شده',

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.widget__wrapp {
   @include widget;
}
</style>