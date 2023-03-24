<template>
    <v-card color="#048ced" flat class="rounded-lg my-5 white--text pa-4">
        <div class="telegram_head d-flex align-center">
            <v-icon color="white">mdi-near-me</v-icon>
            <h5 class="mr-2">کانال تلگرام</h5>
        </div>
        <nuxt-link to="/" class="telegram_info left-align mt-3 extend-line">
            <p class="custom-font-11 mb-0 white--text">اخبار مقالات و تخفیفات گروهی را دنبال کنید</p>
            <h6>mahdisweb@</h6>
        </nuxt-link>
    </v-card>
</template>

<script>
export default {
    name: 'TelegramWidget',
};
</script>

<style lang="scss" scoped>
.v-card {
    box-shadow: 0 0 7px -2px rgb(0 0 0 / 10%) !important;
    position: relative;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        right: -44px;
        top: 22px;
        width: 91px;
        height: 79px;
        border: 1px dashed #fff;
        border-radius: 50%;
    }
    .telegram_info {
        h6 {
            color: rgba(255, 250, 250, 0.61);
        }
    }
}
</style>