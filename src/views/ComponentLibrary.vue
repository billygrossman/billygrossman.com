<template>
  <h1>Styles and Components</h1>

  <h2 class="group-heading">Typography and Colors</h2>

  <SectionContent heading="Colors">
    <template #main>
      <div class="component">
        <div class="component__description">
          <h3>
            <code class="color--red text--bold">Colors</code>
          </h3>
          <p>Available colors for the application theme</p>
        </div>

        <div class="component__colors">
          <div
            class="component__color"
            v-for="(color, index) in colors"
            :key="index"
          >
            <div
              class="component__color-sample"
              :style="`background-color: ${color.value}`"
            ></div>
            <div class="component__color-name">{{ color.name }}</div>
            <div class="component__color-value">{{ color.value }}</div>
          </div>
        </div>
      </div>
    </template>
  </SectionContent>

  <SectionContent heading="Typography">
    <template #main>
      <div class="component">
        <div class="component__description">
          <h3>
            <code class="color--red text--bold">Text Helpers</code>
          </h3>
          <div
            v-for="(type, index) in typography"
            :key="index"
            class="text-definition"
          >
            <p :class="type.value">{{ type.name }}</p>
            <p class="text--mono text--bold color--blue">.{{ type.value }}</p>
          </div>
        </div>
      </div>
    </template>
  </SectionContent>

  <h2 class="group-heading">Components</h2>

  <SectionContent heading="Position">
    <template #main>
      <div class="component">
        <div class="component__description">
          <h3>
            <code class="color--red text--bold">PositionItem</code>
          </h3>
          <p>Displays information about an individual job position.</p>
        </div>

        <h4>API</h4>
        <UtilityTable
          :headers="['Name', 'Type', 'Default', 'Required']"
          :body="[
            ['company', 'String', '–', 'true'],
            ['description', 'String|Boolean', 'false', 'false'],
            ['end-date', 'String', '–', 'true'],
            ['job-title', 'String', '–', 'true'],
            ['location', 'String', '–', 'true'],
            ['responsibilities', 'Array', '–', 'true'],
            ['start-date', 'String', '–', 'true'],
          ]"
        ></UtilityTable>

        <h4>Display</h4>
        <PositionItem
          class="container--border"
          company="Wigits, Inc."
          description="sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecte"
          end-date="PRESENT"
          job-title="Director of Departments"
          location="Townville, USA"
          :responsibilities="[
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
            'Illo inventore veritatis et quasi architecto beatae vitae',
            'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          ]"
          start-date="JANUARY 2020"
        ></PositionItem>
      </div>

      <div class="component">
        <div class="component__description">
          <h3><code class="color--red text--bold">PositionGroup</code></h3>
          <p>Displays a collection of positions.</p>
        </div>

        <h4>API</h4>
        <UtilityTable
          :headers="['Name', 'Type', 'Default', 'Required']"
          :body="[['data', 'Array', '–', 'true']]"
        ></UtilityTable>
      </div>
    </template>
  </SectionContent>
  <SectionContent heading="Utility">
    <template #main>
      <div class="component">
        <div class="component__description">
          <h3><code class="color--red text--bold">UtilityDetailList</code></h3>
          <p>Styled wrapper for list items.</p>
        </div>

        <h4>API</h4>
        <UtilityTable
          :headers="['Name', 'Type', 'Default', 'Required']"
          :body="[['items', 'Array', '–', 'true']]"
        ></UtilityTable>

        <h4>Display</h4>
        <UtilityDetailList
          class="container--border"
          :items="[
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
            'Illo inventore veritatis et quasi architecto beatae vitae',
            'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          ]"
        ></UtilityDetailList>
      </div>

      <div class="component">
        <div class="component__description">
          <h3><code class="color--red text--bold">UtilityTable</code></h3>
          <p>Styled wrapper for an HTML table.</p>
        </div>

        <h4>API</h4>
        <UtilityTable
          :headers="['Name', 'Type', 'Default', 'Required']"
          :body="[
            ['headers', 'Array', '–', 'true'],
            ['body', 'Array', '–', 'true'],
          ]"
        ></UtilityTable>

        <h4>Display</h4>
        <UtilityTable
          class="container--border"
          :headers="['Person', 'Department', 'Position']"
          :body="[
            ['Joe', 'Engineering', 'Software Developer'],
            ['Mary', 'Engineering', 'Automation Engineer'],
            ['Hugo', 'Management', 'Engineering Manager'],
          ]"
        ></UtilityTable>
      </div>

      <div class="component">
        <div class="component__description">
          <h3>
            <code class="color--red text--bold">
              UtilityHTMLContentRenderer
            </code>
          </h3>
          <p>Wrapper to inject HTML content on the page.</p>
        </div>

        <h4>API</h4>
        <UtilityTable
          :headers="['Name', 'Type', 'Default', 'Required']"
          :body="[
            ['content', 'String', '–', 'true'],
            ['tag', 'String', 'div', 'false'],
          ]"
        ></UtilityTable>

        <h4>Display</h4>
        <UtilityHTMLContentRenderer
          class="container--border"
          :content="`This is a <strong>paragraph</strong> with <code>HTML</code> content!</p>`"
          tag="p"
        ></UtilityHTMLContentRenderer>
      </div>
    </template>
  </SectionContent>
