<template>
  <div class="position-group">
    <PositionItem
      v-for="(item, index) in data"
      :key="index"
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

<script>
  import PositionItem from './PositionItem';

  export default {
    name: 'PositionGroup',
    components: {
      PositionItem,
    },
    props: {
      /**
       * Collection of data to present
       *
       * @var {Array} data
       */
      data: {
        type: Array,
        required: true,
      },
    },
  };
</script>
