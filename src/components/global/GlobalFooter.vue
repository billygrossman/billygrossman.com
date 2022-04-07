<template>
  <footer class="footer">
    <div class="footer__inner container--inner">
      <div class="footer__first">
        <p><span class="text--tag">Billy Grossman</span></p>
      </div>
      <div class="footer__second">
        <p>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </p>
        <p><a href="/components">Component Library</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
  import { content } from '@/data/content';

  export default {
    name: 'GlobalFooter',
    data() {
      return {
        /**
         * @var {String} email
         */
        email: content.contact.email,
      };
    },
  };
</script>

<style lang="scss">
  .footer {
    background-color: $background-gray;
    padding: 1.5em 0;
  }

  .footer__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
