import { z } from 'zod'
import { projectSchema, archiveProjectSchema } from './schema'
import type { ArchiveProject, Project } from '@/types'

/**
 * Every substantial project, newest first. `featured` decides what reaches the
 * home page; the rest stay browsable and citable through the corpus.
 *
 * `source: ''` means the repository is private (the velquortech work), and
 * `demo: ''` means there is no publicly reachable URL — both stated, never
 * faked. See `.claude/action-items.md` for the deployment gaps.
 *
 * The 2026 entries come from the velquortech portfolio's own project data; the
 * iLokal entries are read off the ilokal-web repository. Nothing here is
 * inferred beyond what those sources state.
 */
export const projects: Project[] = z.array(projectSchema).parse([
  {
    id: 'PRJ-ILOKAL-01',
    slug: 'ilokal',
    timeline: 'In beta, 2026',
    title: 'iLokal',
    blurb:
      'A discovery platform for verified Ilonggo shops across seven Iloilo City districts — the deals they are running today, and a six-character code you show at the counter. No delivery fee, because you walk there.',
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Supabase + PostGIS',
      'Tailwind v4',
      'Zod'
    ],
    source: '',
    demo: 'https://ilokal.shop',
    image: '/image/ilokal.jpg',
    featured: true,
    headline: 'No delivery fee, because you walk there',
    highlights: [
      {
        id: 'PRJ-ILOKAL-H1',
        text: 'The counter moment, not a delivery flow: a shop deal is redeemed by showing a six-character server-generated code to the cashier in person, which is the whole difference between iLokal and a delivery app.'
      },
      {
        id: 'PRJ-ILOKAL-H2',
        text: 'Proximity search over seven Iloilo City districts, from La Paz to Arevalo, with a craving switcher that re-deals the matching shops as the query changes. Geography runs on Supabase with PostGIS.'
      },
      {
        id: 'PRJ-ILOKAL-H3',
        text: 'A business side as well as a customer side: multi-branch dashboard, products and menus with peso pricing, coupons and limited-time deals, redemption and follower analytics, and a Verified badge issued after document review.'
      },
      {
        id: 'PRJ-ILOKAL-H4',
        text: 'The landing page animates through CSS view-timeline rules rather than a motion library, because motion writes its initial opacity into the server HTML and the page rendered blank without JavaScript. A test suite guards the regression.'
      },
      {
        id: 'PRJ-ILOKAL-H5',
        text: 'Shipped with error reporting across server, edge and browser, feature flags gating unreleased surfaces, and a frozen dependency list — no package is added without an explicit case for it.'
      }
    ],
    overview: {
      client: 'velquortech — own product, currently in beta',
      industry: 'Local commerce & discovery · Iloilo City',
      services: [
        'Verified shop directory across seven districts',
        'Proximity search with a craving switcher',
        'Deals with in-person code redemption',
        'Multi-branch business dashboard',
        'Document-review verification and analytics'
      ],
      // Challenge and solution are drawn from the ilokal-web landing copy and
      // the section doc comments in app/home/components/landing. Nothing added.
      challenge: {
        id: 'PRJ-ILOKAL-CH',
        text: 'The best Ilonggo shops are not the ones that rank. A small roastery in Molo with no listing, no reviews and no ad budget is invisible next to a chain, and the delivery apps that do carry small merchants take a cut and a delivery fee for a shop that is a ten-minute walk away. Merchants on the other side had no way to publish today\u2019s prices, run a deal, or prove they were a real business.'
      },
      solution: {
        id: 'PRJ-ILOKAL-SOL',
        text: 'iLokal is a directory built around the counter rather than the courier. Shops are verified after document review, publish products and menus with peso pricing, and run coupons and limited-time deals; a customer finds them by district or by craving and redeems a deal by showing a six-character server-generated code to the cashier in person. Nothing is delivered, so nothing is charged for delivery \u2014 which is also what keeps the merchant\u2019s margin intact.'
      },
      gallery: []
    }
  },
  {
    id: 'PRJ-PICKLE-01',
    slug: 'pickleball-district',
    timeline: 'In active development, 2026',
    title: 'Pickleball District',
    blurb:
      'A court-and-queue system for an indoor pickleball club in Iloilo City. Players hold a real position in a live queue, claim or stack onto courts, and pull in the friends they follow, while the front desk runs matches, bookings and player data from one dashboard.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    source: '',
    demo: '',
    image: '/image/pickleball-district.png',
    featured: true,
    headline: 'Retires the whiteboard queue',
    highlights: [
      {
        id: 'PRJ-PICKLE-H1',
        text: 'Replaces the whiteboard queue with a live, self-service one players can watch from the wall display or their phone, with 20-minute rotations that end and re-queue automatically.'
      },
      {
        id: 'PRJ-PICKLE-H2',
        text: 'Friend follow and court invites make matchmaking social rather than administrative, so players who arrive together are not split across courts.'
      },
      {
        id: 'PRJ-PICKLE-H3',
        text: 'VIP courts and coaching sessions are reserved and paid online against real availability, returning a booking reference instead of a line in a notebook.'
      },
      {
        id: 'PRJ-PICKLE-H4',
        text: 'Every match, player and transaction is recorded rather than erased at close, and match duration, opening hours and payment hold windows are configurable by the club.'
      }
    ],
    overview: {
      client: 'Pickleball District, Iloilo City',
      industry: 'Sports & Recreation · Club Operations Software',
      services: [
        'Live queue and court-status display',
        'Player accounts with follow and invite-to-court',
        'VIP court booking with online payment',
        'Front-desk admin dashboard',
        'Player and match data tracking'
      ],
      challenge: {
        id: 'PRJ-PICKLE-CH',
        text: 'Open-play pickleball runs on a whiteboard. Names go in a column, a staff member calls the next four when a court frees up, and everyone else stands around guessing the wait. It breaks the moment the club gets busy: turns get skipped, friends who came together get split across courts, walk-ins argue over position, and nothing about who played, how long, or how often survives the session. Private court rentals and coaching slots lived in a separate notebook, double-booked as often as not.'
      },
      solution: {
        id: 'PRJ-PICKLE-SOL',
        text: 'The club becomes one live system. Players hold a real queue position they can watch from the wall display or their phone, then claim an open court, stack onto a short one, or pull in the friends they follow. Playing time is a balance in minutes that players top up, and each 20-minute rotation ends and re-queues automatically. Staff run one dashboard: add walk-ins, end and rotate matches, open or retire courts, and read waiting, in-play, free-court and booking counts at a glance. Match duration, opening hours and payment hold windows are configurable, so the club tunes its own rules.'
      },
      gallery: [
        {
          src: '/image/work/pickleball-queue.png',
          caption: 'Live court and queue display',
          alt: 'Wall display listing occupied courts with the players on each and the waiting queue beside them'
        },
        {
          src: '/image/work/pickleball-player.png',
          caption: 'Claim a court, invite friends',
          alt: 'Player dashboard showing open courts, a playing-time balance in minutes, queue position and a friends list'
        },
        {
          src: '/image/work/pickleball-admin.png',
          caption: 'Front-desk queue management',
          alt: 'Staff dashboard for adding walk-in players and filling the open courts'
        }
      ]
    }
  },
  {
    id: 'PRJ-TANIM-01',
    slug: 'tanim-bes',
    timeline: 'About 3 months, January to March 2026',
    title: 'Tanim, Bes!',
    blurb:
      'A cross-platform mobile app that puts an AI plant-care assistant in your pocket — chat with a Taglish-speaking bot to diagnose, care for and grow any plant.',
    tech: ['React Native', 'Expo', 'Botpress', 'Supabase', 'TypeScript'],
    source: '',
    demo: '',
    image: '/image/tanimbes.jpg',
    featured: true,
    headline: 'An AI plant tito in your pocket',
    highlights: [
      {
        id: 'PRJ-TANIM-H1',
        text: 'A Taglish-speaking conversational assistant available around the clock, integrated over REST to Botpress with text-to-speech replies.'
      },
      {
        id: 'PRJ-TANIM-H2',
        text: 'One-tap plant topics and care actions on the home screen, so the common questions do not require typing a prompt.'
      },
      {
        id: 'PRJ-TANIM-H3',
        text: 'A single Expo codebase shipping to Android, iOS and web.'
      }
    ],
    overview: {
      client: 'Self-initiated consumer product',
      industry: 'AgriTech & consumer gardening · AI conversational assistant',
      services: [
        'Taglish multi-language care assistant',
        'One-tap plant topics on the home grid',
        'Read-aloud replies through expo-speech',
        'Plant-care FAQ tab',
        'Always-on chat support'
      ],
      challenge: {
        id: 'PRJ-TANIM-CH',
        text: 'Plant-care advice online is fragmented, overly technical and intimidating for beginners. A new plant owner ends up juggling blog posts, forum threads and generic search results, none of which answer a specific question quickly or in a tone that feels approachable. The goal was to lower the barrier to home gardening with one friendly, always-available assistant a person could talk to like a knowledgeable friend rather than read like a manual.'
      },
      solution: {
        id: 'PRJ-TANIM-SOL',
        text: 'Instead of browsing, users chat in casual Taglish to diagnose problems, get care routines and grow a plant with confidence. The assistant is a Botpress-backed chatbot integrated over REST rather than wrapped in a webview, with text-to-speech and markdown-formatted replies. A curated home grid of plants and care actions preloads tailored prompts into the chat for one-tap guidance, and Supabase email auth keeps sessions persistent alongside a guest mode for instant access.'
      },
      gallery: [
        {
          src: '/image/work/tanimbes-chat.jpg',
          caption: 'Taglish plant-care chat',
          alt: 'Mobile chat screen with the assistant answering a plant-care question in conversational Taglish'
        },
        {
          src: '/image/work/tanimbes-topics.jpg',
          caption: 'Quick plant topics on Home',
          alt: 'Home screen grid of plants and care actions, each preloading a prompt into the chat'
        }
      ]
    }
  },
  {
    id: 'PRJ-RIDE-01',
    slug: 'ridelink',
    timeline: 'About 3 years, July 2023 to June 2026, 470+ commits',
    title: 'RideLink',
    blurb:
      'A two-sided mobile marketplace for renting and listing cars, motorcycles and heavy equipment, where every user is both renter and owner — with verified identities, owner approvals and live GPS tracking of active rentals.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'NativeWind'],
    source: '',
    demo: '',
    image: '/image/ridelink.jpg',
    featured: true,
    headline: '3 years, 470+ commits, one codebase',
    highlights: [
      {
        id: 'PRJ-RIDE-H1',
        text: 'A single iOS and Android codebase on a fully serverless stack, carried through a platform re-architecture and UI overhaul in 2026.'
      },
      {
        id: 'PRJ-RIDE-H2',
        text: 'Dual-role flows let the same account rent and list across cars, motorcycles and heavy equipment, with owner approval before a booking is confirmed.'
      },
      {
        id: 'PRJ-RIDE-H3',
        text: 'Authorization enforced at the database level, with envelope encryption and secure-enclave keys.'
      },
      {
        id: 'PRJ-RIDE-H4',
        text: 'Battery-aware live GPS tracking that runs only while a rental is active.'
      }
    ],
    overview: {
      client: 'Self-initiated product',
      industry: 'Mobility · Peer-to-peer transportation rental',
      services: [
        'iOS and Android app development',
        'Peer-to-peer marketplace flows',
        'Live GPS rental tracking',
        'Serverless backend and security',
        'Design system and UI consolidation'
      ],
      challenge: {
        id: 'PRJ-RIDE-CH',
        text: 'Most vehicle-rental apps run one direction: a fleet owner lists, a customer books. RideLink needed a genuine two-sided marketplace where the same user is renter and owner at once, across cars, motorcycles and heavy equipment. That raised three hard problems together — trust and safety, because peer-to-peer key handovers demand verified identities, owner approvals, admin moderation and an authorization model that cannot leak data; live accountability, because a renter needs to know where a vehicle is; and doing both from one codebase.'
      },
      solution: {
        id: 'PRJ-RIDE-SOL',
        text: 'A production React Native app on Expo over a fully serverless Supabase backend — Postgres, Auth and Storage with no custom server layer. Authorization is enforced at the database level so the public anon key never exposes another user\u2019s data, with envelope encryption on storage and keys held in the device secure enclave. One account switches between renting and listing through multi-step registration, an admin approval pipeline and the full rental lifecycle from pending to approved, ongoing and completed. GPS tracking is battery-aware and runs only while a rental is active.'
      },
      gallery: [
        {
          src: '/image/work/ridelink-onboarding.jpg',
          caption: 'Onboarding and guest access',
          alt: 'Mobile onboarding screens introducing the marketplace with an option to browse as a guest'
        },
        {
          src: '/image/work/ridelink-browse.jpg',
          caption: 'Browse and book vehicles',
          alt: 'Listing screen showing rentable cars and motorcycles with rates and availability'
        },
        {
          src: '/image/work/ridelink-details.jpg',
          caption: 'Vehicle details and specs',
          alt: 'Vehicle detail screen with photos, specifications and the booking action'
        }
      ]
    }
  },
  {
    id: 'PRJ-NFA-01',
    slug: 'nfa-trading',
    timeline: 'About 9 months',
    title: 'NFA Trading',
    blurb:
      'A rice trading platform for the National Food Authority that lets Filipino farmers bid their harvest for fairer prices, while giving the NFA nationwide visibility over rice inventory. The government-scale successor to the student procurement system below.',
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'REST API'],
    source: '',
    demo: '',
    image: '/image/nfa-trading.png',
    featured: true,
    headline: 'Fairer bids for Filipino farmers',
    highlights: [
      {
        id: 'PRJ-NFA-H1',
        text: 'An open marketplace connecting farmers and traders directly, so a harvest reaches the highest bid rather than the nearest buyer.'
      },
      {
        id: 'PRJ-NFA-H2',
        text: 'Nationwide tracking of NFA rice in real time, with centralised inventory and supply visibility.'
      }
    ],
    overview: {
      client: 'National Food Authority',
      industry: 'Government & agriculture',
      services: [
        'Platform development',
        'Marketplace and bidding system',
        'Inventory tracking',
        'API architecture',
        'UI/UX design'
      ],
      challenge: {
        id: 'PRJ-NFA-CH',
        text: 'Filipino rice farmers had little leverage over the price of their harvest: selling through layers of middlemen meant the people who grew the crop captured the least of its value. The National Food Authority, at the same time, had no clear real-time view of rice moving across the country, which made supply hard to track, inventory hard to manage, and fair treatment of farmers hard to verify.'
      },
      solution: {
        id: 'PRJ-NFA-SOL',
        text: 'An open bidding marketplace puts a farmer\u2019s harvest in front of traders directly, so a crop reaches the highest bid rather than the nearest buyer. A central dashboard and inventory system let the NFA monitor rice across the Philippines in real time, and role-based access keeps farmers, traders and agency staff working from the same trusted data.'
      },
      gallery: [
        {
          src: '/image/work/nfa-marketplace.png',
          caption: 'Rice trading marketplace',
          alt: 'Marketplace listing rice lots open for bidding with quantities and current bids'
        },
        {
          src: '/image/work/nfa-inventory.png',
          caption: 'Inventory tracking',
          alt: 'Inventory dashboard tracking NFA rice stock levels across regions'
        },
        {
          src: '/image/work/nfa-trader.png',
          caption: 'Trader marketplace view',
          alt: 'Trader-side view of available harvests with the bid submission form'
        }
      ]
    }
  },
  {
    id: 'PRJ-HRMIS-01',
    slug: 'hrmis',
    timeline: 'About 7 months',
    title: 'HRMIS',
    blurb:
      'A centralised Human Resource Management Information System for government offices, consolidating employee 201 files, payroll, leave, attendance and reporting into one source of truth with role-based access per office.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'REST API'],
    source: '',
    demo: '',
    image: '/image/hrmis.png',
    featured: false,
    headline: 'Centralized HR across every office',
    highlights: [
      {
        id: 'PRJ-HRMIS-H1',
        text: 'One authoritative record replaces per-office HR data, with role-based access so each office and officer sees exactly what it is permitted to.'
      },
      {
        id: 'PRJ-HRMIS-H2',
        text: 'Standardised workflows in place of manual paperwork, and consolidated dashboards giving administrators a real-time view of the whole workforce.'
      }
    ],
    overview: {
      client: 'Public sector HR division',
      industry: 'Government & public sector',
      services: [
        'Web application development',
        'HR system architecture',
        'UI/UX design',
        'Data centralization',
        'Role-based access control'
      ],
      challenge: {
        id: 'PRJ-HRMIS-CH',
        text: 'Across government offices, HR data lived in disconnected spreadsheets, paper files and standalone systems that never spoke to one another. Employee records, payroll, leave balances and service history were duplicated and inconsistent between departments, which made information slow to retrieve, hard to audit and close to impossible to report on across the workforce as a whole.'
      },
      solution: {
        id: 'PRJ-HRMIS-SOL',
        text: 'One authoritative platform consolidates every office\u2019s HR data. Employee 201 files, payroll, leave, attendance and reporting live in one place, with role-based access so each office and HR officer sees exactly what it is permitted to. Standardised workflows replace manual paperwork, and consolidated dashboards give administrators a real-time view of the entire workforce.'
      },
      gallery: [
        {
          src: '/image/work/hrmis-dashboard.png',
          caption: 'Centralized HR dashboard',
          alt: 'HR dashboard summarising headcount, leave and payroll across offices'
        },
        {
          src: '/image/work/hrmis-records.png',
          caption: 'Employee records management',
          alt: 'Employee 201 file record view with service history and leave balances'
        },
        {
          src: '/image/work/hrmis-reporting.png',
          caption: 'Reporting and administration',
          alt: 'Reporting screen generating workforce reports with role-based visibility'
        }
      ]
    }
  },
  {
    id: 'PRJ-NAIL-01',
    slug: 'nail-disease-detection',
    timeline: '2022',
    title: 'Nail Disease Detection',
    blurb:
      'Detects early-stage systemic disease from fingernail colour and texture. SVM classification with Canny edge detection, in an Electron desktop shell. Best Thesis.',
    tech: ['React', 'Electron', 'Python Flask', 'TensorFlow'],
    source: 'https://github.com/zneret03/nail_detection',
    demo: '',
    image: '/image/nail_disease.png',
    featured: true
  },
  {
    id: 'PRJ-EREBUS-01',
    slug: 'erebus-theme',
    timeline: '2021',
    title: 'Erebus Theme',
    blurb:
      'A minimal dark blue VS Code theme, published and maintained on the Visual Studio Marketplace.',
    tech: ['VS Code', 'JSON'],
    source: 'https://github.com/zneret03/Erebus-Theme',
    demo: 'https://marketplace.visualstudio.com/items?itemName=Erebus.erebus',
    image: '/image/Erebus.png',
    featured: false
  },
  {
    id: 'PRJ-RPTM-01',
    slug: 'rice-procurement-management',
    timeline: '2020',
    title: 'Rice Procurement Management',
    blurb:
      'A bidding system that helps farmers sell to the highest trader bid. Built with the team behind the regional procurement pilot.',
    tech: ['React', 'TailwindCSS', 'Firebase'],
    source: 'https://github.com/EceLaaah/rptm',
    demo: '',
    image: '/image/rptm.png',
    featured: false
  },
  {
    id: 'PRJ-GITP-01',
    slug: 'gitprofile',
    timeline: '2020',
    title: 'gitProfile',
    blurb:
      'A cleaner read on any GitHub profile — top languages and star counts rendered as data visualisations.',
    tech: ['React', 'Chart.js', 'GitHub API'],
    source: 'https://github.com/zneret03/gitprofile',
    demo: 'https://gitprofilee.netlify.app/',
    // dashboard.png is the Fullstack Shopify dashboard (PRJ-SHOP-01), not this app.
    image: '/image/frontpage.png',
    featured: false
  }
])

