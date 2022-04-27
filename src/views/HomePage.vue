<template>
  <SectionHeader :content="contact"></SectionHeader>

  <SectionContent
    v-for="(section, index) in primaryContent.sections"
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
    v-for="(section, index) in tertiaryContent.sections"
    :key="index"
    :heading="section.title"
    :content="section.content"
    :details="section.details"
  >
  </SectionContent>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';

  import PositionGroup from '@/components/position/PositionGroup.vue';
  import SectionHeader from '@/components/section/SectionHeader.vue';
  import SectionContent from '@/components/section/SectionContent.vue';

  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      PositionGroup,
      SectionContent,
      SectionHeader,
    },
    computed: {
      ...mapGetters('positions', {
        positions: 'getPositions',
      }),
      ...mapGetters('content', {
        contact: 'getContact',
        primaryContent: 'getPrimaryContent',
        tertiaryContent: 'getTertiaryContent',
      }),
    },
  });
</script>