</template>

<script>
  import PositionItem from '@/components/position/PositionItem';
  import SectionContent from '@/components/section/SectionContent';
  import UtilityDetailList from '@/components/utility/UtilityDetailList';
  import UtilityHTMLContentRenderer from '@/components/utility/UtilityHTMLContentRenderer';
  import UtilityTable from '@/components/utility/UtilityTable';

  export default {
    components: {
      PositionItem,
      SectionContent,
      UtilityDetailList,
      UtilityHTMLContentRenderer,
      UtilityTable,
    },
    data() {
      return {
        colors: [
          { name: '$accent-primary', value: '#74cbdf' },
          { name: '$accent-secondary', value: '#a25ffa' },
          { name: '$background-color-gray', value: '#f4f4f4' },
          { name: '$border-color-default', value: '#ddd' },
          { name: '$text-color-gray', value: '#424242' },
          { name: '$text-color-blue', value: '#1867c0' },
          { name: '$text-color-green', value: '#690' },
          { name: '$text-color-red', value: '#905' },
        ],
        typography: [
          {
            value: 'text--bold',
            name: 'Bold Text',
          },
          {
            value: 'text--italic',
            name: 'Italic Text',
          },
          {
            value: 'text--mono',
            name: 'Monospace Text',
          },
          {
            value: 'text--lowercase',
            name: 'Text Lowercase',
          },
          {
            value: 'color--blue',
            name: 'Blue Text',
          },
          {
            value: 'color--green',
            name: 'Green Text',
          },
          {
            value: 'color--red',
            name: 'Red Text',
          },
          {
            value: 'color--gray',
            name: 'Gray Text',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .page--component-library {
    h1 {
      font-size: 3em;
    }

    .group-heading {
      font-size: 1.75em;
      margin-bottom: 1em;
    }

    h3 {
      margin-bottom: 12px;
    }

    h4 {
      margin-bottom: 12px;
    }

    .component {
      border-bottom: 1px solid $border-color-default;
      margin: 0.5em auto 4em;
      padding-bottom: 2em;

      &:last-child {
        border: 0 none;
        margin-bottom: 0;
      }
    }

    .component__description {
      margin-bottom: 16px;
    }

    .utility-table {
      margin-bottom: 3em;
    }

    .table__cell--name {
      @extend .color--blue;
      @extend .text--mono;
      @extend .text--bold;
    }

    .table__cell--type {
      @extend .color--green;
      @extend .text--mono;
    }

    .table__cell--default {
      @extend .text--mono;
      @extend .text--lowercase;
    }

    .table__cell--required {
      @extend .color--red;
      @extend .text--mono;
      @extend .text--bold;
    }

    .component__colors {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .component__color {
      width: 45%;
      border: 1px solid $border-color-default;
      margin-bottom: 2em;
      padding-bottom: 8px;
    }

    .component__color-sample {
      height: 40px;
      width: 100%;
    }

    .component__color-name,
    .component__color-value {
      padding: 4px 12px;
    }

    .component__color-name {
      @extend .color--red;
      @extend .text--mono;
      @extend .text--bold;
    }

    .component__color-value {
      @extend .text--mono;
    }

    .text-definition {
      display: flex;
      justify-content: space-between;

      p {
        flex: 1;
        margin: 4px 0;
      }
    }
  }
</style>