/**
 * The archive. Deduped against `projects` — the legacy `main.json` listed BCIF
 * twice and repeated two featured entries here (action item P2-02).
 */
export const archiveProjects: ArchiveProject[] = z.array(archiveProjectSchema).parse([
  {
    id: 'PRJ-CLI-01',
    title: 'project-cli',
    blurb:
      'A CLI that scaffolds React or Next.js starters in JavaScript or TypeScript with Tailwind pre-installed, triggered by a shortcut key.'
  },
  {
    id: 'PRJ-SHOP-01',
    title: 'Fullstack Shopify',
    blurb:
      'A full storefront and dashboard on Firebase, netlify-functions, Tailwind, React and Chart.js.'
  },
  {
    id: 'PRJ-ECOM-01',
    title: 'E-Commerce',
    blurb: 'A custom storefront on React, Firebase and netlify-lambda.'
  },
  {
    id: 'PRJ-BCIF-01',
    title: 'BCIF Website',
    blurb: 'A static church website in React and Tailwind.'
  },
  {
    id: 'PRJ-HLTH-01',
    title: 'Online Health Care',
    blurb:
      'Appointment scheduling and preliminary diagnosis on React, Tailwind and netlify-lambda.'
  },
  {
    id: 'PRJ-IRIS-01',
    title: 'Iris Classification',
    blurb:
      'Classification of iris flowers with the R caret machine learning library, with data visualisation and analysis.'
  },
  {
    id: 'PRJ-SUPP-01',
    title: 'Supply Management System',
    blurb:
      'An OOP supply management system with a point-of-sale subsystem, C# on an MVC architecture.'
  },
  {
    id: 'PRJ-CLIN-01',
    title: 'Clinic Management System',
    blurb: 'A dynamic clinic system in PHP and Bootstrap on an MVC architecture.'
  }
])
