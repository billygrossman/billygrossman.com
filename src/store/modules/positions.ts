import { GetterTree } from 'vuex';

export type Position = {
  company: string;
  description: string | false;
  endDate: string;
  jobTitle: string;
  location: string;
  responsibilities: string[];
  startDate: string;
};

export type PositionsState = {
  positions: Position[];
  projects: Position[];
};

const state: PositionsState = {
  positions: [
    {
      company: 'InsureMyTrip',
      description: false,
      endDate: 'PRESENT',
      jobTitle: 'Senior / Lead Software Engineer',
      location: 'Warwick RI',
      responsibilities: [
        'Design and maintain full-stack applications using PHP, Vue.js, JavaScript/TypeScript, Python, MariaDB, REST APIs, and AWS',
        'Architect event-driven services using AWS EventBridge and queues to move functionality out of a legacy ecommerce application',
        'Build integrations with CRM platforms, internal systems, and content platforms using APIs and custom WordPress plugins',
        'Lead frontend architecture for customer-facing ecommerce experiences and internal business tools',
        'Modernize legacy applications and break apart monolithic patterns while keeping existing systems stable',
        'Establish development standards, review code, mentor developers, and turn stakeholder requirements into implementation plans',
        'Use AI-assisted and agentic development tools for implementation, debugging, code review, and complex development tasks',
      ],
      startDate: 'DECEMBER 2017',
    },
    {
      company: 'Exnihilo Inc.',
      description: false,
      endDate: 'SEPTEMBER 2017',
      jobTitle: 'Senior Web Developer',
      location: 'Providence RI',
      responsibilities: [
        'Rapidly prototyped mobile and web applications using Ionic, AngularJS, Node.js, and MongoDB',
        'Provided technical recommendations, project input, mentorship, and support for junior developers',
        'Created demonstrations and proof of concepts for clients under tight deadlines',
        'Built strong client relationships through project delivery, support, and maintenance work',
      ],
      startDate: 'JANUARY 2011',
    },
    {
      company: 'Bartlett Interactive',
      description: false,
      endDate: '2022',
      jobTitle: 'Contract Web Developer',
      location: 'Concord MA',
      responsibilities: [
        'Built and maintained Drupal-driven CMS websites and custom web experiences',
        'Provided estimates, scoping support, mentorship, user training, and client-facing technical support',
      ],
      startDate: 'FEBRUARY 2015',
    },
  ],
  projects: [
    {
      company: 'Who Goes First, Today?',
      description: `<p>
        <a href="https://whogoesfirst.today/?utm_source=billygrossman.com&amp;utm_medium=referral" target="_blank">Who Goes First, Today?</a>
        is a small personal web app I built to make everyday first-turn decisions a little easier and more fun.
        It generates lightweight prompts with configurable categories, seasonal themes, color modes, and a simple share-friendly experience.
        </p>`,
      endDate: 'LIVE',
      jobTitle: 'Creator & Developer',
      location: 'Personal Project',
      responsibilities: [
        'Designed and built a focused decision-helper application with a playful, approachable user experience',
        'Created configurable content categories for casual, silly, professional, neutral, kids, and family use cases',
        'Implemented theme and color mode settings to make a small utility feel polished, flexible, and reusable',
        'Maintained the project as a live personal product with versioned updates, contact pathways, and share functionality',
      ],
      startDate: 'PERSONAL PROJECT',
    },
  ],
};

export type Getters = {
  getPositions(state: PositionsState): Position[];
  getProjects(state: PositionsState): Position[];
};

export const getters: GetterTree<PositionsState, unknown> & Getters = {
  /**
   * Retrieve position data
   *
   * @param {Object} state
   * @returns {Array}
   */
  getPositions: (state) => {
    return state.positions;
  },
  getProjects: (state) => {
    return state.projects;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
