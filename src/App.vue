<template>
  <GlobalNavigation></GlobalNavigation>

  <main class="container--inner" :class="`page page--${$route.name}`">
    <router-view />
  </main>

  <GlobalFooter></GlobalFooter>
</template>

<script lang="ts">
  import GlobalFooter from '@/components/global/GlobalFooter.vue';
  import GlobalNavigation from '@/components/global/GlobalNavigation.vue';

  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: {
      GlobalFooter,
      GlobalNavigation,
    },
  });
</script>
