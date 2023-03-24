<template>
  <v-card flat class="pa-5">
    <div>
      <h5>عکس پروفایل</h5>
      <p class="custom-font-13 mt-2">
        تصویر می بایست به صورت مربع و در سایز پیشنهادی 100 در 100 پیکسل
      </p>
      <div class="d-flex">
        <v-file-input
          v-model="chosenFile"
          accept="image/*"
          placeholder="افزودن تصویر"
          class="ml-5 custom-font-13 rounded-lg"
          flat
          solo
          background-color="grey lighten-2"
          dense
        ></v-file-input>
        <v-btn
          elevation="0"
          dark
          color="#8fae1b"
          class="custom-font-11"
          @click="saveAvatar"
          >ذخیره تصویر</v-btn
        >
      </div>
      <div
        class="d-flex justify-center box-image pa-2"
        :class="[imgUrl ? 'extend_curser' : '']"
      >
        <v-img
          v-if="imgUrl"
          :src="imgUrl"
          width="120"
          height="120"
          contain
          @click="dialog = true"
        ></v-img>
        <span v-else class="my-4 custom-font-13">{{ paragraphPicture }}</span>
      </div>
      <v-dialog v-model="dialog" overlay-opacity=".9" width="23%" height="23%">
        <img
          class="image-dimention"
          :src="imgUrl"
          :alt="imgUrl"
          @error="setAltImg"
        />
      </v-dialog>
      <v-form class="mt-7 box">
        <v-text-field
          v-model="firstName"
          :append-icon="'mdi-account'"
          label="نام"
          flat
          color="black"
          solo
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :append-icon="'mdi-card-account-details-outline'"
          label="نام خانوادگی"
          color="black"
          solo
          flat
        ></v-text-field>
        <div class="d-flex justify-center">
          <v-btn
          color="#8fae1b"
          elevation="0"
          class="white--text custom-font-11 "         
        >
          ذخیره تغییرات
        </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'AccountDetailIndex',
  layout: 'profile',
  data() {
    return {
      dialog: false,
      chosenFile: null,
      imgUrl: '',
      paragraphPicture: 'برای بارگذاری عکس افزودن تصویر را انتخاب کنید',
        firstName: '',
        lastName: '',
    }
  },
  watch: {
    chosenFile(newVal) {
      this.readURL()
    },
  },
  mounted() {},

  methods: {
    readURL() {
      if (!this.chosenFile) {
        this.imgUrl = ''
        this.paragraphPicture = 'فایلی انتخاب نشده است'
      } else {
        const reader = new FileReader()
        reader.readAsDataURL(this.chosenFile)
        reader.onload = () => {
          this.imgUrl = reader.result
        }
      }
    },
    async saveAvatar() {
      if (this.chosenFile !== null) {
        const formData = new FormData()
        formData.append('image', this.chosenFile)
        try {
          await this.$axios.post('account/user/avatar', formData)
          this.$toast.success('تصویر با موفقیت تغییر یافت', {
            position: 'bottom-left',
          })
        } catch (err) {
          console.error(err)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  .extend_curser {
    &:hover {
      background-color: #e4e4e469;
      border: 2px dashed white;
      cursor: pointer;
    }
  }
  @include applyShadow;
  .box-image {
    border: 2px dashed lightgray;
  }
  ::v-deep {
    .v-input__slot {
      @include applyShadow;
    }
  }
}
</style>
