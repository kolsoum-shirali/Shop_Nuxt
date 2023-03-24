<template>
    <v-card flat class="rounded-lg pa-0">
        <audio class="full-width" controls>
            <source :src="audioLink" type="audio/mp3" />
        </audio>
    </v-card>
</template>

<script>
export default {
    name: 'ProductAudio',
    props: {
        audioLink: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss" scoped>
</style>