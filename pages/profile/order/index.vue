<template>
    <div>
        <Alert :alert-info="alertInfo" />
    </div>
</template>

<script>
import Alert from '@/components/common/Alert/Alert'
export default {
    name: 'OrderIndex',
    components: { Alert },
    layout: 'profile',
    data() {
        return {
            alertInfo: {
                icon: 'mdi-check-circle',
                showReviewBtn: true,
                caption: 'هیچ سفارشی هنوز ثبت نشده است.'
            }

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
</style>