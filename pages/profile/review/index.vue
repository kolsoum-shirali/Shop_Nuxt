<template>
    <div>
        <Alert :alert-info='alertInfo'/>
    </div>
</template>

<script>
import Alert from '@/components/common/Alert/Alert'
export default {
    name: 'ReviewIndex',
    components: { Alert },
    layout:'profile',
    data() {
        return {
            alertInfo: {
                showReviewBtn:false,
                caption: 'دیدگاهی درج نشده است'
            }

        };
    },


};
</script>

<style lang="scss" scoped>
</style>