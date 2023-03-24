<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="3" sm="5" class="pt-0">
                        <ProfileSidebar />
                        <InstagramWidget class="mt-3 mb-10" />
                    </v-col>
                    <v-col cols="12" md="9" sm="7">
                        <ProfileHead/>
                        <Nuxt/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <div class="grey darken-4">
            <FooterDown />
        </div>
    </v-app>
</template>

<script>
import ProfileSidebar from "@/components/page/Profile/ProfileSidebar";
import InstagramWidget from "@/components/page/Belog/Single/InstagramWidget";
import ProfileHead from '@/components/page/Profile/ProfileHead'
import FooterDown from "@/components/layout/footer/FooterDown";
export default {
    name: 'ProfileLayout',
    components: {
        ProfileSidebar,
        FooterDown,
        InstagramWidget,
        ProfileHead
    },
};
</script>

<style lang="scss" scoped>
</style>