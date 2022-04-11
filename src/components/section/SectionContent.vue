<template>
  <section
    class="section-content"
    data-test="section-content"
    :class="`section-content--${heading.toLowerCase()}`"
  >
    <div class="section-content__col section-content__col--first">
      <h2 data-test="section-content-heading">{{ heading }}</h2>
    </div>

    <div
      class="section-content__col section-content__col--second"
      data-test="section-content-body"
    >
      <UtilityHTMLContentRenderer
        v-if="content"
        :content="content"
        data-test="section-content-content"
      >
      </UtilityHTMLContentRenderer>

      <div
        v-if="details.length"
        class="section-content__details"
        data-test="section-content-list"
      >
        <UtilityDetailList :items="details"></UtilityDetailList>
      </div>

      <slot name="main"></slot>
    </div>
  </section>
</template>

<script>
  import UtilityDetailList from '@/components/utility/UtilityDetailList';
  import UtilityHTMLContentRenderer from '@/components/utility/UtilityHTMLContentRenderer';

  export default {
    name: 'SectionContent',
    components: {
      UtilityDetailList,
      UtilityHTMLContentRenderer,
    },
    props: {
      /**
       * Section heading
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
  .section-content {
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

  .section-content__col {
    width: 100%;

    &--first {
      @media (min-width: $layout-breakpoint-medium) {
        flex: 0 0 23%;
        margin-right: 3em;
      }
    }
  }

  .section-content h2 {
    margin: 0 0 1em;

    @media (min-width: $layout-breakpoint-medium) {
      margin-bottom: 0;
    }
  }
</style>
