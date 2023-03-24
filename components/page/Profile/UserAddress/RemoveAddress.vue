<template>
    <div class="text-center">
        <v-dialog
            v-model="deletDialog"
            class="custom-radius"
            width="30%"
            @click:outside="$store.dispatch('address/removeDialogAddress',false)"
        >
            <v-card>
                <v-card-title class="custom-font-13 grey lighten-2 d-flex justify-space-between">
                    حذف آدرس
                    <v-icon dark  @click:outside="$store.dispatch('address/SET_REMOVE_DIALOG',false)">mdi-close</v-icon>
                </v-card-title>

                <v-card-text>
                    <div>
                        <v-row>
                            <h4 class="mt-5 font-weight-bold">آیا از حذف آدرس خود مطمئن هستید؟</h4>
                        </v-row>

                        <div class="d-flex justify-space-around mt-3">
                            <v-btn
                                elevation="0"
                                class="custom-font-13 mt-4 mr-8"
                                color="success"
                                type="submit"
                                @click="$emit('delet')"
                            >بله</v-btn>
                            <v-btn
                                elevation="0"
                                class="custom-font-12 mt-4 mr-8"
                                color="red"
                                type="submit"
                                @click="$store.dispatch('address/setRemoveDialog',false)"
                            >خیر</v-btn>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: 'RemoveDialog',  
    computed: {
        ...mapState({ deletDialog: state => state.address.deletDialog })
    }

}
</script>
