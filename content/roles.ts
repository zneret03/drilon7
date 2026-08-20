import { z } from 'zod'
import { roleSchema } from './schema'
import type { Role } from '@/types'

/**
 * Employment history, newest first. Every bullet carries a chunk id because
 * every bullet is independently citable by the console.
 *
 * Sourced from the resume and the LinkedIn export. Where the two disagree the
 * longer version is kept. Nothing here is inferred.
 */
const roles: Role[] = z.array(roleSchema).parse([
  {
    org: 'Emapta Global',
    title: 'Senior Software Engineer',
    location: 'Quezon City',
    period: 'April 2026 — Present',
    current: true,
    context: '',
    bullets: [
      {
        id: 'EXP-EM-01',
        text: 'Senior Software Engineer at Emapta Global since April 2026, based in Quezon City — the first role carrying a senior title.'
      },
      {
        id: 'EXP-EM-02',
        text: 'Engagement detail is not yet indexed. Nothing is asserted about this role beyond title, employer, location and start date.'
      }
    ]
  },
  {
    org: 'Find Hope',
    title: 'Software Engineer',
    location: 'Geelong, Australia',
    period: 'May 2025 — April 2026',
    current: false,
    context: '',
    bullets: [
      {
        id: 'EXP-FH-01',
        text: 'Designed and implemented PostgreSQL database architectures, building Entity-Relationship Diagrams to keep the data models scalable and reliable under application load.'
      },
      {
        id: 'EXP-FH-02',
        text: 'Transformed design prototypes into React components, applying modern JavaScript and UI practice to deliver responsive interfaces.'
      },
      {
        id: 'EXP-FH-03',
        text: 'Developed and deployed Node.js APIs for frontend integration — secure, documented endpoints between backend services and client applications.'
      },
      {
        id: 'EXP-FH-04',
        text: 'Collaborated across functions to drive feature delivery, using iterative feedback and goal alignment to keep releases error-free.'
      },
      {
        id: 'EXP-FH-05',
        text: 'Engineered automated workflows: unit testing, linters, and CI/CD pipelines streamlining deployment to staging and production.'
      },
      {
        id: 'EXP-FH-06',
        text: 'Troubleshot complex technical issues, mentored peers, and cleared blockers for the wider team.'
      }
    ]
  },
  {
    org: 'Mashup Garage',
    title: 'Software Developer',
    location: 'Quezon City, Manila',
    period: 'March 2023 — May 2025',
    current: false,
    context:
      'A software development company specialising in Elixir/Phoenix, Ruby on Rails, JavaScript and iOS, based in Manila and Melbourne. Builds its own products, assembles teams for startups and enterprises, and consults.',
    bullets: [
      {
        id: 'EXP-MG-01',
        text: 'Converted Figma designs into functional Next.js components wired to GraphQL for efficient server requests, and prioritised Jira tickets so high-impact work landed first.'
      },
      {
        id: 'EXP-MG-02',
        text: 'Ran client requirement meetings, then built the GraphQL queries, mutations and test suites on the Elixir Phoenix backend that the Next.js frontend consumed.'
      },
      {
        id: 'EXP-MG-03',
        text: 'Wrote unit and integration tests, and authored the GitHub pipeline workflows that gate staging and production deploys on a passing suite.'
      },
      {
        id: 'EXP-MG-04',
        text: 'Worked with QA on feature requirements and edge-case bugs, improving product stability in production.'
      },
      {
        id: 'EXP-MG-05',
        text: 'Unblocked fellow developers through troubleshooting and pairing.'
      }
    ]
  },
  {
    org: 'Senti.AI',
    title: 'Cloud Engineer',
    location: 'Taguig, Manila',
    period: 'June 2022 — February 2023',
    current: false,
    context:
      'The pioneering artificial intelligence company in the Philippines, converting manual processes into AI-supported web and mobile applications.',
    bullets: [
      {
        id: 'EXP-SA-01',
        text: 'Rebuilt the company-wide engineering templates on Fastify, Lit and Terraform, changing how every Senti.AI engineer started a project.'
      },
      {
        id: 'EXP-SA-02',
        text: 'Shipped and supported the SM Philippines BIR 2307 reimbursement platform — OCR digitising more than 50,000 files a month for thousands of employees and accounting staff, on Google Cloud with Angular.js, Express.js and Terraform.'
      },
      {
        id: 'EXP-SA-03',
        text: 'Built and tested REST APIs in Fastify for frontend JSON consumption.'
      }
    ]
  },
  {
    org: 'Alabaster Technologies',
    title: 'Full Stack Engineer and Business Dev Intern',
    location: 'Aklan, Western Visayas',
    period: 'March 2022 — May 2022',
    current: false,
    context:
      'An Aklan-based company behind TakeoutPH, a regional food delivery application serving thousands of people.',
    bullets: [
      {
        id: 'EXP-AT-01',
        text: 'Helped develop the TakeoutPH web application with React and a Node.js backend.'
      },
      {
        id: 'EXP-AT-02',
        text: 'Turned Figma prototypes into working applications with React, Tailwind and Material UI.'
      },
      {
        id: 'EXP-AT-03',
        text: 'Designed the Entity Relationship Diagram and converted the MySQL schema to NoSQL.'
      }
    ]
  },
  {
    org: 'AcadArena',
    title: 'Front-end Engineer, Part-time',
    location: 'Iloilo City',
    period: 'May 2021 — August 2021',
    current: false,
    context:
      'The leading organisation for campus gaming and esports education in the Philippines and Southeast Asia.',
    bullets: [
      {
        id: 'EXP-AA-01',
        text: 'Turned Figma prototypes into a functional Next.js application with Tailwind and Material UI, used by university teams across game platforms.'
      },
      {
        id: 'EXP-AA-02',
        text: 'Held the application to the company responsive standard across breakpoints.'
      },
      {
        id: 'EXP-AA-03',
        text: 'Maintained and extended the existing React and Firebase application.'
      },
      {
        id: 'EXP-AA-04',
        text: 'Worked with the backend developer to keep REST-API integration correct end to end.'
      }
    ]
  },
  {
    org: 'Archdiocese de Jaro',
    title: 'Web Developer',
    location: 'Jaro, Iloilo',
    period: 'April 2020 — August 2020',
    current: false,
    context: 'Custodian of marriage, baptismal, death and confirmation records.',
    bullets: [
      {
        id: 'EXP-AJ-01',
        text: 'Built wireframes and prototypes, then developed them into a responsive web application.'
      },
      {
        id: 'EXP-AJ-02',
        text: 'Designed the archive system storing all records by category with fast search across them.'
      }
    ]
  },
  {
    org: 'Freelance',
    title: 'Software Developer',
    location: 'Iloilo',
    period: 'January 2019 — Present',
    current: true,
    context: '',
    bullets: [
      {
        id: 'EXP-FL-01',
        text: 'Designed and implemented a NoSQL database for a procurement bidding system on Firebase and netlify-lambda.'
      },
      {
        id: 'EXP-FL-02',
        text: 'Implemented UI from design and the backend receiving processes over REST-API.'
      },
      {
        id: 'EXP-FL-03',
        text: 'Built prototypes that became production web and desktop applications.'
      },
      {
        id: 'EXP-FL-04',
        text: 'Built database schemas and REST APIs on Node.js and Firebase services.'
      }
    ]
  }
])

export default roles
