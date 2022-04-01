<template>
  <ul v-if="items" class="detail-list">
    <HTMLContentRenderer
      v-for="(item, index) in items"
      :content="item"
      :key="index"
      tag="li"
      class="detail-list__item"
      :class="`detail-list__item--${index}`"
    >
    </HTMLContentRenderer>
  </ul>
</template>

<script>
  import HTMLContentRenderer from './HTMLContentRenderer';

  export default {
    name: 'DetailList',
    components: {
      HTMLContentRenderer,
    },
    props: {
      /**
       * Content containing HTML markup
       */
      items: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style lang="scss">
  .detail-list {
    margin-top: 24px;
  }

  .detail-list__item {
    margin-bottom: 8px;
    line-height: 1.5em;

    @media (min-width: $layout-breakpoint-medium) {
      line-height: inherit;
    }
  }
</style>
