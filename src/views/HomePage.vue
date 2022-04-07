<template>
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

  <SectionContent
    v-for="(section, index) in content.tertiary.sections"
    :key="index"
    :heading="section.title"
    :content="section.content"
    :details="section.details"
  >
  </SectionContent>
</template>

<script>
  import { content } from '@/data/content';
  import { positions } from '@/data/positions';

  import PositionGroup from '@/components/position/PositionGroup';
  import SectionHeader from '@/components/section/SectionHeader';
  import SectionContent from '@/components/section/SectionContent';

  export default {
    components: {
      PositionGroup,
      SectionContent,
      SectionHeader,
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
