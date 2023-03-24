<template>
    <v-alert class="lighten-5 rounded-lg" :color="alertInfo.color ? alertInfo.color : 'light-blue'">
        <div class="d-flex justify-space-between">
            <div class="d-flex align-center">
                <v-icon v-if="alertInfo.icon" color="blue">{{ alertInfo.icon }}</v-icon>
                <h5
                    class="custom-font-13"
                    :class="alertInfo.color ? 'black--text' : 'blue--text'"
                >{{ alertInfo.caption }}</h5>
            </div>
            <v-btn
                v-if="alertInfo.showReviewBtn"
                to="/category"
                color="#757575"
                class="rounded-pill white--text custom-font-11 review_product"
            >مرورمحصولات</v-btn>
        </div>
    </v-alert>
</template>

<script>
export default {
    name: 'AlertComponent',
    props: {
        alertInfo: {
            type: Object,
            default: () => { }
        }
    }
};
</script>

<style lang="scss" scoped>
.review_product {
    &:hover {
        @include applyTransition;
        background-color: #ea1d21 !important;
    }
}
</style>