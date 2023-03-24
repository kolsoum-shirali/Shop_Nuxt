<template>
  <div class="review_wrap">
    <div class="review_rules custom-font-15 dot-border rounded-lg pa-5">
      <h5>لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:</h5>
      <div class="d-flex align-center justify-space-between">
        <p class="custom-font-13">
          فارسی بنویسید و از کیبورد فارسی استفاده کنید. بهتر است از فضای خالی
          (Space) بیش‌از‌حدِ معمول، شکلک یا ایموجی استفاده نکنید و از کشیدن حروف
          یا کلمات با صفحه‌کلید بپرهیزید.
        </p>
        <v-icon color="grey lighten-3" size="70">mdi-lead-pencil</v-icon>
      </div>
      <p class="custom-font-13">
        نظرات خود را براساس تجربه و استفاده‌ی عملی و با دقت به نکات فنی ارسال
        کنید؛ بدون تعصب به محصول خاص، مزایا و معایب را بازگو کنید و بهتر است از
        ارسال نظرات چندکلمه‌‌ای خودداری کنید.
      </p>
    </div>
    <div class="review_form pa-1 mt-3">
      <h5>دیدگاه خود را بنویسید</h5>
      <Review />
    </div>
  </div>
</template>

<script>
import Review from '@/components/common/Review/Review'
export default {
  name: 'ReviewForm',
  components: { Review },
  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
</style>