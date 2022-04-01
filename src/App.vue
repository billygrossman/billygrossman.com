<template>
  <SectionNavigation></SectionNavigation>
  <main>
    <SectionHeader :content="content.contact"></SectionHeader>

    <SectionContent
      v-for="(section, index) in content.primary.sections"
      :key="index"
      :heading="section.title"
      :content="section.content"
      :details="section.details"
    >
    </SectionContent>

    <SectionContent heading="Experience">
      <template #main>
        <PositionGroup :data="positions"></PositionGroup>
      </template>
    </SectionContent>
  </main>
</template>

<script>
  import { content } from './data/content';
  import { positions } from './data/positions';

  import PositionGroup from './components/position/PositionGroup';
  import SectionHeader from './components/section/SectionHeader';
  import SectionNavigation from './components/section/SectionNavigation';
  import SectionContent from './components/section/SectionContent';

  export default {
    name: 'App',
    components: {
      PositionGroup,
      SectionContent,
      SectionHeader,
      SectionNavigation,
    },
    data() {
      return {
        /**
         * @var {Object} content Page content
         */
        content: content,

        /**
         * @var {Object} resume Resume data
         */
        positions: positions,
      };
    },
  };
</script>

<style lang="scss">
  main {
    margin: 5em auto;
    max-width: $contain-width;
    padding: 0 3em;
  }
</style>
