<template>
  <div>
    <v-card class="notify_wrapp rounded-lg pa-5" flat>
      <div class="notify_title">
        <span class="dot_border-bottom pb-2">اطلاعیه های عمومی</span>
      </div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="dash_border-bottom py-3 notify_single"
      >
        <div class="mt-10 d-flex align-center justify-space-between">
          <div>
            <h5>{{ item.title }}</h5>
            <h6 class="text-grey-darken">{{ item.publishedDate }}</h6>
          </div>
          <v-btn
            class="custom-font-10 rounded-pill pa-2 see_detail"
            depressed
            @click="showDetail(index)"
            >مشاهده جزئیات</v-btn
          >
        </div>
        <v-expand-transition>
          <div v-show="item.show">
            <v-card-text class="dash-border rounded-lg mt-5 custom-font-11">
              {{ item.detail }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AnnouncementsIndex',
  layout: 'profile',
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get('/account/notify')
      return {
        items: data,
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
    showDetail(indexValue) {
      this.items.forEach((item, index) => {
        if (index === indexValue) {
          item.show = !item.show
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.notify_wrapp {
  position: relative;
  @include applyShadow;
  .notify_single {
    &:last-child {
      border-bottom: none !important;
    }
  }
  .notify_title {
    &::after {
      content: '\1F514';
      font-family: 'Font Awesome 5 Pro';
      font-weight: 300;
      display: inline-block;
      position: absolute;
      font-size: 40px;
      opacity: 0.15;
      top: 0;
      left: 50px;
      transform: rotate(-32deg);
    }
    &::before {
      content: '\1F514';
      font-family: 'Font Awesome 5 Pro';
      font-weight: 300;
      display: inline-block;
      position: absolute;
      font-size: 40px;
      opacity: 0.15;
      top: 0;
      left: 17px;
      transform: rotate(32deg);
    }
  }
  .see_detail {
    height: 30px;
    &:hover {
      @include applyTransition;
      background-color: #ea1d21 !important;
      color: white;
    }
  }
}
</style>
