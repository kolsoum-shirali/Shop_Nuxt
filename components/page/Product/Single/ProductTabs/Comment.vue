<template>
  <v-card flat class="ma-5 extend-line comments">
    <h5 class="review_title py-2 text-grey-darken custom-font-13">
      دیدگاهتان را با ما درمیان بگذارید
    </h5>
    <v-row  class="my-3 review_box" justify="space-between" align="center">
      <v-card
        v-for="(item, index) in reviewInfo"
        :key="index"
        flat
        :color="item.color"
        class="
          review_box-single
          d-flex
          justify-space-between
          align-center
          solid-border
          rounded-lg
          pa-1
        "
        :class="item.class"
      >
        <h6>{{ item.title }}</h6>
        <v-btn x-small color="#FAFAFA" depressed fab>{{ item.amount }}</v-btn>
      </v-card>
    </v-row>
    <div class="advanced-review">
      <h6 class="avg-rating">
        بر اساس <span>{{ productDetail.avgRating }}</span> فروش
      </h6>

      <div class="rating-histogram">
        <div
          v-for="(histogram, index) in productDetail.ratingHistogram"
          :key="index"
          class="d-flex justify-space-between align-center"
        >
          <div class="d-flex justify-space-between align-center">
            <v-rating
              readonly
              small
              dense
              :value="histogram.rate"
              :length="length"
              color="#ff9800"
              background-color="grey lighten-1"
            ></v-rating>
            <span class="px-2">{{ histogram.amount }}</span>
          </div>
          <v-progress-linear
            height="8"
            color="#BDBDBD"
            rounded
            :value="histogram.value"
          ></v-progress-linear>
        </div>
      </div>
    </div>
    <CommentList :comment-list='productDetail.comments'/>
  </v-card>
</template>

<script>
import CommentList from '@/components/page/Product/Single/ProductTabs/CommentTabDetail/CommentList'
export default {
  name: 'CommentTab',
  components: {
    CommentList,
  },
  props:{
    productDetail:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {
      length: 5,
      reviewInfo: [
        {
          title: 'تعداد دیدگاه : ',
          color: '#F1F8E9',
          class: 'count_review',
        },
        {
          title: 'امتیاز کلی :',
          color: '#E0F7FA',
          class: 'average_rate',
        },
        {
          title: 'پیشنهاد شده توسط :  ',
          color: '#FFEBEE',
          class: 'suggest_review',
        },
      ],
    }
  },
  created(){
    this.reviewInfo.forEach((item,index)=>{
      item.amount = this.productDetail.reviewInfo[index].amount
    })
  }
}
</script>

<style lang="scss" scoped>
.comments {
  .review_title {
    border-bottom: 2px dotted rgba(207, 204, 204, 0.39);
  }
  .review_box {
    &-single {
      flex: 0 0 32.3333333333% !important;
      max-width: 32.3333333333% !important;
      @media screen and (max-width: 600px) {
        flex: 0 0 100% !important;
        max-width: 100% !important;
        margin: 5px 0;
      }
    }
  }
}
</style>