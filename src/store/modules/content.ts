import { GetterTree } from 'vuex';

export type Contact = {
  alumniOf: string;
  email: string;
  firstName: string;
  gender: string;
  image: string;
  lastName: string;
  links: string[];
  location: string;
  professionalTitle: string;
  resume: string;
  website: string;
};

export type ContentSection = {
  title: string;
  content: string;
  details: string[];
};

export type ContentGroup = {
  sections: ContentSection[];
};

export type ContentState = {
  contact: Contact;
  primary: ContentGroup;
  tertiary: ContentGroup;
};

export const state: ContentState = {
  contact: {
    alumniOf: 'New England Institute of Technology',
    email: 'billy.grossman@gmail.com',
    gender: 'male',
    firstName: 'Billy',
    image: 'https://www.billygrossman.com/headshot.jpeg',
    lastName: 'Grossman',
    links: [
      'https://github.com/billygrossman/',
      'https://www.linkedin.com/in/billygrossman',
    ],
    location: 'Greater Boston Area (Remote)',
    professionalTitle: 'Software Engineer',
    resume: './billy-grossman-resume.pdf',
    website: 'https://www.billygrossman.com',
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
        content: `I am a full stack developer with a strong focus on frontend architecture, user-facing applications, API design, and cloud-based systems. I enjoy building thoughtful interfaces, maintainable component systems, and practical serverless solutions that help teams move with confidence.`,
        details: [
          'Highly skilled in creating semantic, performant <span class="text--tag">HTML</span>, <span class="text--tag">CSS</span>, and responsive application interfaces',
          'Experienced with <span class="text--tag">JavaScript</span> and <span class="text--tag">TypeScript</span> frameworks including <span class="text--tag">Vue</span>, <span class="text--tag">Nuxt</span>, and <span class="text--tag">React</span>, plus templating languages such as <span class="text--tag">Pug</span> and <span class="text--tag">Jinja2</span>',
          'Comfortable with modern frontend build workflows using <span class="text--tag">Vite</span>, <span class="text--tag">Webpack</span>, <span class="text--tag">NPM</span>, <span class="text--tag">Yarn</span>, <span class="text--tag">Composer</span>, and <span class="text--tag">Git</span>',
          'Skilled in creating <span class="text--tag">Design Systems</span>, <span class="text--tag">Component Libraries</span>, prototypes, reusable patterns, and style guides',
          'Strong advocate for <span class="text--tag">WCAG</span> accessibility standards, inclusive UX, semantic markup, and frontend performance',
          'Experienced with API design, RESTful services, and backend development using <span class="text--tag">PHP</span>, <span class="text--tag">Python</span>, <span class="text--tag">Node.js</span>, <span class="text--tag">SQL</span>, and <span class="text--tag">MariaDB</span>',
          'Proficient with <span class="text--tag">WordPress</span> development, CMS architecture, content modeling, custom themes, and maintainable editorial workflows',
          'Experienced with <span class="text--tag">Salesforce</span> objects, API usage, data integrations, and translating business processes into reliable platform-connected workflows',
          'Proficient with <span class="text--tag">AWS</span> cloud services including <span class="text--tag">S3</span>, <span class="text--tag">API Gateway</span>, <span class="text--tag">Lambda</span>, <span class="text--tag">DynamoDB</span>, and <span class="text--tag">AWS SAM</span>',
          'Familiar with containerization, local development, and deployment workflows using <span class="text--tag">Docker</span> and CI/CD practices',
          'Pragmatic user of <span class="text--tag">AI-assisted development</span> and <span class="text--tag">LLM</span> tools for prototyping, code review support, documentation, debugging, and developer productivity',
          'Collaborative technical lead with experience in Agile planning, cross-team communication, stakeholder alignment, and mentorship',
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
          'Continue expanding <span class="text--tag">TypeScript</span> coverage and type safety',
          'Implement robust grid layout system',
          'Add more text and typography helper classes',
        ],
      },
    ],
  },
};

export type Getters = {
  getPrimaryContent(state: ContentState): ContentGroup;
  getContact(state: ContentState): Contact;
  getContactEmail(state: ContentState): string;
  getContactFullName(state: ContentState): string;
  getTertiaryContent(state: ContentState): ContentGroup;
};

export const getters: GetterTree<ContentState, unknown> & Getters = {
  /**
   * Retrive primary content sections
   *
   * @param state
   * @returns Primary content
   */
  getPrimaryContent: (state: ContentState) => {
    return state.primary;
  },

  /**
   * Retrive contact information
   *
   * @param state
   * @returns Contact data
   */
  getContact: (state: ContentState) => {
    return state.contact;
  },

  /**
   * Helper to retrieve contact email
   *
   * @param state
   * @returns Contact email address
   */
  getContactEmail: (state: ContentState) => {
    return state.contact.email;
  },

  /**
   * Helper to get full name
   *
   * @param state
   * @returns Contacts full name
   */
  getContactFullName: (state: ContentState) => {
    return `${state.contact.firstName} ${state.contact.lastName}`;
  },

  /**
   * Retrive tertiary content
   *
   * @param state
   * @returns Tertiary content data
   */
  getTertiaryContent: (state: ContentState) => {
    return state.tertiary;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
