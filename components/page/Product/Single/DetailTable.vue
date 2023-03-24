<template>
    <v-simple-table height="250px" class="product_detail rounded-lg">
        <template #default>
            <tbody>
                <tr v-for="info in bookDetail" :key="info.title" class="text-grey-darken">
                    <td>
                        <v-icon color="#BDBDBD">{{ info.icon }}</v-icon>
                        {{ info.title }}
                    </td>
                    <td>{{ info.value }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    name: 'DetailTable',
    props: {
        bookDetail: {
            type: Array,
            default: () => []
        }
    }


}
</script>

<style lang="scss" scoped>
.product_detail {
    @include applyShadow;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 40px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0,
            #fff 78%,
            #fff 100%
        );
    }
}
</style>
