const state = () => ({
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
});

const getters = {
  /**
   * Retrive the primary navigation items
   *
   * @param {Object} state
   * @returns {Array}
   */
  getPrimary: (state) => {
    return state.primary;
  },

  /**
   * Retrive the utility navigation items
   *
   * @param {Object} state
   * @returns {Array}
   */
  getUtility: (state) => {
    return state.utility;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
