<template>
    <div>
        <v-row style="margin-top: -18em">
            <BreadCrumb :breadcrumbs="breadcrumbsValue" class="col-12" />
            <ProductTitle
                :product-name="selectedBook.name"
                :english-name="selectedBook.englishName"
                class="col-12 mb-5"
            />
            <div class="col-12 col-md-9">
                <v-row justify="space-between">
                    <div class="col-12 col-md-4">
                        <ProductThumb :book-image="selectedBook.image" />
                    </div>
                    <div class="col-12 col-md-8">
                        <DetailTable :book-detail="selectedBook.bookInfo" />
                    </div>
                </v-row>
                <ProductService class="mt-5" />
                <ProductDescription :product-detail="selectedBook.detail" />
            </div>
            <div class="col-12 col-md-3">
                <PrerequisiteCourse :product="selectedBook" />
                <EmojeRate :emogy-rate="selectedBook.emogyRate" />
                <ProductSellInfo :benefits="selectedBook.benefits" />
                <ProductAuthore :authore="selectedBook.authore" />
                <ProductShare :btn-category="selectedBook.btnCategory" />
            </div>
        </v-row>
        <StickyCard :product="selectedBook" />
    </div>
</template>

<script>
import BreadCrumb from "@/components/common/BreadCrumb/BreadCrumb";
import ProductTitle from "@/components/page/Product/Single/ProductTitle";
import ProductThumb from "@/components/page/Product/Single/ProductThumb";
import DetailTable from '@/components/page/Product/Single/DetailTable'
import PrerequisiteCourse from "@/components/page/Product/Single/PrerequisiteCourse";
import ProductService from '@/components/page/Product/Single/ProductService'
import EmojeRate from "@/components/page/Product/Single/EmojeRate";
import ProductSellInfo from "@/components/page/Product/Single/ProductSellInfo";
import ProductAuthore from "@/components/page/Product/Single/ProductAuthore";
import ProductShare from "@/components/page/Product/Single/ProductShare";
import ProductDescription from "@/components/page/Product/Single/ProductDescription";
import StickyCard from '@/components/page/Product/Single/StickyCard'

export default {
    name: 'IndexBook',
    components: { ProductThumb, DetailTable, PrerequisiteCourse, ProductService, EmojeRate, ProductSellInfo, ProductAuthore, ProductShare, ProductDescription, StickyCard, BreadCrumb, ProductTitle },
    layout: 'product',
    async asyncData({ $axios, route }) {
        try {
            const { data } = await $axios.get('/ebooks', { params: { id: route.params.id } })
            const breadcrumbs = [
                {
                    title: 'صفحه اصلی',
                    icon: 'mdi-home',
                    color: 'white'
                },
                {
                    title: 'دسته بندی',
                    color: 'white',
                    icon: 'mdi-map',
                },
            ]
            data.breadcrumbs.forEach((item) => {
                breadcrumbs.push({
                    title: item.title,
                    type: item.type,
                    id: item.id,
                    color: 'white'
                })
            })
            breadcrumbs.forEach((item, index) => {
                if (index - 1 === -1) {
                    item.path = '/'
                } else if (item.type === 'subject') {
                    item.path = `/category?category_id=${item.id}&title=${(item.title.replace(/[\u200B-\u200C\uFEFF]/g, ' ')
                        .replace(/  +/g, ' ')
                        .split(' ')
                        .join('-'))}`
                } else if (item.type === 'product') {
                    item.color = '#BDBDBD'
                }
            })
            return {
                selectedBook: data,
                breadcrumbsValue: breadcrumbs
            }
        }
        catch (err) {
            console.log(err)
        }
    },
    data() {
        return {
            selectedBook: {}
        }
    }
};
</script>

<style lang="scss" scoped>
</style>