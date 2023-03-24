<template>
  <div class="full-height" style="background-color: #e0e0e0">
    <v-row justify="center" align="center" class="full-height">
      <v-col cols="12" md="6" sm="8">
        <v-parallax
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          class="pa-8 full-height rounded-lg"
        >
          <form class="mt-6">
            <v-text-field
              v-model="registerForm.firstName"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="nameErrors"
              label="نام"
              solo
              color="black"
              :append-icon="'mdi-account'"
              @input="$v.registerForm.firstName.$touch()"
              @blur="$v.registerForm.firstName.$touch()"
            >
            </v-text-field>
            <v-text-field
              v-model="registerForm.lastName"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="familyErrors"
              :append-icon="'mdi-card-account-details-outline'"
              label="نام خانوادگی"
              solo
              color="black"
              @input="$v.registerForm.lastName.$touch()"
              @blur="$v.registerForm.lastName.$touch()"
            >
            </v-text-field>
            <v-text-field
              v-model="registerForm.mobile"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="mobileErrors"
              :append-icon="'mdi-cellphone'"
              label="موبایل"
              solo
              color="black"
              @input="$v.registerForm.mobile.$touch()"
              @blur="$v.registerForm.mobile.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="registerForm.email"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="emailErrors"
              :append-icon="'mdi-email'"
              label="ایمیل"
              color="black"
              solo
              @input="$v.registerForm.email.$touch()"
              @blur="$v.registerForm.email.$touch()"
            >
            </v-text-field>
            <h5 class="pb-2">
              لطفا از حروف a-z,A-Z,0-9 استفاده نمایید - حداقل 6 کاراکتر
            </h5>
            <v-text-field
              v-model="registerForm.password"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="passwordErrors"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              label="گذرواژه"
              solo
              color="black"
              @click:append="showPassword = !showPassword"
              @input="$v.registerForm.password.$touch()"
              @blur="$v.registerForm.password.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="registerForm.rePassword"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="rePasswordErrors"
              :append-icon="showrePassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showrePassword ? 'text' : 'password'"
              label="تکرارگذرواژه"
              color="black"
              solo
              @click:append="showrePassword = !showrePassword"
              @input="$v.registerForm.rePassword.$touch()"
              @blur="$v.registerForm.rePassword.$touch()"
            >
            </v-text-field>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                color="#ffc107"
                class="rounded-pill px-3 white--text"
                @click="clear()"
                >پاک کردن فرم
              </v-btn>
              <v-btn
                color="#ffc107"
                class="rounded-pill px-3 white--text"
                @click="submit()"
                >عضویت</v-btn
              >
            </v-card-actions>
          </form>
        </v-parallax>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'SignupIndex',
  mixins: [validationMixin],
  layout: 'login',
  validations: {
    registerForm: {
      firstName: { required },
      lastName: { required },
      mobile: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      rePassword: { required },
    },
  },

  data() {
    return {
      showPassword: false,
      showrePassword: false,
      registerForm: {
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        rePassword: '',
      },
    }
  },

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.registerForm.firstName.$dirty) return errors
      !this.$v.registerForm.firstName.required &&
        errors.push('فیلد نام الزامی است')
      return errors
    },
    familyErrors() {
      const errors = []
      if (!this.$v.registerForm.lastName.$dirty) return errors
      !this.$v.registerForm.lastName.required &&
        errors.push('فیلد نام خانوادگی الزامی است')
      return errors
    },
    mobileErrors() {
      const errors = []
      const pattern = /9\d{9}$/ || /09\d{9}$/
      if (!this.$v.registerForm.mobile.$dirty) return errors
      !this.$v.registerForm.mobile.required &&
        errors.push('فیلد موبایل الزامی است')
      this.registerForm.mobile &&
        !pattern.test(this.registerForm.mobile) &&
        errors.push(' فیلد موبایل نامعتبر است')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.registerForm.email.$dirty) return errors
      !this.$v.registerForm.email.email && errors.push('ایمیل معتبر نیست')
      !this.$v.registerForm.email.required &&
        errors.push('فیلد ایمیل الزامی است')
      return errors
    },
    passwordErrors() {
      const errors = []
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
      if (!this.$v.registerForm.password.$dirty) return errors
      !this.$v.registerForm.password.minLength &&
        errors.push('فیلد گذرواژه باید حداقل 6 کاراکتر باشد')
      !this.$v.registerForm.password.required &&
        errors.push('فیلد گذرواژه الزامی است')
      this.registerForm.password &&
        !pattern.test(this.registerForm.password) &&
        errors.push(' فیلد گذرواژه بایدشاملa-z,A-Z,0-9 باشد')

      return errors
    },
    rePasswordErrors() {
      const errors = []
      if (!this.$v.registerForm.rePassword.$dirty) return errors
      !this.$v.registerForm.rePassword.required &&
        errors.push('فیلد تکرارگذرواژه الزامی است')
      this.registerForm.rePassword.length &&
        this.registerForm.password !== this.registerForm.rePassword &&
        errors.push('مقدارواردشده با گذرواژه یکسان نیست')
      return errors
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (
        !this.nameErrors.length &&
        !this.familyErrors.length &&
        !this.mobileErrors.length &&
        !this.emailErrors.length &&
        !this.passwordErrors.length &&
        !this.rePasswordErrors.length
      ) {
        this.$store.dispatch('auth/register', this.registerForm)
      }
    },

    clear() {
      this.$v.$reset()
      this.registerForm.firstName = ''
      this.registerForm.lastName = ''
      this.registerForm.mobile = ''
      this.registerForm.email = ''
      this.registerForm.password = ''
      this.registerForm.rePassword = ''
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-input__slot {
    @include applyShadow;
  }
}
</style>
