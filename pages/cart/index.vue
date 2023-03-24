<template>
    <div>
        <v-tabs v-model="tab" slider-color="white" centered icons-and-text>
            <v-tab v-for="(item, index) in tabs" :key="index" :disabled="item.disabled">
                <div class="d-flex align-center">
                    <div class="ml-2 d-flex align-center justify-center white--text order_step">
                        <h2>{{ item.step }}</h2>
                    </div>
                    <div>
                        <h5 class="black--text">{{ item.title }}</h5>
                        <h5 class="grey--text">{{ item.description }}</h5>
                    </div>
                </div>
            </v-tab>

            <v-tab-item mode="out-in" leave-absolute>
                <v-card-text>
                    <ProductList @orderContinue="orderContinue($event)" />
                </v-card-text>
            </v-tab-item>
            <v-tab-item mode="out-in" leave-absolute>
                <v-card-text>
                    <PaymentDetail @orderContinue="orderContinue($event)" />
                </v-card-text>
            </v-tab-item>
            <v-tab-item mode="out-in" leave-absolute>
                <v-card-text>
                    <OrderComplete />
                </v-card-text>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import ProductList from "@/components/page/Cart/ProductList";
import PaymentDetail from "@/components/page/Cart/PaymentDetail";
import OrderComplete from "@/components/page/Cart/OrderComplete";
export default {
    name: 'CartIndex',
    components: {
        ProductList, PaymentDetail, OrderComplete
    },
    middleware:'basket',
    data() {
        return {
            tabs: [
                {
                    step: '01',
                    title: 'لیست محصولات',
                    description: 'فهرست اقلام خود را مدیریت کنید',
                    disabled: false
                },
                {
                    step: '02',
                    title: 'جزئیات پرداخت',
                    description: 'صورت حساب خودراپرداخت کنید',
                    disabled: true
                },
                {
                    step: '03',
                    title: 'تکمیل سفارش',
                    description: 'سفارش خودرامرور و ثبت کنید',
                    disabled: true
                },
            ],
            tab: null
        };
    },
    methods: {
        orderContinue(value) {
                this.tabs[this.tab + 1].disabled = value
                this.tab = this.tab + 1           
        },
    }

};
</script>

<style lang="scss" scoped>
.order_step {
    border: 4px solid black !important;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ea1d21;
}
</style>