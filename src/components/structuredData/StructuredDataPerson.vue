<template>
  <teleport to="head">
    <component :is="'script'" type="application/ld+json">
      {{ structuredData }}
    </component>
  </teleport>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    computed: {
      /**
       * Return JSON for person structured data
       *
       * @return JSON data
       */
      structuredData(): String {
        const contact = this.$store.getters['content/getContact'];
        const data = {
          '@context': 'http://schema.org',
          '@type': 'Person',
          name: `${contact.firstName} ${contact.lastName}`,
          url: contact.website,
          jobTitle: contact.professionalTitle,
          alumniOf: contact.alumniOf,
          gender: contact.gender,
          image: contact.image,
          sameAs: contact.links,
        };

        return JSON.stringify(data);
      },
    },
  });
</script>
