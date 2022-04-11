<template>
  <component
    :is="tag"
    v-html="content"
    data-test="html-content-renderer"
  ></component>
</template>

<script>
  export default {
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
  };
</script>
