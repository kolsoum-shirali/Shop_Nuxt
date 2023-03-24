<template>
    <v-card class="rounded-lg pa-3 user_alert mt-5" flat>
        <div class="d-flex align-center">
            <v-icon class="ml-2">mdi-alert-circle-outline</v-icon>
            <h5>اطلاعیه</h5>
        </div>
        <p
            class="custom-font-13 mt-10"
        >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
    </v-card>
</template>

<script>
export default {
    name: 'DashboardAlert',

    data() {
        return {

        };
    },
};
</script>

<style lang="scss" scoped>
.user_alert {
    @include applyShadow;
}
</style>