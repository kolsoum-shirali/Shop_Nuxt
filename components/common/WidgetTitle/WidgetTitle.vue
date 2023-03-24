<template>
    <div class="widget__wrapp">
        <div class="d-flex align-center widget__wrapp_title pa-3">
            <v-icon color="grey">mdi-subdirectory-arrow-left</v-icon>
            <h5 class="mr-2">{{ widgetTitle }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WidgetTitle',
    props: {
        widgetTitle: {
            type: String,
            default: ''
        }
    },
};
</script>

<style lang="scss" scoped>
.widget__wrapp {
    position: relative;
    z-index: 2 !important;
    &::before {
        height: 40px;
        width: 100%;
        background-color: #eeeeee;
        position: absolute;
        top: -12px;
        left: 0;
        border-radius: 10px;
        content: "";
        -moz-transform: skewY(2deg);
        -webkit-transform: skewY(2deg);
        -o-transform: skewY(2deg);
        -ms-transform: skewY(2deg);
        transform: skewY(2deg);
    }
    &::after {
        height: 42px;
        width: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
        content: "";
        -moz-transform: skewY(-3deg);
        -webkit-transform: skewY(-3deg);
        -o-transform: skewY(-3deg);
        -ms-transform: skewY(-3deg);
        transform: skewY(-3deg);
    }
    &_title {
        position: relative;
        z-index: 1;
    }
}
</style>