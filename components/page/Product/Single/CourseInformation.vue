<template>
  <v-card flat class="extend-line px-2 py-3 rounded-lg my-5">
    <div class="course_level center-align">
      <v-icon
        v-for="(item, index) in courseInfo.levelStars"
        :key="index"
        :color="item.color"
        :size="item.size"
      >{{item.icon}}</v-icon>
      <h6 class="custom-font-13 black--text">{{courseInfo.title}}</h6>
    </div>
    <div class="total_sales mt-10 py-3 dot-border rounded-lg">
      <h6 class="center-align custom-font-13">
        <v-icon size="30">mdi-account-outline</v-icon>تعداد دانشجو :
        <span class="px-3 mx-2 grey lighten-4 rounded-lg">{{courseInfo.studentNumber}}</span>
      </h6>
    </div>
    <div class="level_info extend-line mt-3">
      <h6 v-for="(item, index) in courseInfo.detail" :key="index" class="text-grey-darken">
        <v-icon size="20" class="ml-2" color="#E0E0E0">{{ item.icon }}</v-icon>
        {{ item.title }}
        <span class="black--text mr-2">{{ item.content }}</span>
      </h6>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CourseInformation',

 props:{
   courseInfo:{
     type:Object,
     default:()=>{}
   }
 }
}
</script>

<style lang="scss" scoped>
.v-card {
  @include applyShadow;
  position: relative;
  overflow: hidden;
  .course_level {
    &::before {
      content: "";
      position: absolute;
      top: -157px;
      right: 15px;
      left: 15px;
      height: 250px;
      border-radius: 50%;
      border: 2px dotted #eaeaea;
    }
  }
}
</style>