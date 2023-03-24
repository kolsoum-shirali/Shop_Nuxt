<template>
    <v-app>
        <Header />
        <CategoryHead />
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import CategoryHead from '@/components/page/Category/CategoryHead';
export default {
    name: 'CategoryLayout',
    components: {
        Header, Footer, CategoryHead
    },
    data() {
        return {

        };
    },
};
</script>

<style lang="scss" scoped>
</style>