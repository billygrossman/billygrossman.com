<template>
  <GlobalNavigation></GlobalNavigation>

  <main class="container--inner" :class="`page page--${$route.name}`">
    <router-view />
  </main>

  <GlobalFooter></GlobalFooter>
</template>

<script>
  import GlobalFooter from '@/components/global/GlobalFooter';
  import GlobalNavigation from '@/components/global/GlobalNavigation';

  export default {
    name: 'App',
    components: {
      GlobalFooter,
      GlobalNavigation,
    },
  };
</script>
