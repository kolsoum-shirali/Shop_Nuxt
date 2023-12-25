<template>
  <div>
    <v-hover v-slot="{ hover }" class="rounded-lg">
      <div class="wrapp_card">
        <v-card flat class="rounded-lg teacher__card" color="white" height="330">
          <div style="height: 100%">
            <img
              :src="require(`@/assets/images/${teacher.id}.jpg`)"
              :alt="teacher.image"
              class="teacher__card_img"
              width="100%"
              height="100%"
              @error="setAltImg"
            />
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text"
                style="height: 100%"
              >
                <div>
                  <Social
                    v-for="(social, index) in socials"
                    :key="index"
                    :social="social"
                    class="d-block ma-1"
                  />
                </div>
              </div>
            </v-expand-x-transition>
          </div>
          <div class="teacher_btn">
            <v-btn
              :to="'/teacher/' + `${teacher.id}/${decodePersianName(teacher.fullName)}`"
              absolute
              left
              right
              class="rounded-lg teacher__card_btn box-shadow"
              large
              depressed
            >{{ teacher.fullName }}</v-btn>
          </div>
        </v-card>
      </div>
    </v-hover>
  </div>
</template>

<script>
import Social from '@/components/common/Social/Social'

export default {
  name: 'TeacherCard',
  components: {
    Social,
  },
  props: {
    teacher: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      socials: [
        { icon: 'mdi-facebook', path: '/', color: 'white' },
        { icon: 'mdi-youtube', path: '/', color: 'white' },
        { icon: 'mdi-movie-roll', path: '/', color: 'white' },
        { icon: 'mdi-linkedin', path: '/', color: 'white' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  background-color: #ea1d21;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 30%;
}
.wrapp_card {
  &:hover {
    .teacher__card_img {
      @include applyTransition;
      transform: scale(1.1) rotate(3deg);
    }
  }
  .teacher__card {
    overflow: hidden;

    &_btn {
      bottom: -10px;
    }
    .teacher_btn {
      .v-btn {
        background-color: white !important;
        &::before {
          background-color: white !important;
        }
      }
    }
  }
}
</style>