<template>
  <section
    class="content-section"
    :class="`content-section--${heading.toLowerCase()}`"
  >
    <div class="content-section__col content-section__col--left">
      <h2>{{ heading }}</h2>
    </div>

    <div class="content-section__col content-section__col--right">
      <UtilityHTMLContentRenderer v-if="content" :content="content">
      </UtilityHTMLContentRenderer>

      <div v-if="details.length" class="content-section__details">
        <UtilityDetailList :items="details"></UtilityDetailList>
      </div>

      <slot name="main"></slot>
    </div>
  </section>
</template>

<script>
  import UtilityDetailList from '../utility/UtilityDetailList';
  import UtilityHTMLContentRenderer from '../utility/UtilityHTMLContentRenderer';

  export default {
    name: 'SectionContent',
    components: {
      UtilityDetailList,
      UtilityHTMLContentRenderer,
    },
    props: {
      /**
       * Content containing HTML markup
       */
      heading: {
        type: String,
        required: true,
      },

      /**
       * Content
       */
      content: {
        type: String,
        default: '',
      },

      /**
       * Detail list
       */
      details: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style lang="scss">
  .content-section {
    margin-bottom: 4em;
    padding-bottom: 4em;
    border-bottom: 1px solid $border-color-default;

    &:last-child {
      border: 0 none;
    }

    @media (min-width: $layout-breakpoint-medium) {
      display: flex;
    }
  }

  .content-section__col {
    width: 100%;

    &--left {
      @media (min-width: $layout-breakpoint-medium) {
        flex: 0 0 23%;
        margin-right: 3em;
      }
    }
  }

  .content-section h2 {
    margin: 0 0 1em;

    @media (min-width: $layout-breakpoint-medium) {
      margin-bottom: 0;
    }
  }
</style>
