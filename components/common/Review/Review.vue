<template>
  <v-form class="form_review">
    <v-row>
      <v-col cols="12" md="6" class="pa-1">
        <h5 class="col-6 col-sm-12 text-grey-darken">نام*</h5>

        <v-text-field
          class="solid-border rounded-lg"
          hide-details
          flat
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-1">
        <h5 class="col-6 col-sm-12 text-grey-darken">ایمیل*</h5>

        <v-text-field
          class="solid-border rounded-lg"
          hide-details
          flat
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pa-1">
        <h5 class="text-grey-darken my-2">دیدگاه شما *</h5>
        <v-textarea
          flat
          solo
          name="input-7-4"
          class="rounded-t-lg solid-border"
          hide-details
        ></v-textarea>
      </v-col>
    </v-row>
    <v-btn depressed color="grey darken-1" class="rounded-lg my-5 submit_btn">
      ثبت
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'ShopReview',

  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.form_review {
  .submit_btn {
    color: white;

    &:hover {
      @include applyTransition;
      background-color: #ea1d21 !important;
    }
  }
}
</style>