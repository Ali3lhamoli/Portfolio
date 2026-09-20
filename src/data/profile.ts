/**
 * Single source of truth for every piece of content on the site.
 * Everything here is transcribed from Ali_Alhamoli(CV).pdf — including the
 * project URLs, which were recovered from the PDF's link annotations.
 * Nothing in this file is invented. If it is not in the CV, it is not here.
 */

export type Social = {
  label: string;
  href: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'mail' | 'whatsapp';
};

export type Bullet = { lead?: string; text: string };

export type Role = {
  company: string;
  title: string;
  arrangement: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  bullets: Bullet[];
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  stack: string[];
  bullets: string[];
  metrics: { value: string; label: string }[];
  links: { label: string; href: string }[];
};

export const profile = {
  name: 'Ali Al-Hamoli',
  title: 'Full-Stack Software Engineer',
  location: 'Cairo, Egypt',
  /** First professional role — used to derive years of experience so it never goes stale. */
  careerStart: '2024-04',

  eyebrow: ['Ali Al-Hamoli', 'Full-Stack Software Engineer', 'Cairo, Egypt'],

  /** Hero headline. `marker` is the phrase that receives the highlight treatment. */
  headline: {
    lines: ['AI-powered platforms,', 'built and shipped'],
    marker: 'end to end.',
  },

  tagline:
    'Mid-level full-stack engineer with a product-ownership mindset — from business requirements and system design through to deployment.',

  /** Professional Summary, split into paragraphs for the About section. */
  summary: [
    'Results-driven mid-level full-stack software engineer with a strong product-ownership mindset. Experienced in managing the complete software lifecycle — from analyzing business requirements and system design to end-to-end feature implementation and deployment.',
    'Highly adept at integrating external systems, complex payment gateways, and third-party AI services. Actively leverages advanced AI tools (Claude Code, Cursor, GitHub Copilot) as daily thinking partners to optimize performance, accelerate development, and ensure secure, clean code architecture.',
    'Proven track record of delivering scalable AI-powered solutions, conversational workflows, and enterprise-grade platforms in fast-paced startup environments.',
  ],

  /**
   * Phrases in `summary` that get the highlighter treatment. These are
   * matched against the text above — they never replace or reword it.
   */
  summaryHighlights: [
    'complete software lifecycle',
    'complex payment gateways',
    'Claude Code, Cursor, GitHub Copilot',
    'enterprise-grade platforms',
  ],

  contact: {
    email: 'alialhamoli475@gmail.com',
    phoneDisplay: '0115 191 5789',
    phoneIntl: '+201151915789',
    whatsapp: 'https://wa.me/201151915789',
    site: 'https://ali3lhamoli.vercel.app/',
    cv: '/Ali_Alhamoli(CV).pdf',
  },

  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/Ali3lhamoli',
      handle: 'Ali3lhamoli',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ali-alhamoli',
      handle: 'ali-alhamoli',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:alialhamoli475@gmail.com',
      handle: 'alialhamoli475@gmail.com',
      icon: 'mail',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/201151915789',
      handle: '+20 115 191 5789',
      icon: 'whatsapp',
    },
  ] as Social[],

  /** Every figure below is stated outright in the CV. */
  stats: [
    { value: '3', label: 'Companies' },
    { value: '60%', label: 'of Tali V3 core architected' },
    { value: '30%', label: 'Faster API response' },
  ],

  experience: [
    {
      company: 'Stitch',
      title: 'Full-Stack Developer / Product Owner',
      arrangement: 'Hybrid',
      location: 'Heliopolis, Cairo',
      start: 'Aug 2025',
      end: 'Present',
      current: true,
      bullets: [
        {
          lead: 'WhatsApp & AI Chatbot Solutions',
          text: 'Transitioned to the messaging team to engineer interactive WhatsApp Flows, targeted campaigns, and AI-driven chatbots for enterprise real estate giants including Emaar, SODIC, TMG, El Gouna, and Town Writers.',
        },
        {
          lead: 'Client Dashboards & Analytics',
          text: 'Built dedicated Laravel/React dashboards integrated directly with WhatsApp services, empowering clients to monitor AI chatbot interactions, survey responses, and user analytics in real time.',
        },
        {
          lead: 'Tali Platform Evolution (V1 to V3)',
          text: 'Initially stabilized a legacy PHP/jQuery RSVP platform, ensuring zero downtime for live users. Led the V2 rebuild using Laravel and React, integrating a Gemini-powered AI assistant utilizing strict documentation-based prompts to safely answer user queries without exposing core databases.',
        },
        {
          lead: 'System Scalability (V3)',
          text: 'Spearheaded the transition to a comprehensive event and restaurant ticketing system using Nest.js and React. Architected and developed over 60% of this core system, which currently serves major GNK Group clients (Kikis, Samara, Mazeej, Human Figures, byGanz, Club M House, Stanley).',
        },
      ],
    },
    {
      company: 'Dyno Tech',
      title: 'Full-Stack Developer',
      arrangement: 'Hybrid',
      location: 'Tanta, Egypt',
      start: 'Mar 2025',
      end: 'Jul 2025',
      current: false,
      bullets: [
        {
          text: 'Led the end-to-end implementation of robust RESTful APIs using Laravel and MySQL, powering web and mobile applications across 5+ active client projects.',
        },
        {
          text: 'Integrated seamless third-party services including complex payment gateways and external APIs, ensuring robust data synchronization and high availability.',
        },
        {
          text: 'Architected role-based access control with Laravel Sanctum, securing multiple user roles, and optimized database queries to eliminate critical N+1 bottlenecks, reducing API response times by 30%.',
        },
      ],
    },
    {
      company: 'DeveTechno Company',
      title: 'Full-Stack Developer',
      arrangement: 'On-site',
      location: 'Tanta, Egypt',
      start: 'Apr 2024',
      end: 'Feb 2025',
      current: false,
      bullets: [
        {
          text: 'Engineered the complete API layer for multiple mobile applications, taking full ownership of features from backend architecture to frontend integration requirements.',
        },
        {
          text: 'Established SOLID principles and Clean Architecture standards across the codebase, ensuring modularity and facilitating easier integration with external services and cloud functions.',
        },
        {
          text: 'Integrated Firebase Cloud Messaging for real-time push notifications, significantly reducing backend server load and improving end-user engagement.',
        },
      ],
    },
  ] as Role[],

  projects: [
    {
      slug: 'enterprise-ai-whatsapp',
      name: 'Enterprise AI WhatsApp Services',
      year: '2026',
      summary: 'AI chatbots and conversational flows for top-tier real estate developers.',
      stack: ['Laravel', 'React', 'Generative AI', 'WhatsApp API'],
      bullets: [
        'Engineered scalable AI-powered WhatsApp chatbots and dynamic conversational flows for top-tier real estate developers (Emaar, SODIC, TMG, Town Writers, El Gouna, Al Ahly Sabbour).',
        'Developed private client dashboards to visualize chatbot interactions, extract survey data, and analyze user engagement.',
        'Implemented generative AI fallbacks to intelligently handle out-of-flow user messages, drastically improving UX.',
      ],
      metrics: [{ value: '6', label: 'Enterprise developers' }],
      links: [],
    },
    {
      slug: 'tali',
      name: 'Tali Events & RSVP Platform',
      year: '2025 — 2026',
      summary: 'Re-engineered across three generations, from legacy PHP to a Nest.js ecosystem.',
      stack: ['Nest.js', 'Laravel', 'React', 'Gemini AI'],
      bullets: [
        'Progressively re-engineered the platform across three major iterations, transitioning from a legacy native PHP architecture to a modern Laravel/React stack, and ultimately to a highly scalable Nest.js ecosystem.',
        'Integrated a context-aware Gemini AI chatbot using secure, file-based prompt engineering to assist users without exposing sensitive database architectures.',
        'Delivered comprehensive dashboards to manage complex event logistics, ticket QR validation, and restaurant reservations.',
      ],
      metrics: [
        { value: '3', label: 'Major versions' },
        { value: '60%', label: 'of V3 core built' },
        { value: '7', label: 'GNK Group clients' },
      ],
      links: [
        { label: 'V1', href: 'https://events.itstali.com/' },
        { label: 'V2', href: 'https://newevents.itstali.com/' },
        { label: 'V3', href: 'https://restaurants.itstali.com/' },
      ],
    },
    {
      slug: 'pnt-delivery',
      name: 'PNT Delivery Platform',
      year: '2025',
      summary:
        'Multi-tenant delivery management with role-separated driver and customer interfaces.',
      stack: ['Laravel', 'MySQL', 'REST APIs', 'Blade'],
      bullets: [
        'Architected the backend for a multi-tenant delivery management system, featuring role-separated interfaces for drivers and customers with real-time task assignments and automated tracking.',
      ],
      metrics: [{ value: '2', label: 'Role-separated interfaces' }],
      links: [{ label: 'Live', href: 'https://oms.pntexpress.com/' }],
    },
    {
      slug: 'abtalna',
      name: 'Abtalna Job Platform',
      year: '2025',
      summary: 'API infrastructure for a Flutter-based job marketplace.',
      stack: ['Laravel', 'MySQL', 'REST APIs'],
      bullets: [
        'Designed a robust API infrastructure for a Flutter-based job marketplace, supporting seamless job discovery, application workflows, and operational control panels for company management.',
      ],
      metrics: [],
      links: [{ label: 'Live', href: 'https://abtalna.dynootech.com/' }],
    },
  ] as Project[],

  skills: [
    {
      group: 'Backend',
      items: [
        'PHP',
        'Laravel',
        'Nest.js',
        'Redis',
        'RESTful APIs',
        'Filament',
        'C++',
        'SQL',
        'Payment Integrations',
        'Swagger',
        'JWT',
        'Firebase',
      ],
    },
    {
      group: 'Frontend',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'jQuery',
        'HTML',
        'CSS',
        'Ajax',
        'Tailwind CSS',
        'Bootstrap',
        'MUI',
      ],
    },
    {
      group: 'AI Tools & Integrations',
      items: [
        'Claude Code',
        'Cursor',
        'GitHub Copilot',
        'Gemini API',
        'OpenAI',
        'Prompt Engineering',
      ],
    },
    {
      group: 'Messaging & Payments',
      items: [
        'WhatsApp Business API',
        'WhatsApp Flows',
        'AI Chatbots',
        'Stripe',
        'Paymob',
        'Geidea',
        'Paytabs',
      ],
    },
    {
      group: 'Databases & DevOps',
      items: [
        'MySQL',
        'PostgreSQL',
        'Schema Design',
        'Indexing',
        'Migrations',
        'Query Optimization',
        'Git',
        'GitHub',
        'GitLab',
        'Docker',
        'CI/CD',
        'Jira',
        'Postman',
      ],
    },
    {
      group: 'Architecture',
      items: [
        'OOP',
        'Data Structures',
        'Algorithms',
        'System Design',
        'Design Patterns',
        'SOLID',
        'MVC',
        'Clean Architecture',
        'Agile',
        'Unit Testing',
      ],
    },
  ],

  education: {
    institution: 'Tanta Higher Institute of Engineering and Technology',
    degree: 'Bachelor of Communication and Computer Engineering',
    note: 'Graduation Project: Grade A+',
    start: 'Sep 2019',
    end: 'Jul 2024',
    location: 'Tanta, Egypt',
  },

  languages: [
    { language: 'Arabic', level: 'Native' },
    { language: 'English', level: 'Professional Working Proficiency' },
  ],

  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ],
};

/** Whole years since the first professional role — keeps the stat accurate over time. */
export function yearsOfExperience(): number {
  const [y, m] = profile.careerStart.split('-').map(Number);
  const start = new Date(y, m - 1, 1);
  const elapsed = Date.now() - start.getTime();
  return Math.max(1, Math.floor(elapsed / (365.25 * 24 * 3600 * 1000)));
}
