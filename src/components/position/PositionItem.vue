<template>
  <div class="position" data-test="position">
    <h3 data-test="position-heading">
      <span class="position__company"> {{ company }}, {{ location }} </span> -
      <span class="position__job-title">{{ jobTitle }}</span>
    </h3>

    <p data-test="position-dates" class="position__dates">
      {{ startDate }} - {{ endDate }}
    </p>

    <UtilityHTMLContentRenderer
      class="position__description"
      data-test="position-description"
      v-if="description"
      :content="description"
    ></UtilityHTMLContentRenderer>

    <div class="position__responsibilities" data-test="position-list-wrapper">
      <UtilityDetailList :items="responsibilities"></UtilityDetailList>
    </div>
  </div>
</template>

<script>
  import UtilityDetailList from '@/components/utility/UtilityDetailList';
  import UtilityHTMLContentRenderer from '@/components/utility/UtilityHTMLContentRenderer';

  export default {
    name: 'PositionItem',
    components: {
      UtilityDetailList,
      UtilityHTMLContentRenderer,
    },
    props: {
      /**
       * Company name
       */
      company: {
        type: String,
        required: true,
      },

      /**
       * End date
       */
      description: {
        type: [String, Boolean],
        default: false,
      },

      /**
       * End date
       */
      endDate: {
        type: String,
        required: true,
      },

      /**
       * Position title
       */
      jobTitle: {
        type: String,
        required: true,
      },

      /**
       * Company location
       */
      location: {
        type: String,
        required: true,
      },

      /**
       * Responsibilities
       */
      responsibilities: {
        type: Array,
        required: true,
      },

      /**
       * Start date
       */
      startDate: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss">
  .position {
    margin-bottom: 3em;
  }

  .position h3 {
    margin-bottom: 6px;
  }

  .position__job-title {
    font-weight: normal;
    font-style: italic;
    border-bottom: 2px solid $accent-primary;
  }

  .position__dates {
    font-size: 14px;
    letter-spacing: 2px;
    margin: 0;
  }

  .position__description {
    margin-top: 12px;

    p {
      margin: 12px 0;
    }
  }
</style>
