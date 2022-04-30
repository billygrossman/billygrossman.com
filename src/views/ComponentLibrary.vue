<template>
  <h1>Styles and Components</h1>

  <h2 class="group-heading">Typography and Colors</h2>

  <SectionContent heading="Colors">
    <template #main>
      <UtilityComponentDefinition
        heading="Colors"
        description="Available colors for the application theme."
      >
        <template #main>
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
        </template>
      </UtilityComponentDefinition>
    </template>
  </SectionContent>

  <SectionContent heading="Typography">
    <template #main>
      <UtilityComponentDefinition
        heading="Text Helpers"
        description="Utility classes to apply stylized text treatments."
      >
        <template #main>
          <div
            v-for="(type, index) in typography"
            :key="index"
            class="text-definition"
          >
            <p :class="type.value">{{ type.name }}</p>
            <p class="text--mono text--bold color--blue">.{{ type.value }}</p>
          </div>
        </template>
      </UtilityComponentDefinition>
    </template>
  </SectionContent>

  <h2 class="group-heading">Components</h2>

  <SectionContent heading="Position">
    <template #main>
      <UtilityComponentDefinition
        heading="PositionItem"
        description="Displays information about an individual job position."
        :props="positionItem.props"
      >
        <template #main>
          <PositionItem
            class="container--border"
            :company="positionItem.data.company"
            :description="positionItem.data.description"
            :end-date="positionItem.data.endDate"
            :job-title="positionItem.data.jobTitle"
            :location="positionItem.data.location"
            :responsibilities="positionItem.data.responsibilities"
            :start-date="positionItem.data.startDate"
          ></PositionItem>
        </template>
      </UtilityComponentDefinition>

      <UtilityComponentDefinition
        :hasDisplay="false"
        heading="PositionGroup"
        description="Displays a collection of positions."
        :props="positionGroup.props"
      >
      </UtilityComponentDefinition>
    </template>
  </SectionContent>

  <SectionContent heading="Utility">
    <template #main>
      <UtilityComponentDefinition
        heading="UtilityDetailList"
        description="Styled wrapper for list items."
        :props="utilityDetailList.props"
      >
        <template #main>
          <UtilityDetailList
            class="container--border component__detail-list"
            :items="utilityDetailList.data"
          ></UtilityDetailList>
        </template>
      </UtilityComponentDefinition>

      <UtilityComponentDefinition
        heading="UtilityTable"
        description="Styled wrapper for an HTML table."
        :props="utilityTable.props"
      >
        <template #main>
          <UtilityTable
            class="container--border"
            :headers="utilityTable.data.headers"
            :body="utilityTable.data.body"
          ></UtilityTable>
        </template>
      </UtilityComponentDefinition>

      <UtilityComponentDefinition
        heading="UtilityHTMLContentRenderer"
        description="Wrapper to inject HTML content on the page."
        :props="utilityHtmlContentRenderer.props"
      >
        <template #main>
          <UtilityHTMLContentRenderer
            class="container--border"
            :content="utilityHtmlContentRenderer.data.content"
            :tag="utilityHtmlContentRenderer.data.tag"
          ></UtilityHTMLContentRenderer>
        </template>
      </UtilityComponentDefinition>
    </template>
  </SectionContent>
</template>

<script lang="ts">
  import PositionItem from '@/components/position/PositionItem.vue';
  import SectionContent from '@/components/section/SectionContent.vue';
  import UtilityComponentDefinition from '@/components/utility/UtilityComponentDefinition.vue';
  import UtilityDetailList from '@/components/utility/UtilityDetailList.vue';
  import UtilityHTMLContentRenderer from '@/components/utility/UtilityHTMLContentRenderer.vue';
  import UtilityTable from '@/components/utility/UtilityTable.vue';

  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      PositionItem,
      SectionContent,
      UtilityComponentDefinition,
      UtilityDetailList,
      UtilityHTMLContentRenderer,
      UtilityTable,
    },
    data() {
      return {
        colors: [
          { name: '$accent-primary', value: '#74cbdf' },
          { name: '$accent-secondary', value: '#a25ffa' },
          { name: '$background-gray', value: '#f4f4f4' },
          { name: '$border-color-default', value: '#ddd' },
          { name: '$text-color-gray', value: '#424242' },
          { name: '$text-color-blue', value: '#1867c0' },
          { name: '$text-color-green', value: '#690' },
          { name: '$text-color-red', value: '#905' },
        ],
        positionGroup: {
          props: [['data', 'Array', '–', 'true']],
        },
        positionItem: {
          props: [
            ['company', 'String', '–', 'true'],
            ['description', 'String|Boolean', 'false', 'false'],
            ['end-date', 'String', '–', 'true'],
            ['job-title', 'String', '–', 'true'],
            ['location', 'String', '–', 'true'],
            ['responsibilities', 'Array', '–', 'true'],
            ['start-date', 'String', '–', 'true'],
          ],
          data: {
            company: 'Wigits, Inc.',
            description:
              'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecte',
            endDate: 'PRESENT',
            jobTitle: 'Director of Departments',
            location: 'Townville, USA',
            responsibilities: [
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
              'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
              'Illo inventore veritatis et quasi architecto beatae vitae',
              'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
            ],
            startDate: 'JANUARY 2020',
          },
        },
        headers: ['Name', 'Type', 'Default', 'Required'],
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
        utilityDetailList: {
          props: [['items', 'Array', '–', 'true']],
          data: [
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
            'Illo inventore veritatis et quasi architecto beatae vitae',
            'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          ],
        },
        utilityHtmlContentRenderer: {
          props: [
            ['content', 'String', '–', 'true'],
            ['tag', 'String', 'div', 'false'],
          ],
          data: {
            content: `This is a <strong class="color--blue">paragraph</strong> with <code class="color--red">HTML</code> content!`,
            tag: 'p',
          },
        },
        utilityTable: {
          props: [
            ['headers', 'Array', '–', 'true'],
            ['body', 'Array', '–', 'true'],
          ],
          data: {
            headers: ['Person', 'Department', 'Position'],
            body: [
              ['Joe', 'Engineering', 'Software Developer'],
              ['Mary', 'Engineering', 'Automation Engineer'],
              ['Hugo', 'Management', 'Engineering Manager'],
            ],
          },
        },
      };
    },
  });
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

    .component__detail-list {
      padding-left: 3em;
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
