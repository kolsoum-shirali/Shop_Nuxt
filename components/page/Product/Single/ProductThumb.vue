<template>
    <v-card class="product_thumb">
        <div class="img_wrapp">
            <img
                class="image-dimention"
                :src="bookImage || setAltImg"
                :alt="bookImage"
                @error="setAltImg"
            />
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'ProductThumb',
    props: {
        bookImage: {
            type: String,
            default: ''
        }
    }



};
</script>

<style lang="scss" scoped>
.product_thumb {
    @include applyShadow;
    position: relative;
    &::before {
        content: "";
        height: 26px;
        border-radius: 50%;
        background: #333;
        position: absolute;
        top: -20px;
        right: 10px;
        left: 10px;
    }
    .img_wrapp {
        height: 250px;
    }
}
</style>