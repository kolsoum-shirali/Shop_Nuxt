<template>
    <v-dialog
        v-model="addressdialog"
        width="50%"
        @click:outside="$store.dispatch('address/setAddressDialog', false)"
    >
        <v-card class="flat fill_info">
            <v-card-title class="custom-font-13 grey lighten-2 d-flex justify-space-between">
                {{ dialogCaption }}
                <v-icon dark @click="$store.dispatch('address/setAddressDialog', false)">mdi-close</v-icon>
            </v-card-title>
            <form v-if="!showMap" class="pa-5">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="fullName"
                            :error-messages="fullNameErrors"
                            :append-icon="'mdi-account'"
                            label="نام ونام خانوادگی"
                            required
                            color="black"
                            @input="$v.fullName.$touch()"
                            @blur="$v.fullName.$touch()"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="mobile"
                            :error-messages="mobileErrors"
                            :append-icon="'mdi-cellphone'"
                            label="موبایل"
                            required
                            color="black"
                            @input="$v.mobile.$touch()"
                            @blur="$v.mobile.$touch()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-autocomplete
                            v-model="province"
                            :error-messages="provinceErrors"
                            class="custom-font-13"
                            :items="provinces"
                            label="استان"
                            color="black"
                            @click="cityLoading = true"
                            @change="getCities()"
                            @input="$v.province.$touch()"
                            @blur="$v.province.$touch()"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-autocomplete
                            v-model="city"
                            :loading="cityLoading"
                            :error-messages="cityErrors"
                            :items="cities"
                            class="custom-font-13"
                            label="شهر"
                            color="black"
                            @change="selectedCity()"
                            @input="$v.city.$touch()"
                            @blur="$v.city.$touch()"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="phone"
                            :error-messages="phoneErrors"
                            append-icon="mdi-phone-classic"
                            label="تلفن ثابت"
                            required
                            color="black"
                            :suffix="province ? `0${choisedProvince.tell_prefix}` : ''"
                            @input="$v.phone.$touch()"
                            @blur="$v.phone.$touch()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="postalCode"
                            :error-messages="postalCodeErrors"
                            :append-icon="'mdi-map'"
                            label=" کدپستی"
                            required
                            color="black"
                            @input="$v.postalCode.$touch()"
                            @blur="$v.postalCode.$touch()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            v-model="address"
                            :error-messages="addressErrors"
                            :append-icon="'mdi-map'"
                            label=" آدرس پستی"
                            required
                            color="black"
                            @input="$v.address.$touch()"
                            @blur="$v.address.$touch()"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn
                    :disabled="valid"
                    color="#424242"
                    class="white--text my-3 custom-font-11"
                    @click="showMap = true"
                >{{ dialogCaption }}</v-btn>
            </form>
            <div  v-else >
                <UserLocation :map-value='location'/>
                <v-btn
                    color="#424242"
                    class="white--text my-3 custom-font-11"
                    @click="submit"
                >ثبت</v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>
