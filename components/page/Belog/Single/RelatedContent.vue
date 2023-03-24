<template>
    <div>
        <BlockTitle :block-title="blockCaption" />
        <v-card v-if="!loading" flat class="related-content pa-5 rounded-lg my-3">
            <nuxt-link
                v-for="(post, index) in relatedContents"
                :key="index"
                class="single_post d-flex align-center py-2"
                :to="'/blog/' + `${post.category.id}/${post.id}`"
            >
                <div class="single_post_img rounded-lg">
                    <img
                        :src="post.image || setAltImg"
                        :alt="post.image"
                        class="image-dimention"
                        @error="setAltImg"
                    />
                </div>
                <div class="single_post_title mr-5 black--text">
                    <h5 class="custom-font-11">{{ post.title }}</h5>
                </div>
            </nuxt-link>
        </v-card>
        <div v-else>
            <v-skeleton-loader
                v-for="(skeleton, index) in 4"
                :key="index"
                v-bind="attrs"
                type="list-item-avatar-two-line"
            ></v-skeleton-loader>
        </div>
    </div>
</template>

<script>
import BlockTitle from '@/components/common/BlockTitle/BlockTitle'
export default {
    name: 'RelatedContent',
    components: {
        BlockTitle,
    },
    props: {
        blockCaption: {
            type: Object,
            default: () => { },
        },
        relatedContents: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            attrs: {
                boilerplate: false,
                elevation: 0
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.v-card.related-content {
    @include applyShadow;
    .single_post {
        border-bottom: 2px dotted rgba(128, 128, 128, 0.308);
        &_img {
            overflow: hidden;
            width: 80px;
            height: 80px;
        }
        &:last-child {
            border-bottom: none !important;
        }
    }
}
</style>
