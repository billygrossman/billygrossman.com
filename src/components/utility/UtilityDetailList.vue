<template>
  <ul v-if="items" class="detail-list" data-test="detail-list">
    <UtilityHTMLContentRenderer
      v-for="(item, index) in items"
      :content="item"
      :key="index"
      tag="li"
      data-test="detail-list-item"
      class="detail-list__item"
      :class="`detail-list__item--${index}`"
    >
    </UtilityHTMLContentRenderer>
  </ul>
</template>

<script lang="ts">
  import UtilityHTMLContentRenderer from './UtilityHTMLContentRenderer.vue';

  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'UtilityDetailList',
    components: {
      UtilityHTMLContentRenderer,
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
  });
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
