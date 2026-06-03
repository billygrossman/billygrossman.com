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
};

const state: PositionsState = {
  positions: [
    {
      company: 'InsureMyTrip',
      description: false,
      endDate: 'PRESENT',
      jobTitle: 'Lead Software Engineer',
      location: 'Warwick RI',
      responsibilities: [
        'Lead scrum team in project planning, technical decision making, and delivery of business-critical applications',
        'Provide architecture guidance across frontend, API, and cloud-based systems while remaining hands-on as an individual contributor',
        'Design and implement maintainable solutions using technologies such as Vue.js, TypeScript, PHP, Python, MariaDB, and AWS',
        'Act as a liaison to manage cross-team dependencies, align implementation details, and reduce delivery risk',
        'Regularly meet with stakeholders to prioritize work, clarify requirements, and translate business needs into engineering plans',
        'Mentor developers through code reviews, technical guidance, and day-to-day support',
      ],
      startDate: 'DECEMBER 2019',
    },
    {
      company: 'InsureMyTrip',
      description: false,
      endDate: 'DECEMBER 2019',
      jobTitle: 'Senior Software Engineer',
      location: 'Warwick RI',
      responsibilities: [
        'Work in a full stack role using technologies such as Vue.js, PHP, Python, MariaDB, and Javascript',
        'Architect front end solutions for company’s proprietary e-commerce recommendation engine',
        'Architect and implement solutions to break up existing monolith',
        'Mentor junior developers',
        'Lead team of developers in building of various ongoing projects and new web applications',
        'Work in an Agile environment – both Scrum and Kanban based',
      ],
      startDate: 'SEPTEMBER 2017',
    },
    {
      company: 'Exnihilo Inc.',
      description: false,
      endDate: 'SEPTEMBER 2017',
      jobTitle: 'Senior Web Developer',
      location: 'Providence RI',
      responsibilities: [
        'Rapid prototyping of mobile and web applications using hybrid technologies such as Ionic framework, AngularJS, Node.js and MongoDB',
        'Provide mentorship, training, and support to junior developers',
        'Provide technical recommendations and input for upcoming projects',
        'Create demonstrations and proof of concepts for clients while operating under tight deadlines',
        'Build strong customer relationships and develop maintenance</li> ',
      ],
      startDate: 'JANUARY 2014',
    },
    {
      company: 'Exnihilo Inc.',
      description: false,
      endDate: 'JANUARY 2014',
      jobTitle: 'Web Developer',
      location: 'Providence RI',
      responsibilities: [
        'Theme sites using responsive design',
        'Using a graphic designers layered Photoshop and Illustrator files, build and theme websites, mobile sites, and  mini applications',
        'Maintain and extend HTML, PHP, and Javascript driven websites with new features and functionality',
        'Manage maintenance accounts and small projects including feature development, expectations,timelines, and budget without the support of management',
        'Train clients in web technologies, such as Drupal and Google Analytics',
        'Participate with the team in initial design discussions, wireframes, and requirements for all projects',
        'Assist with email marketing and newsletters for clients and the employer',
        'Tagging, goal setting, and event tracking in Google Analytics',
      ],
      startDate: 'JULY 2011',
    },
    {
      company: 'Bartlett Interactive',
      description: false,
      endDate: 'PRESENT',
      jobTitle: 'Contract Application Engineer',
      location: 'Concord MA',
      responsibilities: [
        'Build and develop Drupal driven CMS websites',
        'Provide estimates for upcoming projects',
        'Provide mentorship, training, and support to junior developers',
        'Assist in scoping upcoming projects',
        'User support and training',
      ],
      startDate: 'FEBRUARY 2015',
    },
    {
      company: 'Who Goes First, Today?',
      description: `<p>
        <a href="https://whogoesfirst.today/" target="_blank">Who Goes First, Today?</a>
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
    {
      company: 'TinnBin',
      description: `<p>TinnBin started out as a labor of love for me, but it quickly became an unsustainable personal project.
        I really enjoyed building everything about this application, and it exposed me to unfamiliar
        territory during the process.</p>
        <p>During the development of this concept, I was afforded the opportunity to meet with investors, branding specialists, and marketing gurus.
        In the end, I still love the idea, and the experience helped me build a number of new talents.
        </p>
        <p>I've since archived the project, but keep alive <a href="http://www.tinnbin.com.s3-website-us-east-1.amazonaws.com/" target="_blank">the promotional
        website</a> as a portfolio piece.</p>
        `,
      endDate: 'PRESENT',
      jobTitle: 'Founder & Creator',
      location: 'Taunton MA',
      responsibilities: [
        'Build RESTful API using NodeJS and MongoDB to be consumed by various Web and Mobile Applications',
        'Build hybrid mobile application using Ionic framework for Android and iOS',
        'Create and build product brand',
        'Deploy mobile application to both App store and Google Play',
        'Create targeted Facebook and Google Ad campaigns to drive users to download mobile application',
      ],
      startDate: '2015',
    },
  ],
};

export type Getters = {
  getPositions(state: PositionsState): Position[];
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
};

export default {
  namespaced: true,
  state,
  getters,
};
