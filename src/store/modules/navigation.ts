import { GetterTree } from 'vuex';

export type NavItem = {
  name: string;
  href: string;
  target: string;
};

export type NavState = {
  primary: Array<NavItem>;
  utility: Array<NavItem>;
};

const state: NavState = {
  primary: [
    {
      name: '< bg/>',
      href: '/',
      target: '_self',
    },
    {
      name: 'Github',
      href: 'https://github.com/billygrossman/',
      target: '_blank',
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/billygrossman',
      target: '_blank',
    },
  ],
  utility: [
    {
      name: 'Download Resume',
      href: './billy-grossman-resume.pdf',
      target: '_blank',
    },
  ],
};

export type Getters = {
  getPrimary(state: NavState): Array<NavItem>;
  getUtility(state: NavState): Array<NavItem>;
};

export const getters: GetterTree<NavState, any> & Getters = {
  /**
   * Retrive the primary navigation items
   *
   * @param state
   * @returns Primary navigation items
   */
  getPrimary: (state: NavState) => {
    return state.primary;
  },

  /**
   * Retrive the utility navigation items
   *
   * @param state
   * @returns Utility navigation items
   */
  getUtility: (state: NavState) => {
    return state.utility;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
