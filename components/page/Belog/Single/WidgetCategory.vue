<template>
    <v-card flat class="mt-10 rounded-lg">
        <WidgetTitle :widget-title="widgetTitle" />
        <div v-if="!loading" class="widget__categories pa-3">
            <div
                v-for="(category, index) in categories"
                :key="index"
                class="widget__categories_single d-flex align-center custom-font-13 my-1 py-1"
            >
                <v-icon color="#E0E0E0" size="22">mdi-arrow-left-thin</v-icon>
                <nuxt-link :to="category.path" class="mb-0 black--text">{{ category.title }}</nuxt-link>
            </div>
        </div>
        <div v-else>
            <v-skeleton-loader
                v-for="(skeleton, index) in 5"
                :key="index"
                v-bind="attrs"
                type="card-heading"
            ></v-skeleton-loader>
        </div>
    </v-card>
</template>

<script>
import WidgetTitle from "@/components/common/WidgetTitle/WidgetTitle";
export default {
    name: 'WidgetCategory',
    components: { WidgetTitle },
    data() {
        return {
            widgetTitle: 'دسته ها',
            categories: [],
            loading: false,
            attrs: {
                boilerplate: false,
                elevation: 0
            }
        };
    },
    async fetch() {
        this.loading = true
        try {
            const { data } = await this.$axios.get('/category/widget')
            this.categories = data
        }
        catch (err) {
            console.log(err)
        }
        this.loading = false
    }

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
    .widget__categories {
        &_single {
            border-bottom: 1px dashed rgba(161, 160, 160, 0.226);
            &:last-child {
                border-bottom: none !important;
            }
            &:hover {
                .v-icon {
                    @include applyTransition;
                    color: #ea1d21 !important;
                }
            }
        }
    }
    ::v-deep .v-skeleton-loader__heading {
        width: 90%;
    }
}
</style>