<script>
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import UserLocation from '@/components/page/Profile/UserAddress/UserLocation'
export default {
    name: 'AddAddress',
    components: {
        UserLocation
    },
    mixins: [validationMixin],


    validations: {
        fullName: { required },
        mobile: { required },
        phone: { required, maxLength: maxLength(8), minLength: minLength(8) },
        postalCode: {
            required,
            maxLength: maxLength(10),
            minLength: minLength(10),
        },
        address: { required },
        province: { required },
        city: { required },
    },

    props: {
        dialogCaption: {
            type: String,
            default: 'ایجادکردن آدرس جدید'
        }
    },
    data() {
        return {
            provinces: [],
            cityLoading: false,
            provincesInfo: [],
            choisedProvince: {},
            citiesInfo: [],
            cities: [],
            selectedProvince: {},
            location: {
                latitude: '',
                longitude: ''
            },
            showMap: false
        }
    },
    async fetch() {
        try {
            const { data } = await this.$axios.get('/regions/province')
            this.provincesInfo = data
            this.provinces = data.map(item => {
                return item.name
            })

        } catch (err) {
            console.log(err)
        }
    },
    computed: {

        ...mapState({ addressdialog: state => state.address.addressdialog, id: state => state.address.personInfo.id }),
        fullName: {
            set(value) {
                this.$store.dispatch('address/setPersonInfoFullName', value)
            },
            get() {
                return this.$store.state.address.personInfo.fullName
            },
        },
        mobile: {
            set(value) {
                this.$store.dispatch('address/setPersonInfoMobile', value)
            },
            get() {
                return this.$store.state.address.personInfo.mobile
            },
        },
        phone: {
            set(value) {
                this.$store.dispatch('address/setPersonInfoPone', value)
            },
            get() {
                return this.$store.state.address.personInfo.phone
            },
        },
        postalCode: {
            set(value) {
                this.$store.dispatch('address/setPersonInfoPostalCode', value)
            },
            get() {
                return this.$store.state.address.personInfo.postalCode
            },
        },
        address: {
            set(value) {
                this.$store.dispatch('address/setPersonInfoAddress', value)
            },
            get() {
                return this.$store.state.address.personInfo.address
            },
        },
        province: {
            set(value) {
                this.$store.dispatch('address/setPersonInfoProvince', value)
            },
            get() {
                return this.$store.state.address.personInfo.province
            },
        },
        city: {
            set(value) {
                this.$store.dispatch('address/setPersonInfoCity', value)
            },
            get() {
                return this.$store.state.address.personInfo.city
            },
        },
        fullNameErrors() {
            const errors = []
            if (!this.$v.fullName.$dirty) return errors
            !this.$v.fullName.required &&
                errors.push('فیلد نام و نام خانوادگی الزامی است')
            return errors
        },

        mobileErrors() {
            const errors = []
            const pattern = /9\d{9}$/ || /09\d{9}$/
            if (!this.$v.mobile.$dirty) return errors
            !this.$v.mobile.required &&
                errors.push('فیلد موبایل الزامی است')
            this.mobile &&
                !pattern.test(this.mobile) &&
                errors.push(' فیلد موبایل نامعتبر است')
            return errors
        },
        phoneErrors() {
            const pattern = /\d$/
            const errors = []
            if (!this.$v.phone.$dirty) return errors
            !this.$v.phone.required &&
                errors.push('فیلد تلفن ثابت الزامی است')
            !this.$v.phone.maxLength &&
                errors.push('حداکثر طول این فیلد 8 رقم می باشد')
            !this.$v.phone.minLength &&
                errors.push('حداقل طول این فیلد 8 رقم می باشد')
            this.phone &&
                !pattern.test(this.phone) &&
                errors.push(' فیلد تلفن ثابت نامعتبر است')
            return errors
        },
        postalCodeErrors() {
            const pattern = /\d$/
            const errors = []
            if (!this.$v.postalCode.$dirty) return errors
            !this.$v.postalCode.required &&
                errors.push('فیلد کد پستی الزامی است')
            !this.$v.postalCode.maxLength &&
                errors.push('حداکثر طول این فیلد 10 رقم می باشد')
            !this.$v.postalCode.minLength &&
                errors.push('حداقل طول این فیلد 10 رقم می باشد')
            this.postalCode &&
                !pattern.test(this.postalCode) &&
                errors.push(' فیلد کدپستی نامعتبر است')
            return errors
        },
        addressErrors() {
            const errors = []
            if (!this.$v.address.$dirty) return errors
            !this.$v.address.required &&
                errors.push('فیلد آدرس پستی الزامی است')
            return errors
        },
        provinceErrors() {
            const errors = []
            if (!this.$v.province.$dirty) return errors
            !this.$v.province.required &&
                errors.push('فیلد استان الزامی است')
            return errors
        },
        cityErrors() {
            const errors = []
            if (!this.$v.city.$dirty) return errors
            !this.$v.city.required && errors.push('فیلد شهر الزامی است')
            return errors
        },
        isEmpty() {
            let isEmpty = true
            if (this.fullName && this.mobile && this.phone && this.postalCode && this.address && this.province && this.city) {
                isEmpty = false
            }
            return isEmpty
        },
        valid() {
            let valid
            if (!this.fullNameErrors.length && !this.mobileErrors.length && !this.phoneErrors.length && !this.postalCodeErrors.length && !this.addressErrors.length && !this.provinceErrors.length && !this.cityErrors.length && !this.isEmpty) {
                valid = false
            } else {
                valid = true
            }
            return valid
        }
    },
    watch: {
        cities(newVal) {
            this.cityLoading = false
        },
    },
    methods: {
        submit() {
            this.$v.$touch()
            if (!this.valid) {
                this.$store.dispatch('address/addAddress', {
                    fullName: this.fullName,
                    mobile: this.mobile,
                    phone: this.phone,
                    postalCode: this.postalCode,
                    province: this.province,
                    city: this.city,
                    address: this.address,
                    id: this.id,
                    location: {
                        latitude: this.location.latitude,
                        longitude: this.location.longitude
                    }
                })
                this.showMap = false
            }

        },
        async getCities() {
            this.choisedProvince = this.provincesInfo.find(item => {
                return item.name === this.province
            })
            const { data } = await this.$axios.get('/regions/cities', { query: { province_id: this.choisedProvince.id } })
            this.citiesInfo = data
            this.cities = data.map(item => {
                return item.name
            })
        },
        selectedCity() {
            const choisedCity = this.citiesInfo.find(item => {
                return item.name === this.city
            })
            this.location.latitude = choisedCity.latitude
            this.location.longitude = choisedCity.longitude
        }
    },
}
</script>
<style scoped lang="scss">
.fill_info {
    @include applyShadow;
}
</style>
