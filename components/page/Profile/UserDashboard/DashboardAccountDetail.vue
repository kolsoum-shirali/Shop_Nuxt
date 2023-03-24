<template>
    <div class="d-flex justify-space-between user_info">
        <v-card
            v-for="(item, index) in cardItem"
            :key="index"
            class="rounded-lg pa-7 user_info-single d-flex align-center mt-5"
        >
            <div class="icon_wrap">
                <v-icon color="white" size="25">{{ item.icon }}</v-icon>
            </div>
            <h5 class="white--text mr-5">
                {{ item.title }} {{ item.amount }}
                <span v-if="index === 0">تومان</span>
            </h5>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'DashboardAccountDetail',

    data() {
        return {
            cardItem: [
                {
                    title: 'کیف پول',
                    icon: 'mdi-wallet-outline',
                    amount: 0
                },
                {
                    title: 'تعداد سفارش',
                    icon: 'mdi-cart-arrow-down',
                    amount: 0
                },
                {
                    title: 'تعداد دیدگاه',
                    icon: 'mdi-comment-text-outline',
                    amount: 0
                }
            ],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.user_info {
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
    &-single {
        flex: 0 0 31.33%;
        max-width: 31.33%;
        @media screen and (max-width: 768px) {
            flex: 0 0 100%;
            max-width: 100%;
        }
        div.icon_wrap {
            position: relative;
            &::after {
                content: "";
                height: 51px;
                float: right;
                width: 20px;
                box-shadow: 0.5rem 0 0.9rem -0.5rem rgb(0 0 0 / 70%);
                position: absolute;
                left: -32px;
                top: -15px;
                opacity: 1;
            }
        }
        &:nth-child(1) {
            background: linear-gradient(135deg, #28ca5d 0, #25a397 100%);
        }
        &:nth-child(2) {
            background: linear-gradient(135deg, #d55ca2 0, #9f61dc 100%);
        }
        &:nth-child(3) {
            background: linear-gradient(135deg, #1de2df 0, #1e6be8 100%);
        }
    }
}
</style>