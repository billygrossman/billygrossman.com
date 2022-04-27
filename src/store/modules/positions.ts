import { GetterTree } from 'vuex';

export type Position = {
  company: string;
  description: string | boolean;
  endDate: string;
  jobTitle: string;
  location: string;
  responsibilities: Array<string>;
  startDate: string;
};

export type PositionsState = {
  positions: Array<Position>;
};

const state: PositionsState = {
  positions: [
    {
      company: 'InsureMyTrip',
      description: false,
      endDate: 'PRESENT',
      jobTitle: 'Senior Software Engineer',
      location: 'Warwick RI',
      responsibilities: [
        'Lead scrum team in project planning and decision making',
        'Act as a liaison to manage cross-team dependencies',
        'Regularly meet with stakeholders to prioritize and outline work',
        'Team mentorship',
      ],
      startDate: 'DECEMBER 2019',
    },
    {
      company: 'InsureMyTrip',
      description: false,
      endDate: 'DECEMBER 2019',
      jobTitle: 'Web Applications Developer',
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
  getPositions(state: PositionsState): Array<Position>;
};

export const getters: GetterTree<PositionsState, any> & Getters = {
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
