<template>
  <footer class="footer">
    <div class="footer__inner container--inner">
      <div class="footer__first">
        <p>
          <span class="text--tag">{{ fullName }}</span>
        </p>
      </div>
      <div class="footer__second">
        <p><a href="/">Home</a></p>
        <p><a href="/components">Component Library</a></p>
        <p>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GlobalFooter',
    computed: {
      ...mapGetters('content', {
        email: 'getContactEmail',
        fullName: 'getContactFullName',
      }),
    },
  });
</script>

<style lang="scss">
  .footer {
    background-color: $background-gray;
    padding: 1.5em 0;
  }

  .footer__inner {
    @media (min-width: $layout-breakpoint-small) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
