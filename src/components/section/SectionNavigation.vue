<template>
  <nav class="navigation">
    <div class="navigation__wrapper">
      <ul class="navigation__primary">
        <li v-for="(item, index) in items.primary" :key="index">
          <a
            class="navigation__link"
            :href="item.href"
            :title="item.name"
            :target="item.target"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
      <ul class="navigation__utility">
        <li v-for="(item, index) in items.utility" :key="index">
          <a
            class="navigation__button"
            :href="item.href"
            :title="item.name"
            :target="item.target"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { navigation } from '../../data/navigation';

  export default {
    name: 'SectionNavigation',
    data() {
      return {
        items: navigation,
      };
    },
  };
</script>

<style lang="scss">
  .navigation {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.28rem;
    text-transform: uppercase;
    width: 100%;
    background-color: #111;
    text-align: center;
  }

  .navigation__wrapper {
    max-width: $contain-width;
    margin: 0 auto;

    @media (min-width: $layout-breakpoint-small) {
      padding: 0 3em;
      justify-content: space-between;
      display: flex;
      text-align: inherit;
    }
  }

  .navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navigation li {
    display: inline-block;
    width: 100%;
    line-height: 44px;

    &:last-child {
      margin-left: auto;
    }

    @media (min-width: $layout-breakpoint-small) {
      width: auto;
    }
  }

  .navigation a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 0 0.8rem;
    transition: all 0.2s ease;
    font-size: 0.725em;
    border: 0 none;
  }

  .navigation__button {
    padding-left: 2rem;
    padding-right: 2rem;
    background: $accent-primary;

    &:hover {
      background: $accent-secondary;
    }
  }

  @media print {
    .navigation {
      display: none;
    }
  }
</style>
