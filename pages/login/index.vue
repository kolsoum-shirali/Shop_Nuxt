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
              v-model="mobile"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="mobileErrors"
              :append-icon="'mdi-cellphone'"
              label="موبایل"
              required
              solo
              color="black"
              @input="$v.mobile.$touch()"
              @blur="$v.mobile.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              background-color="rgba(255, 255, 255, 0.3)"
              :error-messages="passwordErrors"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              label="گذرواژه"
              required
              solo
              color="black"
              @click:append="showPassword = !showPassword"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            >
            </v-text-field>
            <v-btn
              color="#ffc107"
              class="rounded-pill full-width white--text"
              @click="submit()"
              >ورود</v-btn
            >
          </form>
        </v-parallax>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'LoginIndex',
  mixins: [validationMixin],
  layout: 'login',
  validations: {
    mobile: { required },
    password: { required, minLength: minLength(6) },
  },

  data() {
    return {
      showPassword: false,
      mobile: '',
      password: '',
    }
  },

  computed: {
    mobileErrors() {
      const errors = []
      const pattern = /9\d{9}$/ || /09\d{9}$/
      if (!this.$v.mobile.$dirty) return errors
      !this.$v.mobile.required && errors.push('فیلد موبایل الزامی است')
      this.mobile &&
        !pattern.test(this.mobile) &&
        errors.push(' فیلد موبایل نامعتبر است')
      return errors
    },

    passwordErrors() {
      const errors = []
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push('فیلد گذرواژه باید حداقل 6 کاراکتر باشد')
      !this.$v.password.required && errors.push('فیلد گذرواژه الزامی است')
      this.password &&
        !pattern.test(this.password) &&
        errors.push(' فیلد گذرواژه بایدشاملa-z,A-Z,0-9 باشد')

      return errors
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.mobileErrors.length && !this.passwordErrors.length) {
        this.$store.dispatch('auth/login',{  mobile: this.mobile,
            password: this.password,})
      
      }
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
