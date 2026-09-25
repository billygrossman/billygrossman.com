<template>
  <header class="header">
    <div class="header__left">
      <h1 class="header__title">
        <span class="text--highlight">{{ content.firstName }}</span>
        <br />
        <span class="text--highlight">{{ content.lastName }}</span>
      </h1>

      <p class="header__subtitle">{{ content.professionalTitle }}</p>
    </div>

    <div class="header__right">
      <p>{{ content.location }}</p>

      <p>
        <a :href="`mailto:${content.email}`">
          {{ content.email }}
        </a>
      </p>

      <p>
        <a :href="`${content.website}`">
          {{ content.website }}
        </a>
      </p>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SectionHeader',
    props: {
      /**
       * Content object
       */
      content: {
        type: Object,
        required: true,
      },
    },
  });
</script>

<style lang="scss">
  .header {
    margin: 5em auto 6em;
    max-width: $contain-width;

    @media (min-width: $layout-breakpoint-medium) {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 3rem;
      align-items: end;
    }
  }

  .header__left {
    margin-bottom: 2em;

    @media (min-width: $layout-breakpoint-medium) {
      margin-bottom: 0;
    }
  }

  .header__title {
    font-size: clamp(2.5rem, 9vw, 4rem);
    font-weight: 900;
    line-height: 1.15em;
    margin: 0 0 0.25em;
    border-bottom: 12px solid;
    text-shadow: 3px 3px $accent-primary;
    letter-spacing: 2px;
    transition: all 0.2s ease;

    &:hover {
      text-shadow: 3px 3px $accent-secondary;
    }

    @media (min-width: $layout-breakpoint-medium) {
      font-size: 8vw;
    }

    @media print {
      text-shadow: 0 0;
    }

    @media (min-width: $layout-breakpoint-large) {
      font-size: 6em;
    }
  }

  .header__subtitle {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 0;
    letter-spacing: 0.06em;
    line-height: 1.3;

    @media (min-width: $layout-breakpoint-medium) {
      font-size: clamp(1.5rem, 2.3vw, 2rem);
    }

    @media (min-width: $layout-breakpoint-large) {
      font-size: 2rem;
    }
  }

  .header__right {
    overflow-wrap: anywhere;
  }

  .header__right p {
    margin: 8px 0;
    font-size: 1.15em;
  }
</style>
