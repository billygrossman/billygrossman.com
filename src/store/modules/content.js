const state = () => ({
  contact: {
    firstName: 'Billy',
    lastName: 'Grossman',
    professionalTitle: 'Software Engineer',
    location: 'Greater Boston Area (Remote)',
    email: 'billy.grossman@gmail.com',
    website: 'billygrossman.com',
    resume: './billy-grossman-resume.pdf',
  },
  primary: {
    sections: [
      {
        title: 'About',
        content: `<p>
                I'm Billy, and I'm a problem solver, a team player, and a communicator. I’m
                excited about all things related to web, engineering, and application
                development. I've designed online solutions and architected projects of
                various shapes and sizes while working with different types of businesses.
                No two projects are the same, therefore I'm constantly improving my
                abilities, adding new tools to my toolkit, and staying up to date on the
                latest technologies and best practices.
                </p>`,
        details: [],
      },
      {
        title: 'Skills',
        content: `I am a full stack developer focusing more on frontend technology and user facing applications. I also enjoy API design and cloud architecture.`,
        details: [
          'Highly skilled in creating performant <span class="text--tag">HTML</span>, <span class="text--tag">CSS</span>',
          'Experienced with JavaScript Frameworks (<span class="text--tag">Vue</span>, <span class="text--tag">Nuxt</span>, <span class="text--tag">React</span>) and Templating Languages (<span class="text--tag">Pug</span>, <span class="text--tag">Jinja2</span>)',
          'Passionate about <span class="text--tag">CSS</span> Methodologies (I lean to <span class="text--tag">BEM</span>) and CSS Preprocessors (leaning hard at <span class="text--tag">SCSS</span>)',
          'Proficient with Task Runners / Build Tools (<span class="text--tag">WebPack</span>, <span class="text--tag">Grunt</span>, <span class="text--tag">Gulp</span>) and Package Managers (<span class="text--tag">NPM</span>, <span class="text--tag">Yarn</span>, <span class="text--tag">Composer</span>) and <span class="text--tag">Git</span> Version Control Systems',
          'Skilled in creating Design Systems, <span class="text--tag">Component Libraries</span>, Prototypes and Style Guides',
          'Advocate for <span class="text--tag">WCAG Website Compliance Standards</span> and Accessibility for all users',
          'Proficient with cloud technologies (<span class="text--tag">AWS</span>) and containerization (<span class="text--tag">Docker</span>)',
        ],
      },
    ],
  },
  tertiary: {
    sections: [
      {
        title: 'More...',
        content: `
            <h3>This Website</h3>
            <p>
              The source code for this personal web application <a href="https://github.com/billygrossman/billygrossman.com" target="_blank">
              is available on Github</a>. It's a fairly simple application, built using <span class="text--tag">Vue</span> and deployed to <span class="text--tag">AWS S3</span>.
              I will continue to make improvements and updates to this application as it can serve as a clean frontend boilerplate.
            </p>
            <p>You can also check out the <a href="/components">Design Guide/Component library</a> to see how I like to structure <span class="text--tag">Vue</span> components.</p>
            <p>Here are some features that are on deck:</p>
          `,
        details: [
          'Move content to cloud document store',
          'Update to use <span class="text--tag">Typescript</span>',
          'Implement robust grid layout system',
          'Add more text and typography helper classes',
        ],
      },
    ],
  },
});

const getters = {
  /**
   * Retrive primary content sections
   *
   * @param {Object} state
   * @returns {Array}
   */
  getPrimaryContent: (state) => {
    return state.primary;
  },

  /**
   * Retrive contact information
   *
   * @param {Object} state
   * @returns {Array}
   */
  getContact: (state) => {
    return state.contact;
  },

  /**
   * Helper to retrieve contact email
   *
   * @param {Object} state
   * @returns {String}
   */
  getContactEmail: (state) => {
    return state.contact.email;
  },

  /**
   * Helper to get full name
   *
   * @param {Object} state
   * @returns {String}
   */
  getContactFullName: (state) => {
    return `${state.contact.firstName} ${state.contact.lastName}`;
  },

  /**
   * Retrive tertiary content
   *
   * @param {Object} state
   * @returns {Array}
   */
  getTertiaryContent: (state) => {
    return state.tertiary;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
