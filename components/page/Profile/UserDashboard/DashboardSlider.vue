<template>
    <v-window show-arrows>
        <template #prev="{ on, attrs }">
            <v-btn class="swiper-button-next" fab small color="white" v-bind="attrs" v-on="on">
                <v-icon color="grey">mdi-arrow-right</v-icon>
            </v-btn>
        </template>
        <template #next="{ on, attrs }">
            <v-btn class="swiper-button-prev" fab small color="white" v-bind="attrs" v-on="on">
                <v-icon color="grey">mdi-arrow-left</v-icon>
            </v-btn>
        </template>
        <v-window-item v-for="(picture, index) in images" :key="index">
            <v-card color="white" height="200" class="rounded-xl">
                <img
                    :src="picture.image"
                    :alt="picture.image"
                    class="image-dimention"
                    @error="setAltImg"
                />
            </v-card>
        </v-window-item>
    </v-window>
</template>

<script>
export default {
    name: 'DashboardSlider',
    data() {
        return {
            images: [
                { image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/slide-user2-min.png' },
                { image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/slide-user1-min.png' }
            ],
        };
    },  
};
</script>

<style lang="scss" scoped>
.swiper-button-next:after,
.v-btn--is-elevated.v-btn--fab:after {
    content: "" !important;
}
.swiper-button-prev:hover {
    background-color: #ea1d21 !important ;
    .v-btn__content {
        i {
            color: white !important;
        }
    }
}
.swiper-button-next:hover {
    background-color: #ea1d21 !important ;
    .v-btn__content {
        i {
            color: white !important;
        }
    }
}
</style>