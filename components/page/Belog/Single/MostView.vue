<template>
    <v-card flat class="most_view mt-10 rounded-lg">
        <WidgetTitle :widget-title="widgetTitle" />
        <v-tabs v-if="!tabLoading" v-model="tab" hide-slider show-arrows centered>
            <v-tab
                v-for="caption in sortCaption"
                :key="caption.tab"
                class="grey--text"
                active-class="show-active"
            >
                <div>
                    <v-icon>{{ caption.icon }}</v-icon>
                    <h6 class="custom-font-11">{{ caption.tab }}</h6>
                </div>
            </v-tab>
        </v-tabs>
        <v-skeleton-loader v-else v-bind="attrs" type="card-heading"></v-skeleton-loader>
        <v-tabs-items v-if="!loading" v-model="tab">
            <v-tab-item v-for="productTab in 3" :key="productTab">
                <v-card
                    v-for="(product, index) in item.products"
                    :key="index"
                    :img="product.image"
                    height="50"
                    width="90%"
                    flat
                    class="my-2 rounded-lg pa-2 mx-auto custom-font-13 d-flex justify-start align-center"
                    :to="`/product/${product.id}/${decodePersianName(product.name)}`"
                >
                    <h5 class="white--text">{{ product.name }}</h5>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
        <div v-else>
            <v-skeleton-loader
                v-for="(skeleton, index) in 4"
                :key="index"
                v-bind="attrs"
                type="card-heading"
            ></v-skeleton-loader>
        </div>
    </v-card>
</template>

<script>
import WidgetTitle from '@/components/common/WidgetTitle/WidgetTitle'
export default {
    name: 'MostView',
    components: {
        WidgetTitle,
    },
    data() {
        return {
            widgetTitle: 'ترین ها',
            tab: null,
            item: {},
            sortCaption: [],
            loading: false,
            tabLoading: false,
            attrs: {
                boilerplate: false,
                elevation: 0
            }
        }
    },
    async fetch() {
        this.tabLoading = true
        try {
            const { data } = await this.$axios.get('/mostView/sort')
            this.sortCaption = data
            this.getProducts()
        }
        catch (err) {
            console.log(err)
        }
        this.tabLoading = false
    },
    watch: {
        tab(newVal) {
            this.getProducts()
        }
    },
    methods: {
        async getProducts() {
            this.loading = true
            try {
                const { data } = await this.$axios.get('/mostView/' + (this.tab + 1))
                this.item = data
            }
            catch (err) {
                console.log(err)
            }
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
.most_view {
    @media screen and (max-width: 960px) {
    .widget__wrapp {
      @include widget;
    }
  }
    @include applyShadow;
    .show-active {
        .v-icon {
            color: #ea1d21 !important;
        }
        h6 {
            color: black !important;
        }
    }
    .v-tabs-items {
        .v-card {
            position: relative;
            &::after {
                content: "";
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4) !important;
                border-radius: 8px;
                z-index: 1;
            }
            h5 {
                position: absolute;
                z-index: 2;
            }
        }
    }
    ::v-deep .v-skeleton-loader__heading {
        width: 90%;
    }
}
</style>
