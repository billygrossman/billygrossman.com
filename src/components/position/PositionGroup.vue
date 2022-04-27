<template>
  <div class="position-group" data-test="position-group">
    <PositionItem
      v-for="(item, index) in data"
      :key="index"
      class="position-group__item"
      :class="`position-group__item--${index}`"
      :company="item.company"
      :description="item.description"
      :end-date="item.endDate"
      :job-title="item.jobTitle"
      :location="item.location"
      :responsibilities="item.responsibilities"
      :start-date="item.startDate"
    ></PositionItem>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PositionItem from '@/components/position/PositionItem.vue';

  export default defineComponent({
    name: 'PositionGroup',
    components: {
      PositionItem,
    },
    props: {
      /**
       * Collection of data objects to render.
       * Needs to match prop requirements
       * for `PositionItem` component
       *
       * @var {Array} data
       */
      data: {
        type: Array,
        required: true,
      },
    },
  });
</script>

<style lang="scss">
  .position-group__item {
    margin-bottom: 3em;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
