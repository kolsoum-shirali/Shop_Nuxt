<template>
  <v-card flat class="ma-5 extend-line topics custom-font-15">
    <div
      v-for="(topic, index) in topics"
      :key="index"
      class="course-box d-sm-flex solid-border rounded-lg my-2"
    >
      <div class="d-flex align-center course-topic col-12 col-sm-9">
        <v-icon>mdi-play</v-icon>
        <h5 class="mx-2">{{ topic.title }}</h5>
        <v-btn
          v-if="topic.showFree"
          to="/"
          depressed
          class="free_btn custom-font-10 rounded-pill red lighten-4"
        >نمایش رایگان</v-btn>
      </div>
      <div class="d-flex justify-space-between align-center course-time col-12 col-sm-3">
        <h6 class="text-grey-darken">
          <v-icon class="ml-1">mdi-clock-outline</v-icon>
          {{ topic.topicTime }}
        </h6>
        <v-icon :color="topic.showFree ? 'green' : '#616161'" size="25">
          {{
            topic.showFree ? 'mdi-download' : 'mdi-lock-outline'
          }}
        </v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CourseTopicTab',
  props: {
    topics: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.topics {
  .course-box {
    .course-topic {
      .free_btn {
        height: 25px !important;
      }
    }
  }
}
</style>