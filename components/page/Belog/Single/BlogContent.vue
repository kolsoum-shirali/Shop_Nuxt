<template>
    <v-card flat class="single_blog my-5 pa-5 rounded-lg">
        <div v-if="!loading">
            <div class="single-title d-flex align-center pb-5">
                <v-icon
                    color="white"
                    class="rounded-xl grey darken-2"
                    size="40"
                >{{ blogContent.icon }}</v-icon>
                <h4 class="mr-2">{{ blogContent.title }}</h4>
            </div>
            <div class="post_meta d-flex my-5 text-grey-darken">
                <div class="post_date d-flex align-center" style="border-left: 1px solid grey">
                    <v-icon>mdi-clock-outline</v-icon>
                    <h6 class="mx-2">
                        تاریخ انتشار
                        <span>{{ blogContent.publishedDate }}</span>
                    </h6>
                </div>
                <div class="post_cat d-flex align-center mx-3">
                    <v-icon>mdi-format-list-bulleted</v-icon>
                    <h6 class="mx-2">
                        دسته بندی
                        <span class="mx-2">{{ blogContent.category.type }}</span>
                    </h6>
                </div>
            </div>
            <v-row class="my-8">
                <v-card flat class="col-8 mx-auto rounded-lg pa-0">
                    <video
                        v-if="blogContent.video"
                        controls
                        :poster="blogContent.image"
                        width="100%"
                    >
                        <source :src="blogContent.video" type="video/mp4" />
                    </video>
                </v-card>
            </v-row>
            <div class="entry-content extend-line custom-font-13" v-html="blogContent.description"></div>
        </div>
        <div v-else>
            <v-skeleton-loader
                v-for="(skeleton, index) in 6"
                :key="index"
                v-bind="attrs"
                type="list-item-three-line"
            ></v-skeleton-loader>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'BlogContent',
    props: {
        blogContent: {
            type: Object,
            default: () => { }
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
.v-card.single_blog {
    @include applyShadow;
    .single-title {
        border-bottom: 2px dotted rgba(128, 128, 128, 0.24);
    }
    .entry-content{
        overflow: hidden;
    }
}
</style>
