<template>
    <div class="d-flex justify-space-between align-center">
        <div class="extend-line">
            <h4 class="white--text">{{productName}}</h4>
            <h5 class="grey--text">{{englishName}}</h5>
        </div>
        <v-tooltip top nudge-bottom="15">
            <template #activator="{ on, attrs }">
                <v-icon
                    class="extend-cursor"
                    size="35"
                    color="white"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >mdi-bookmark-outline</v-icon>
            </template>
            <span class="custom-font-10">افزودن به علاقمندی ها</span>
        </v-tooltip>
    </div>
</template>

<script>
export default {
    name: 'ProductTitle',

    props: {
        productName: {
            type: String,
            default: ''
        },
        englishName: {
            type: String,
            default: ''
        }
    }


};
</script>

<style lang="scss" scoped>
</style>