<template>
    <v-card flat class="teacher rounded-lg pa-5 mt-5">
        <v-row v-if="!loading">
            <div class="teacher_img col-12 col-md-4">
                <v-row justify="space-between" align="center">
                    <img
                        class="rounded-xl col-12 col-md-12 col-sm-8"
                        :src="require(`@/assets/images/${figureInfo.id}.jpg`)"
                        :alt="figureInfo.image"
                        @error="setAltImg"
                    />
                    <div
                        class="social-info my-7 extend-line col-12 col-md-12 col-sm-4"
                        :class="[$vuetify.breakpoint.smAndDown ? 'center-align' : '']"
                    >
                        <h4 class="red--text">پل های ارتباطی</h4>
                        <ul class="mt-3">
                            <li
                                v-for="(item, index) in figureInfo.detail.contactWays"
                                :key="index"
                                class="d-flex"
                                :class="[$vuetify.breakpoint.smAndDown ? 'justify-center' : '']"
                            >
                                <v-icon>{{ item.icon }}</v-icon>
                                <h5 class="black--text mr-2">{{ item.title }}</h5>
                            </li>
                        </ul>
                        <div
                            class="d-flex mt-5"
                            :class="[$vuetify.breakpoint.smAndDown ? 'justify-center' : '']"
                        >
                            <Social
                                v-for="(social, index) in socials"
                                :key="index"
                                :social="social"
                            />
                        </div>
                    </div>
                </v-row>
            </div>
            <div class="teacher_info col-12 col-md-8">
                <h3 class="teacher_name">{{ figureInfo.fullName }}</h3>
                <h4 class="my-5">مهارت ها</h4>
                <v-row class="skills">
                    <div
                        v-for="(skill, index) in figureInfo.detail.skills"
                        :key="index"
                        class="single_skill col-md-6"
                    >
                        <div class="d-flex justify-space-between my-2">
                            <h5 class="skill_title">{{ skill.title }}</h5>
                            <div class="skill_percentage d-flex align-center">
                                <v-btn
                                    class="white--text custom-font-11 mx-1"
                                    fab
                                    x-small
                                    color="#B71C1C"
                                >%</v-btn>
                                <h5>{{ skill.value }}</h5>
                            </div>
                        </div>
                        <v-progress-linear height="7" color="#ea1d21" rounded :value="skill.value"></v-progress-linear>
                    </div>
                </v-row>
                <div class="custom-font-13 mt-10" v-html="figureInfo.detail.moreInfo"></div>
            </div>
        </v-row>
        <div v-else>
            <v-row>
                <div class="col-12 col-sm-4">
                    <v-skeleton-loader class="mb-15" type="image"></v-skeleton-loader>
                    <v-skeleton-loader
                        v-for="(item, index) in 4"
                        :key="index"
                        class="mt-4 caption_info"
                        type="heading"
                    ></v-skeleton-loader>
                    <v-row class="mt-3 mx-0">
                        <v-skeleton-loader
                            v-for="(item, index) in 4"
                            :key="index"
                            class="ml-1"
                            type="button"
                        ></v-skeleton-loader>
                    </v-row>
                </div>
                <div class="col-12 col-sm-8">
                    <v-skeleton-loader class="caption_info" type="heading"></v-skeleton-loader>
                    <v-skeleton-loader class="mt-5" type="heading"></v-skeleton-loader>
                    <v-row>
                        <v-col cols="12" md="6" class="mt-5">
                            <v-skeleton-loader class="caption_info" type="heading"></v-skeleton-loader>
                            <v-skeleton-loader class="mt-5" type="heading"></v-skeleton-loader>
                        </v-col>
                        <v-col cols="12" md="6" class="mt-5">
                            <v-skeleton-loader class="caption_info" type="heading"></v-skeleton-loader>
                            <v-skeleton-loader class="mt-5" type="heading"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6" class="mt-5">
                            <v-skeleton-loader class="caption_info" type="heading"></v-skeleton-loader>
                            <v-skeleton-loader class="mt-5" type="heading"></v-skeleton-loader>
                        </v-col>
                        <v-col cols="12" md="6" class="mt-5">
                            <v-skeleton-loader class="caption_info" type="heading"></v-skeleton-loader>
                            <v-skeleton-loader class="mt-5" type="heading"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-skeleton-loader
                                v-for="(item, index) in 4"
                                :key="index"
                                class="mt-5"
                                type="paragraph"
                            ></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </div>
            </v-row>
        </div>
    </v-card>
</template>

<script>
import Social from "@/components/common/Social/Social"
export default {
    name: 'TeacherInfo',
    components: { Social },
    props: {
        figureInfo: {
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
            socials: [
                { icon: 'mdi-facebook', path: '/', color: '#ea1d21' },
                { icon: 'mdi-youtube', path: '/', color: '#ea1d21' },
                { icon: 'mdi-linkedin', path: '/', color: '#ea1d21' },
                { icon: 'mdi-google-plus', path: '/', color: '#ea1d21' },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.teacher {
    @include applyShadow;
    &_img {
        img {
            width: 100%;
            height: 350px;
        }
    }
    &_info {
        .v-btn {
            width: 20px !important;
            height: 20px !important;
        }
    }
    ::v-deep {
        .v-skeleton-loader__heading {
            width: 100%;
        }
        .v-skeleton-loader__image {
            height: 300px;
        }
        .v-skeleton-loader__button{
            width: 33px;
            height: 33px;
            border-radius: 50%;
        }
    }
    .caption_info {
        ::v-deep .v-skeleton-loader__heading {
            width: 40%;
        }
    }
}
</style>
