<template>
    <div>
        <v-simple-table class="mt-5 order_result">
            <template #default>
                <thead>
                    <tr class="grey lighten-4">
                        <th class="text-right black--text">محصول</th>
                        <th class="text-right black--text">جمع جزء</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in cart" :key="index">
                        <td class="text-right custom-font-13">
                            {{ `${product.detail.name} (${product.amount}) ` }}
                            <span
                                class="green--text"
                            >تومان</span>
                        </td>

                        <td class="text-right custom-font-13">
                            {{ numberWithCommas(product.price.final_amount * product.amount) }}
                            <span
                                class="green--text"
                            >تومان</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-right custom-font-13">جمع جزء</td>
                        <td class="text-right custom-font-13">
                            {{ numberWithCommas(totalAmount) }}
                            <span class="green--text">تومان</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-right custom-font-13">مجموع</td>
                        <td class="text-right custom-font-13">
                            {{ numberWithCommas(totalAmount) }}
                            <span class="green--text">تومان</span>
                        </td>
                    </tr>
                    <tr v-if="totalDiscount">
                        <td class="text-right custom-font-13">تخفیف دریافتی</td>
                        <td class="text-right custom-font-13">
                            {{ numberWithCommas(totalDiscount) }}
                            <span class="green--text">تومان</span>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'OrderInfo',

    data() {
        return {

        };
    },
    computed: {
        ...mapState({ cart: state => state.cart.basket }),
        totalAmount() {
            const amount = this.cart.map((item, index) => {
                return item.price.final_amount * item.amount
            })
            return amount.length ? amount.reduce((pre, cur) => pre + cur) : 0
        },
        totalDiscount() {
            const discount = this.cart.map((item, index) => {
                return item.price.discount_amount * item.amount
            })
            return discount.length ? discount.reduce((pre, cur) => pre + cur) : 0
        }
    },

};
</script>

<style lang="scss" scoped>
.order_result {
    @include applyShadow;
    td {
        border-left: 1px solid rgba(199, 198, 198, 0.571);
    }
}
</style>