<template>
  <v-col class="col-12 col-md-2 col-sm-4 wrap_links">
    <h5 class="white--text my-4">دسترسی سریع</h5>
    <ul class="links">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="white--text single_link"
      >
        <v-icon color="white" size="7" class="circle_link"
          >mdi-checkbox-blank-circle-outline</v-icon
        >
        {{ link.title }}
      </li>
    </ul>
  </v-col>
</template>

<script>
export default {
  name: 'QuickAccess',

  data() {
    return {
      links: [
        {
          title: 'ارتباط با ما',
          path: '/',
        },
        {
          title: 'کدهای کوتاه',
          path: '/',
        },
        {
          title: 'وبلاگ',
          path: '/',
        },
        {
          title: 'سوالات متداول',
          path: '/',
        },
        {
          title: 'فروشگاه',
          path: '/',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.links {
  line-height: 2;
  .single_link {
    cursor: pointer;
    display: block;
    font-size: 12px;
    &:hover {
      color: var(--color--black) !important;
    @include applyTransition;
      margin-right: 5px;
      .circle_link {
        color: var(--color--black) !important;
        border: 1px solid var(--color--black);
        border-radius: 50%;
        background-color: var(--color--black);
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .wrap_links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>