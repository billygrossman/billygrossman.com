<template>
  <div class="component">
    <div class="component__description">
      <h3>
        <code class="color--red text--bold">{{ heading }}</code>
      </h3>
      <p>{{ description }}</p>
    </div>

    <h4 v-if="props">API</h4>

    <UtilityTable
      v-if="props"
      :headers="apiTableHeaders"
      :body="props"
    ></UtilityTable>

    <h4 v-if="slots">Slots</h4>

    <UtilityTable
      v-if="slots"
      :headers="slotTableHeaders"
      :body="slots"
    ></UtilityTable>

    <h4 v-if="hasDisplay">Display</h4>

    <slot name="main"></slot>
  </div>
</template>

<script lang="ts">
  import UtilityTable from '@/components/utility/UtilityTable.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'UtilityComponentDefinition',
    components: {
      UtilityTable,
    },
    props: {
      /**
       * Description
       */
      description: {
        type: String,
        default: '',
      },

      /**
       * Has UI to display
       */
      hasDisplay: {
        type: Boolean,
        default: true,
      },

      /**
       * Heading
       */
      heading: {
        type: String,
        required: true,
      },

      /**
       * Component Props
       */
      props: {
        type: [Array, Boolean],
        default: false,
      },

      /**
       * Component Slots
       */
      slots: {
        type: [Array, Boolean],
        default: false,
      },
    },
    data() {
      return {
        apiTableHeaders: ['Name', 'Type', 'Default', 'Required'],
        slotTableHeaders: ['Name', 'Description'],
      };
    },
  });
</script>

<style lang="scss">
  .component__description {
    margin-bottom: 16px;
  }
</style>
