<template>
    <div>
        <BlockTitle :block-title="blockCaption" class="my-5" />
        <div v-if="!loading" class="comments-wrapper">
            <v-card flat class="user_comment rounded-lg pa-5">
                <div
                    v-for="(user, index) in comments"
                    :key="index"
                    class="user_comment-single dash-border rounded-lg pa-3 my-3"
                >
                    <div class="commentor_info d-flex justify-space-between">
                        <div class="d-flex align-center">
                            <img
                                class="rounded-lg"
                                src="https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2020/12/104631-200-150x150.png"
                                alt="https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2020/12/104631-200-150x150.png"
                                @error="setAltImg"
                            />
                            <div class="mr-3">
                                <h6>{{ user.fullName }}</h6>
                                <h6>{{ user.publishedDate }}</h6>
                            </div>
                        </div>
                        <v-btn
                            depressed
                            class="custom-font-10 rounded-tr-xl rounded-b-xl response_btn"
                            to="/"
                        >پاسخ</v-btn>
                    </div>
                    <div class="comment_content mt-4 custom-font-13">
                        <p>{{ user.content }}</p>
                    </div>
                </div>
            </v-card>
        </div>
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
    name: 'UserComment',
    components: {
        BlockTitle,
    },
    props: {
        blockCaption: {
            type: Object,
            default: () => { },
        },
        comments: {
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
.comments-wrapper {
    .user_comment {
        @include applyShadow;
        &-single {
            .commentor_info {
                img {
                    width: 60px;
                    height: 60px;
                }
                .response_btn {
                    height: 30px !important;
                    &:hover {
                        @include applyTransition;
                        background-color: #ea1d21;
                        color: white;
                        border-radius: 15% !important;
                    }
                }
            }
        }
    }
}
</style>
