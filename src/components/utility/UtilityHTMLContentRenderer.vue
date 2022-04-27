<template>
  <component
    :is="tag"
    v-html="content"
    data-test="html-content-renderer"
  ></component>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'UtilityHTMLContentRenderer',
    inheritAttrs: true,
    props: {
      /**
       * Content containing HTML markup
       */
      content: {
        type: String,
        default: null,
      },

      /**
       * Tag name
       */
      tag: {
        type: String,
        default: 'div',
      },
    },
  });
</script>
