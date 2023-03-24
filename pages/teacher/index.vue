<template>
    <div>
        <TeachersList :teachers-list="teachers" :loading="loading" class="mt-10" />
    </div>
</template>

<script>
import TeachersList from "@/components/page/Teacher/TeachersList";
export default {
    name: 'TeachersIndex',
    components: { TeachersList },
    async asyncData({ $axios }) {
        let teachers
        let loading = false
        loading = true
        try {
            const { data } = await $axios.get('/teachers')
            teachers = data
        }
        catch (err) {
            console.log(err)
        }
        loading = false
        return {
            teachers,
            loading
        }

    },

    data() {
        return {
            teachers: [],
            loading: false
        };
    },
};
</script>

<style lang="scss" scoped>
</style>