<template>
    <div>
        <TeacherInfo :figure-info="figureInfo" :loading='loading'/>
    </div>
</template>

<script>
import TeacherInfo from "@/components/page/Teacher/Single/TeacherInfo";
export default {
    name: 'TeacherIndex',
    components: {
        TeacherInfo
    },

    async asyncData({ $axios, route }) {
        let figureInfo
        let loading = false
        loading = true
        try {
            const { data } = await $axios.get('/teachers/single', { params: { id: route.params.id } })
            figureInfo = data
        }
        catch (err) {
            console.log(err)
        }
        loading = false

        return {
            figureInfo,
            loading
        }

    },
    data() {
        return {
            figureInfo: {},
            loading:false
        };
    },
};
</script>

<style lang="scss" scoped>
</style>