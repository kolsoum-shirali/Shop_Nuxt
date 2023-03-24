<template>
    <v-card flat class="wrap solid-border rounded-lg">
        <v-card-actions class="wrap__actions d-flex justify-space-around">
            <div
                v-for="(action, index) in actions"
                :key="index"
                class="wrap__actions_single center-align"
            >
                <v-icon size="30" color="#ff9800">{{ action.icon }}</v-icon>
                <v-btn
                    small
                    depressed
                    color="white"
                    class="custom-font-13"
                    :to="action.path"
                >{{ action.title }}</v-btn>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'ProductService',

    data() {
        return {
            actions: [
                { title: 'بازگشت وجه', icon: 'mdi-hand-coin-outline', path: '' },
                { title: 'تضمین کیفیت', icon: 'mdi-check-decagram-outline', path: '' },
                { title: 'دانلودآنی', icon: 'mdi-download', path: '' },
            ],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.wrap {
    @include applyShadow;
    &__actions {
        &_single {
            .v-btn::before {
                background-color: white;
            }
        }
    }
}
</style>