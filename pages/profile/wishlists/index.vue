<template>
    <div>
        <Alert :alert-info='alertInfo'/>
    </div>
</template>

<script>
import Alert from '@/components/common/Alert/Alert'
export default {
    name: 'WishlistsIndex',
    components: { Alert },
    layout:'profile',
    data() {
        return {
            alertInfo: {
                showReviewBtn:false,
                color:'#EEEEEE',
                caption: ' لیست علاقمندی ها خالی می باشد'
            }

        };
    },


};
</script>

<style lang="scss" scoped>
</style>