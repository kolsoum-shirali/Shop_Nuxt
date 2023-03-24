<template>
    <v-card flat class="rounded-lg white--text pa-4">
        <div class="instagram_head d-flex align-center">
            <v-icon color="white">mdi-instagram</v-icon>
            <h5 class="mr-2">صفحه اینستاگرام</h5>
        </div>
        <nuxt-link to="/" class="instagram_info left-align mt-3 extend-line">
            <p class="custom-font-11 mb-0 white--text">اخبار مقالات و تخفیفات گروهی را دنبال کنید</p>
            <h6>mahdisweb@</h6>
        </nuxt-link>
    </v-card>
</template>

<script>
export default {
    name: 'InstagramWidget',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.v-card {
     box-shadow: 0 0 7px -2px rgb(0 0 0 / 10%) !important;
    background: radial-gradient(
        circle at 33% 100%,
        #f59652 4%,
        #f15245 30%,
        #d92e7f 62%,
        #9b36b7 85%,
        #515ecf
    );
    .instagram_info {
        h6 {
            color: rgba(255, 250, 250, 0.61);
        }
    }
}
</style>