<template>
  <SectionNavigation></SectionNavigation>

  <main :class="`page page--${$route.name}`">
    <router-view />
  </main>
</template>

<script>
  import SectionNavigation from '@/components/section/SectionNavigation';
  export default {
    name: 'App',
    components: {
      SectionNavigation,
    },
  };
</script>
