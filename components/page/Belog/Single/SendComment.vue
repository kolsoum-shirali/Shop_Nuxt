<template>
    <div>
        <BlockTitle :block-title="sendCaption" class="my-5" />
        <v-card flat class="pa-5 rounded-lg">
            <Review />
        </v-card>
    </div>
</template>

<script>
import BlockTitle from "@/components/common/BlockTitle/BlockTitle";
import Review from "@/components/common/Review/Review";
export default {
    name: 'SendComment',
    components: {
        BlockTitle, Review
    },
    props: {
        sendCaption: {
            type: Object,
            default: () => { }
        }
    },
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
    @include applyShadow;
}
</style>