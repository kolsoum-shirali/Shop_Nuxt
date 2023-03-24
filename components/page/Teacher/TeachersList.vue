<template>
    <v-row v-if="!loading" justify="space-around" align="center">
        <div v-for="(teacher, index) in teachersList" :key="index" class="col-12 col-md-3 col-sm-4">
            <TeacherCard :teacher="teacher" />
        </div>
    </v-row>
    <v-row v-else justify="space-around" align="center">
        <v-skeleton-loader
            v-for="(item, index) in 12"
            :key="index"
            max-width="300"
            type="card"
            class="col-12 col-md-3 col-sm-4"
        ></v-skeleton-loader>
    </v-row>
</template>

<script>
import TeacherCard from "@/components/page/Teacher/TeacherCard/TeacherCard";
export default {
    name: 'TeachersList',
    components: {
        TeacherCard
    },
    props: {
        teachersList: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
</style>