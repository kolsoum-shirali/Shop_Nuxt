<template>
    <div>
        <v-card class="pa-5 flat fill_info">
            <form>
                <h4 class="px-0">جزئیات صورت حساب</h4>
                <v-text-field
                    v-model="personInfo.firstName"
                    :error-messages="nameErrors"
                    :append-icon="'mdi-account'"
                    label="نام"
                    required
                    color="black"
                    @input="$v.personInfo.firstName.$touch()"
                    @blur="$v.personInfo.firstName.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="personInfo.lastName"
                    :error-messages="familyErrors"
                    :append-icon="'mdi-card-account-details-outline'"
                    label="نام خانوادگی"
                    required
                    color="black"
                    @input="$v.personInfo.lastName.$touch()"
                    @blur="$v.personInfo.lastName.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="personInfo.email"
                    :error-messages="emailErrors"
                    :append-icon="'mdi-email'"
                    label="ایمیل"
                    required
                    color="black"
                    @input="$v.personInfo.email.$touch()"
                    @blur="$v.personInfo.email.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="personInfo.mobile"
                    :error-messages="mobileErrors"
                    :append-icon="'mdi-cellphone'"
                    label="موبایل"
                    required
                    color="black"
                    @input="$v.personInfo.mobile.$touch()"
                    @blur="$v.personInfo.mobile.$touch()"
                ></v-text-field>            
                <v-text-field
                    v-model="personInfo.password"
                    :error-messages="passwordErrors"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    label="گذرواژه"
                    required
                    color="black"
                    @click:append="showPassword = !showPassword"
                    @input="$v.personInfo.password.$touch()"
                    @blur="$v.personInfo.password.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="personInfo.rePassword"
                    :error-messages="rePasswordErrors"
                    :append-icon="showrePassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showrePassword ? 'text' : 'password'"
                    label="تکرارگذرواژه"
                    required
                    color="black"
                    @click:append="showrePassword = !showrePassword"
                    @input="$v.personInfo.rePassword.$touch()"
                    @blur="$v.personInfo.rePassword.$touch()"
                ></v-text-field>
                <div>
                    <h4 class="px-0">اطلاعات بیشتر</h4>
                    <h5 class="mt-3 text-grey-darken">توضیحات سفارش (اختیاری)</h5>
                </div>
                <v-col cols="12" class="px-0">
                    <v-textarea
                        v-model="personInfo.orderDescription"
                        class="rounded"
                        placeholder="یادداشت‌ها درباره سفارش شما، برای مثال نکات مهم درباره نحوه تحویل سفارش"
                        solo
                    ></v-textarea>
                </v-col>
            </form>
        </v-card>
        <v-row class="mt-5">
            <v-col cols="12">
                <v-card class="rounded pa-3 mx-0">
                    <h5>پرداخت هنگام دریافت</h5>
                    <p
                        class="grey lighten-3 rounded-lg pa-2 custom-font-11 mt-3"
                    >پرداخت نقدی پس از تحویل</p>
                    <v-divider></v-divider>
                    <p
                        class="custom-font-11 mt-3"
                    >اطلاعات شخصی شما برای پردازش سفارش شما و پشتیبانی از تجربه شما در این وبسایت و برای اهداف دیگری که در سیاست حفظ حریم خصوصی توضیح داده شده است استفاده می‌شود.</p>
                    <v-btn
                        :disabled="valid"
                        color="#424242"
                        class="rounded-pill white--text my-3 custom-font-11"
                        @click="submit"
                    >ثبت سفارش</v-btn>
                    <v-btn
                        color="#424242"
                        class="rounded-pill white--text my-3 custom-font-11"
                        @click="clear"
                    >پاک کردن فرم</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'PaymentDetail',
    mixins: [validationMixin],
    validations: {
        personInfo: {
            firstName: { required },
            lastName: { required },
            email: { required, email },
            mobile: { required },
            password: { required, minLength: minLength(6) },
            rePassword: { required },
        }
    },

    data: () => ({
        showPassword: false,
        showrePassword: false,
        personInfo: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: '',
            rePassword: '',
            orderDescription: '',
        }

    }),

    computed: {

        nameErrors() {
            const errors = []
            if (!this.$v.personInfo.firstName.$dirty) return errors
            !this.$v.personInfo.firstName.required && errors.push('فیلد نام الزامی است')
            return errors
        },
        familyErrors() {
            const errors = []
            if (!this.$v.personInfo.lastName.$dirty) return errors
            !this.$v.personInfo.lastName.required && errors.push('فیلد نام خانوادگی الزامی است')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.personInfo.email.$dirty) return errors
            !this.$v.personInfo.email.email && errors.push('ایمیل معتبر نیست')
            !this.$v.personInfo.email.required && errors.push('فیلد ایمیل الزامی است')
            return errors
        },
        mobileErrors() {
            const errors = []
            const pattern = /9\d{9}$/ || /09\d{9}$/
            if (!this.$v.personInfo.mobile.$dirty) return errors
            !this.$v.personInfo.mobile.required && errors.push('فیلد موبایل الزامی است')
            this.personInfo.mobile && !pattern.test(this.personInfo.mobile) && errors.push(' فیلد موبایل نامعتبر است')
            return errors
        },
        passwordErrors() {
            const errors = []
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
            if (!this.$v.personInfo.password.$dirty) return errors
            !this.$v.personInfo.password.minLength && errors.push('فیلد گذرواژه باید حداقل 6 کاراکتر باشد')
            !this.$v.personInfo.password.required && errors.push('فیلد گذرواژه الزامی است')
            this.personInfo.password && !pattern.test(this.personInfo.password) && errors.push(' فیلد گذرواژه بایدشاملa-z,A-Z,0-9 باشد')
            return errors
        },
        rePasswordErrors() {
            const errors = []
            if (!this.$v.personInfo.rePassword.$dirty) return errors
            !this.$v.personInfo.rePassword.required && errors.push('فیلد تکرارگذرواژه الزامی است')
            this.personInfo.rePassword.length && this.personInfo.password !== this.personInfo.rePassword && errors.push('مقدارواردشده با گذرواژه یکسان نیست')
            return errors
        },
        isEmpty() {
            let isEmpty = true
            if (this.personInfo.firstName && this.personInfo.lastName && this.personInfo.email && this.personInfo.mobile && this.personInfo.password && this.personInfo.rePassword) {
                isEmpty = false
            }
            return isEmpty
        },
        valid() {
            let valid
            if (!this.nameErrors.length && !this.familyErrors.length && !this.emailErrors.length && !this.mobileErrors.length && !this.passwordErrors.length && !this.rePasswordErrors.length && !this.isEmpty) {
                valid = false
            } else {
                valid = true
            }
            return valid
        }
    },

    methods: {
        submit() {
            this.$v.$touch()
            if (!this.nameErrors.length && !this.familyErrors.length && !this.emailErrors.length && !this.mobileErrors.length && !this.passwordErrors.length && !this.rePasswordErrors.length) {
                this.$emit('orderContinue', false)
            }

        },
        clear() {
            this.$v.$reset()
            this.personInfo.firstName = ''
            this.personInfo.lastName = ''
            this.personInfo.email = ''
            this.personInfo.mobile = ''
            this.personInfo.password = ''
            this.personInfo.rePassword = ''
            this.personInfo.orderDescription = ''
        },
    },
}
</script>
<style scoped lang="scss">
.fill_info {
    @include applyShadow;
}
</style>

