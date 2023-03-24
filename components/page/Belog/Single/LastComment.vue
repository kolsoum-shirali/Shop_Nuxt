<template>
    <v-card flat class="mt-10 rounded-lg">
        <WidgetTitle :widget-title="widgetTitle" />
        <ul v-if="!loading" class="recent__comments pa-3 my-1">
            <li
                v-for="(comment, index) in recentComments"
                :key="index"
                class="recent__comments_single d-flex align-center extend-line dash-border pa-2 my-1"
            >
                <v-icon color="#E0E0E0">mdi-format-align-right</v-icon>
                <p class="custom-font-11 mr-2 text-grey-light mb-0">
                    {{ comment.authore }}
                    <nuxt-link to="/" class="mr-2 black--text">{{ comment.title }}</nuxt-link>
                </p>
            </li>
        </ul>
        <div v-else>
            <v-skeleton-loader
                v-for="(skeleton, index) in 4"
                :key="index"
                v-bind="attrs"
                type="list-item-two-line"
            ></v-skeleton-loader>
        </div>
    </v-card>
</template>

<script>
import WidgetTitle from "@/components/common/WidgetTitle/WidgetTitle";
export default {
    name: 'LastComment',
    components: {
        WidgetTitle
    },
    props: {
        recentComments: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            widgetTitle: 'آخرین دیدگاه ها',
            attrs: {
                boilerplate: false,
                elevation: 0
            }
        };
    },
};
</script>

<style lang="scss" scoped>
.v-card {
    @media screen and (max-width: 960px) {
    .widget__wrapp {
      @include widget;
    }
  }
    @include applyShadow;
    .recent__comments {
        &_single:hover {
            .v-icon {
                color: rgba(128, 125, 125, 0.897) !important;
            }
        }
    }
}
</style>