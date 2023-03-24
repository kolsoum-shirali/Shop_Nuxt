<template>
    <div>
        <div>
            <div v-if="!addresses.length">
                <Alert :alert-info="alertInfo" />
                <v-btn
                    elevation="0"
                    class="custom-font-13"
                    color="lime darken-1"
                    dark
                    @click="createAddress()"
                >
                    <v-icon class="ml-1">mdi-plus</v-icon>اضافه کردن آدرس جدید
                </v-btn>
                <AddAddress :dialog-caption="dialogCaption" />
            </div>

            <div v-else>
                <v-btn
                    elevation="0"
                    class="custom-font-13"
                    color="lime darken-1"
                    dark
                    @click="createAddress()"
                >
                    <v-icon class="ml-1">mdi-plus</v-icon>اضافه کردن آدرس جدید
                </v-btn>
                <AddAddress :dialog-caption="dialogCaption" />
                <RemoveAddress @delet="deleteAddress" />
                <v-simple-table class="rounded-lg address_table mt-5">
                    <template #default>
                        <thead>
                            <tr class="border-left">
                                <th>نام</th>
                                <th>مکان</th>
                                <th>آدرس</th>
                                <th>کدپستی</th>
                                <th>شماره موبایل</th>
                                <th>تلفن ثابت</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in addresses" :key="index" class="border-left">
                                <td>{{ item.fullName }}</td>
                                <td>{{ item.province }}-{{ item.city }}</td>
                                <td>{{ item.address }}</td>
                                <td>{{ item.postalCode }}</td>
                                <td>{{ item.mobile }}</td>
                                <td>{{ item.phone }}</td>
                                <td>
                                    <div class="d-flex justify-space-around">
                                        <v-tooltip top>
                                            <template #activator="{ on, attrs }">
                                                <div
                                                    class="extend-cursor"
                                                    @click="editAddress(item)"
                                                >
                                                    <v-icon
                                                        color="lime darken-2"
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >mdi-file-document-edit</v-icon>
                                                </div>
                                            </template>
                                            <span>ویرایش</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template #activator="{ on, attrs }">
                                                <div
                                                    class="extend-cursor"
                                                    @click="openDialog(item)"
                                                >
                                                    <v-icon
                                                        color="red darken-2"
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >mdi-delete-empty</v-icon>
                                                </div>
                                            </template>
                                            <span>حذف</span>
                                        </v-tooltip>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
import Alert from "@/components/common/Alert/Alert"
import AddAddress from "@/components/page/Profile/UserAddress/AddAddress"
import RemoveAddress from "@/components/page/Profile/UserAddress/RemoveAddress"
export default {
    name: 'UserAddresses',
    components: {
        Alert, AddAddress, RemoveAddress
    },

    data() {
        return {
            recordInfo: {},
            dialogCaption: '',
            btnTitle: '',
            alertInfo: {
                showReviewBtn: false,
                icon: 'mdi-map',
                caption: '    هیچ آدرسی هنوز ثبت نشده است'
            },
        }
    },
    computed: {
        ...mapState({ addresses: state => state.address.addresses })
    },
    methods: {
        editAddress(record) {
            this.dialogCaption = ' ویرایش کردن آدرس '
            this.$store.dispatch('address/setPersonInfo', record)
            this.$store.dispatch('address/setAddressDialog', true)
        },
        createAddress() {
            this.dialogCaption = 'ایجادکردن آدرس جدید'
            this.$store.dispatch('address/setAddressDialog', true)
            this.$store.dispatch('address/setPersonInfo', {
                fullName: '',
                mobile: '',
                phone: '',
                postalCode: '',
                province: '',
                city: '',
                address: '',
                id: 0,

            })

        },
        async openDialog(record) {
            await this.$store.dispatch('address/setRemoveDialog', true)
            this.recordInfo = record
        },
        async deleteAddress() {
            await this.$store.dispatch('address/removeAddress', this.recordInfo)
        },
    }


}
</script>
<style lang="scss" scoped>
.address_table {
    @include applyShadow;
}
.border-left {
    th,
    td {
        border-left: 1px solid #eeeff1;
        font-size: 11px !important;
        color: #444444 !important;
    }
}
</style>
