<template>
  <div class="utility-table">
    <table class="table">
      <thead class="table__header">
        <tr class="table__row">
          <th class="table__cell" v-for="(item, index) in headers" :key="index">
            {{ item }}
          </th>
        </tr>
      </thead>

      <tbody class="table__body">
        <tr class="table__row" v-for="(row, index) in body" :key="index">
          <td
            class="table__cell"
            :class="`table__cell--${headers[index].toLowerCase()}`"
            v-for="(item, index) in row"
            :key="index"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'UtilityTable',
    props: {
      /**
       * Table Headers
       */
      headers: {
        type: Array,
        example: ['Foo'],
        required: true,
      },

      /**
       * Table body
       */
      body: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style lang="scss">
  .utility-table {
    max-width: 100%;
    margin: 1em auto;
    overflow: scroll;
  }

  .table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid $border-color-default;
    border-radius: 2px;
  }

  th,
  td {
    text-align: left;
    border-bottom: 1px solid $border-color-default;
    padding: 8px;
  }

  th {
    color: $text-color-gray;
    font-size: 0.75rem;
  }
</style>
