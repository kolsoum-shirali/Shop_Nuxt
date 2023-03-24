<template>
  <div class="comment__list my-10">
    <div v-if="commentList.length">
      <div v-for="(comment, index) in commentList" :key="index" class="comment__list_single">
        <div class="commenter_detail d-lg-flex d-sm-block justify-space-between align-center">
          <div class="comment_authore d-flex justify-space-between align-center">
            <h6 class="my-2">
              <v-icon
                color="black"
                class="rounded-xl pa-1 account_icon solid-border mx-1"
              >mdi-account-outline</v-icon>
              {{ comment.fullName }}
            </h6>

            <h6 class="my-2">
              <span class="rounded-lg grey lighten-3 px-2 py-1 mx-2">درتاریخ</span>
              {{ comment.publishedDate }}
            </h6>
            <v-btn
              v-if="comment.recommend === true || comment.recommend === false"
              :color="comment.recommend ? '#f1f8ff' : '#EF5350'"
              depressed
              class="custom-font-10 mx-2 my-2 d-flex justify-center align-center"
            >
              <v-icon
                class="px-1"
                color="black"
                size="15"
              >{{ comment.recommend ? 'mdi-thumb-up-outline' : 'mdi-thumb-down-outline' }}</v-icon>
              <h4
                class="mt-1"
              >{{ comment.recommend ? 'شرکت دراین دوره راتوصیه می کنم' : 'شرکت دراین دوره راتوصیه نمی کنم' }}</h4>
            </v-btn>
            <v-btn depressed class="custom-font-10 mx-2 response_btn" to="/">پاسخ</v-btn>
          </div>
          <div class="like_dislike_wrap my-2">
            <v-btn
              v-for="btn in comment.courseIdea"
              :key="btn.id"
              :title="btn.title"
              depressed
              class="custom-font-10 solid-border mx-1"
            >
              <span>{{ btn.amount }}</span>
              {{ btn.title }}
            </v-btn>
          </div>
        </div>
        <div class="comment_content my-3">
          <div class="description custom-font-13">
            <p>{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <v-card v-else color="#F5F5F5"  flat class="rounded-lg my-3 py-1 px-2">
      <h5 class="custom-font-13 ">هیچ دیدگاهی برای این محصول نوشته نشده است.</h5>
    </v-card>
    <ReviewForm />
  </div>
</template>

<script>
import ReviewForm from '@/components/page/Product/Single/ProductTabs/CommentTabDetail/ReviewForm'
export default {
  name: 'CommentList',
  components: { ReviewForm },
  props: {
    commentList: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
.comment__list {
  &_single {
    .v-btn {
      height: 25px !important;
    }
    .commenter_detail {
      .like_dislike_wrap {
        .v-btn {
          background-color: white;
          &::before {
            background-color: white !important;
          }
        }
      }
      .comment_authore {
        @media screen and (max-width: 600px) {
          display: block !important;
        }
        .account_icon {
          background-color: #f1f8ff;
        }
        .response_btn {
          &:hover {
            background-color: #424242;
            color: white;
            @include applyTransition;
          }
        }
      }
    }
  }
  .comment_content {
    .description {
      border-bottom: 2px dotted rgba(207, 204, 204, 0.39);
    }
  }
}
</style>