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
    location: 'Greater Boston Area',
    professionalTitle: 'Senior Software Engineer & Technical Lead',
    resume: './billy-grossman-resume.pdf',
    website: 'https://www.billygrossman.com',
  },
  primary: {
    sections: [
      {
        title: 'About',
        content: `<p>I'm Billy. I like solving problems with thoughtful, practical software, and I enjoy the people side of building it just as much. Over the past 15 years, I've worked on everything from customer-facing ecommerce experiences to internal tools and the services behind them.</p>
          <p>These days, much of my work is about making established systems easier to change: untangling legacy applications, building useful integrations, and helping teams find a clear path through complicated requirements. I still love getting hands-on with the code, learning new tools, and helping other developers grow along the way.</p>`,
        details: [],
      },
      {
        title: 'Skills',
        content: `
          <p>I work across the full stack, with a particular interest in the places where good interfaces, reliable services, and real business needs meet.</p>
          <section class="skill-group">
            <h3>Frontend</h3>
            <p>I enjoy the details that make an interface feel easy to use. Most of my recent work is in <span class="text--tag">Vue.js</span>, <span class="text--tag">Nuxt</span>, and <span class="text--tag">TypeScript</span>, and I've also built with <span class="text--tag">React</span>. I care about semantic <span class="text--tag">HTML</span>, responsive <span class="text--tag">CSS/SCSS</span>, <span class="text--tag">WCAG</span> accessibility, and performance. I like creating design systems and component libraries that make future work easier, with build tools such as <span class="text--tag">Vite</span> and <span class="text--tag">Webpack</span> supporting the workflow.</p>
          </section>
          <section class="skill-group">
            <h3>Backend &amp; Cloud</h3>
            <p>I'm comfortable following a problem beyond the browser. I build <span class="text--tag">REST APIs</span> and services with <span class="text--tag">PHP</span>, <span class="text--tag">Python</span>, and <span class="text--tag">Node.js</span>, often backed by <span class="text--tag">MariaDB</span> or another SQL database. On <span class="text--tag">AWS</span>, I've used S3, API Gateway, Lambda, DynamoDB, and EventBridge to connect systems and move functionality out of legacy applications. I use <span class="text--tag">Docker</span> and CI/CD workflows to make development and deployment more dependable.</p>
          </section>
          <section class="skill-group">
            <h3>CMS &amp; Platforms</h3>
            <p>I've spent a lot of time making content and business platforms work better together. In <span class="text--tag">WordPress</span> and <span class="text--tag">Drupal</span>, I've built custom themes and plugins, modeled content, and shaped workflows around the people who publish it. I've also worked with <span class="text--tag">Salesforce</span> objects and APIs to connect those experiences to business processes.</p>
          </section>
          <section class="skill-group">
            <h3>Leadership &amp; Workflow</h3>
            <p>I like working with stakeholders to turn a broad idea into a plan a team can build. I've led work in <span class="text--tag">Agile/Scrum</span> teams, reviewed code, mentored developers, and helped coordinate changes across teams. I also use <span class="text--tag">AI-assisted development</span> and LLM tools to explore ideas, debug, document decisions, and work through complex tasks.</p>
          </section>
        `,
        details: [],
      },
    ],
  },
  tertiary: {
    sections: [
      {
        title: 'About This Site',
        content: `
            <p>
              I built this site with Vue and deploy it to AWS S3. The <a href="https://github.com/billygrossman/billygrossman.com?utm_source=billygrossman.com&amp;utm_medium=referral" target="_blank">source code is on GitHub</a>.
            </p>
            <p>Explore the <a href="/components">component library</a> for a closer look at how I structure Vue components.</p>
          `,
        details: [],
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
