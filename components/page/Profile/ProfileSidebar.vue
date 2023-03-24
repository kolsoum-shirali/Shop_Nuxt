<template>
  <div>
    <v-card color="#ea1d21" class="rounded-b-lg pa-3 account_head_user" flat>
      <div class="d-flex align-center small_info">
        <div class="user_img">
          <v-avatar>
            <img
              :src="require('@/assets/images/user-profile.png')"
              alt="user-profile"
              @error="setAltImg"
            />
          </v-avatar>
        </div>
        <p class="white--text mr-5 custom-font-11 py-1 welcome_title">
          خوش آمدید
        </p>
      </div>
      <h5 class="mt-3 white--text">{{ firstName }} {{ lastName }}</h5>
    </v-card>
    <v-card color="#ea1d21" class="pa-3 mt-3 rounded-lg">
      <nuxt-link
        v-for="(option, index) in options"
        :key="index"
        :to="option.to"
      >
        <div
          class="rounded-pill ma-2 pa-2 d-flex align-center single_navigation"
          :class="{ active_navigation: option.active }"
          @click="addActive(index)"
        >
          <v-icon color="#BDBDBD">{{ option.icon }}</v-icon>
          <p class="white--text custom-font-13 mb-0 mr-2">{{ option.title }}</p>
        </div>
      </nuxt-link>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileSidebar',

  data() {
    return {
      options: [
        {
          title: 'پیشخوان',
          icon: 'mdi-speedometer-medium',
          to: '/profile',
          active: true,
        },
        {
          title: '  سفارش ها',
          icon: 'mdi-basket-outline',
          to: '/profile/order',
          active: false,
        },
        {
          title: 'دانلودها',
          icon: 'mdi-download-outline',
          to: '/profile/download',
          active: false,
        },
        {
          title: ' اطلاعیه ها',
          icon: 'mdi-bell-outline',
          to: '/profile/announcements',
          active: false,
        },
        {
          title: 'علاقمندی ها ',
          icon: 'mdi-heart-outline',
          to: '/profile/wishlists',
          active: false,
        },
        {
          title: ' دیدگاه ها',
          icon: 'mdi-comment-text-outline',
          to: '/profile/review',
          active: false,
        },
        {
          title: '  آدرس ها',
          icon: 'mdi-home-outline',
          to: '/profile/address',
          active: false,
        },      
        {
          title: ' جزئیات حساب کاربری',
          icon: 'mdi-account-outline',
          to: '/profile/account-detail',
          active: false,
        },

        {
          title: 'خروج',
          icon: 'mdi-exit-to-app',
          to: '/',
          active: false,
        },
      ],
    }
  },

  computed: {
    ...mapState({
      firstName: (state) => state.auth.user.firstName,
      lastName: (state) => state.auth.user.lastName,
    }),
  },

  methods: {
    addActive(indexValue) {
      this.options.forEach((item, index) => {
        index === indexValue ? (item.active = true) : (item.active = false)
      })
      if (indexValue === 8) {
        this.$store.dispatch('auth/logout')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.account_head_user {
  .small_info {
    .user_img {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 2px dotted white;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
      }
    }
    .welcome_title {
      border-bottom: 1px dotted white;
    }
  }
}
.single_navigation {
  background-color: #b71c1c;
  &:hover {
    .v-icon {
      color: white !important;
    }
  }
}
.active_navigation {
  background-color: #91080d !important;
  position: relative;
  .v-icon {
    color: white !important;
  }
  &::after {
    content: '';
    border-left: 14px solid #ea1d21;
    display: block;
    height: 4px;
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -2px;
    border-radius: 19px;
  }
}
</style>
