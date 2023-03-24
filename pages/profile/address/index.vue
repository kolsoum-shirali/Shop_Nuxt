<template>
    <div>
        <UserAddresses />
    </div>
</template>

<script>
import UserAddresses from "@/components/page/Profile/UserAddress/UserAddresses";
export default {
    name: 'AddressIndex',
    components: {
        UserAddresses
    },
    layout: 'profile',
    async asyncData({ store }) {
      await store.dispatch('address/getAddress')
    },
};
</script>

<style lang="scss" scoped>
</style>