<template>
    <div v-if="!loading" class="blogList">
        <v-row v-for="(item, index) in list" :key="index" class="blogList_single mt-3">
            <v-col cols="12" sm="4">
                <div class="blogList_single-image" :title="item.title">
                    <img
                        class="image-dimention rounded-lg"
                        :src="item.image || setAltImg"
                        :alt="item.image"
                        @error="setAltImg"
                    />
                </div>
            </v-col>
            <v-col class="d-flex flex-column justify-space-between blog_content" cols="12" sm="8">
                <div>
                    <nuxt-link
                        class="custom-font-13 black--text font-weight-bold"
                        :to="'/blog/' + item.category.id + '/' + item.id"
                    >{{ item.title }}</nuxt-link>
                    <p class="mt-3 custom-font-13">{{ item.subTitle }}</p>
                </div>
                <div class="d-flex justify-space-between align-center detail">
                    <p class="custom-font-11 mt-2">
                        <v-icon>mdi-clock-outline</v-icon>تاریخ انتشار
                        <span class="red--text mr-2">{{ item.publishedDate }}</span>
                    </p>
                    <v-btn
                        title=" ادامه مطالب"
                        :to="'/blog/' + item.category.id + '/' + item.id"
                        fab
                        elevation="0"
                        small
                        color="grey lighten-2"
                    ></v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
    <div v-else class="mt-5">
        <v-row v-for="(item, index) in 4" :key="index">
            <v-skeleton-loader class="col-12 col-sm-5" type="image"></v-skeleton-loader>
            <div class="col-12 col-sm-7">
                <v-skeleton-loader type="article"></v-skeleton-loader>
                <div class="article_skeleton">
                    <v-skeleton-loader type="card-heading"></v-skeleton-loader>
                </div>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'ContentList',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
};
</script>

<style lang="scss" scoped>
.blogList {
    &_single {
        overflow: hidden;
        &-image {
            height: 200px;
        }
        .blog_content {
            .detail {
                position: relative;
                &::before {
                    content: "";
                    top: 20px;
                    right: 29%;
                    left: 9%;
                    position: absolute;
                    border-bottom: 1px dashed #ddd;
                    @media screen and(max-width:600px) {
                        right: 40%;
                    }
                }
            }
        }
        .v-btn {
            position: relative;
            overflow: hidden;
            &::before {
                @include applyTransition;
                content: "\2190";
                font-weight: 800;
                color: #fff;
                font-size: 27px;
                display: inline-block;
                position: absolute;
                transform: translateX(40px);
                opacity: 1;
                background-color: transparent !important;
            }
            &::after {
                @include applyTransition;
                content: "\2190";
                font-weight: 800;
                color: #fff;
                font-size: 27px;
                display: inline-block;
                position: absolute;
            }
        }
        &:hover {
            .v-btn {
                @include applyTransition;
                background-color: #ea1d21 !important;
                position: relative;
                &::before {
                    transform: translateX(0px) !important;
                }
                &::after {
                    transform: translateX(-35px);
                }
            }
        }
    }
}

.article_skeleton {
    ::v-deep .v-skeleton-loader__heading {
        width: 90%;
    }
}
</style>