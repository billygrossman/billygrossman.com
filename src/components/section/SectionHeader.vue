<template>
  <header class="header">
    <div class="header__left">
      <h1 class="header__title">
        {{ content.firstName }}<br />{{ content.lastName }}
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
        <a :href="`//${content.website}`">
          {{ content.website }}
        </a>
      </p>
    </div>
  </header>
</template>

<script>
  export default {
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
  };
</script>

<style lang="scss">
  .header {
    justify-content: space-between;
    align-items: end;
    margin: 5em auto 6em;
    max-width: $contain-width;

    @media (min-width: $layout-breakpoint-medium) {
      display: flex;
    }
  }

  .header__left {
    margin-bottom: 2em;

    @media (min-width: $layout-breakpoint-medium) {
      margin-bottom: 0;
    }
  }

  .header__title {
    font-size: 4em;
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

    @media (min-width: $layout-breakpoint-large) {
      font-size: 6em;
    }
  }

  .header__subtitle {
    font-size: 2em;
    margin-bottom: 0;
    letter-spacing: 4px;

    @media (min-width: $layout-breakpoint-medium) {
      font-size: 3vw;
    }

    @media (min-width: $layout-breakpoint-large) {
      font-size: 3em;
    }
  }

  .header__right p {
    margin: 8px 0;
    font-size: 1.15em;

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 2px solid $accent-primary;
      transition: all 0.2s ease;

      &:hover {
        border-color: $accent-secondary;
      }
    }
  }
</style>
