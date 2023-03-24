<template>
    <div>
        <Alert :alert-info="alertInfo" />
    </div>
</template>

<script>
import Alert from '@/components/common/Alert/Alert'
export default {
    name: 'DownloadIndex',

    components: { Alert },
    layout: 'profile',
    data() {
        return {
            alertInfo: {
                showReviewBtn: true,
                icon: 'mdi-check-circle',
                caption: 'هیچ دانلودی دردسترس نیست'
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