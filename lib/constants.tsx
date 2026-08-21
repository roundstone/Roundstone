import { Monitor, Database, ShieldCheck, Cpu, Landmark, HeartHandshake, Wallet, HeartPulse } from "lucide-react";

export const COMPANY = {
  name: 'Roundstone Consulting',
  tagline: 'Tech-driven strategy, execution, and managed services for the digital era',
  rc: 'RC 1935271',
  phone: '+234 704 452 1056',
  phoneRaw: '2348060046911',
  email: 'it@roundstoneconsulting.co.uk',
  address: 'Nexus Workspaces, No. 8 Bida Road, Off Yakubu Gowon Road, Kaduna',
  whatsapp: 'https://wa.me/2348060046911',
  url: 'https://roundstoneconsulting.co.uk',
};

export const STATS = [
  { value: 15, suffix: <span className="text-3xl relative -top-4 font-normal ml-0.5">+ Years</span>, label: "Delivering digital solutions" },
  { value: 25, suffix: <span className="text-3xl relative -top-4 font-normal ml-0.5">+ Products</span>, label: "And solutions delivered" },
  {
    value: 6,
    suffix: <span className="text-3xl relative -top-4 font-normal ml-0.5"> Months</span>,
    label: "Structured post-launch support"
  },
  // { value: "Public & Private Sector", suffix: "", label: "Experience across government, finance, development and enterprise" },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Software Development",
    desc: "We design and build secure digital platforms, applications and systems around the way your organisation actually works.",
    icon: <Monitor className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/software-development",
    slug: "software-development"
  },
  {
    title: "Business Management Systems",
    desc: "We help organisations bring processes, systems and data together to improve visibility, efficiency and decision-making.",
    icon: <Database className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/erp",
    slug: "erp"
  },
  {
    title: "IT & Cybersecurity",
    desc: "We design and support secure, reliable technology environments for organisations where performance, continuity and security matter.",
    icon: <ShieldCheck className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/it-infrastructure",
    slug: "it-infrastructure"
  },
  {
    title: "AI & Data Solutions",
    desc: "We help organisations use AI and data to automate processes, uncover insights and build smarter digital services.",
    icon: <Cpu className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/ai-data",
    slug: "ai-data"
  }
];

export const PORTFOLIO_PROJECTS = [
  // Public Sector
  {
    title: "Yellow Card Portal",
    client: "Federal Ministry of Health",
    sector: "Public Sector",
    outcome: "Enrollment, issuance, and management of Nigeria's new E-Yellow Card.",
    slug: "yellow-card-portal"
  },
  {
    title: "Case Management System",
    client: "Ministry of Justice",
    sector: "Public Sector",
    outcome: "End-to-end case tracking and management.",
    slug: "case-management-system"
  },
  {
    title: "KDSG Scholarship Board Platform",
    client: "Kaduna State Government",
    sector: "Public Sector",
    outcome: "Application, testing, selection, and notification for state scholarships.",
    slug: "kdsg-scholarship"
  },
  {
    title: "Kashim Ibrahim Fellowship Platform",
    client: "Kashim Ibrahim Fellowship",
    sector: "Public Sector",
    outcome: "Application and selection management for a flagship state fellowship programme.",
    slug: "kashim-ibrahim-fellowship"
  },
  {
    title: "Boola",
    client: "Kaduna State",
    sector: "Public Sector",
    outcome: "A scavenger/scrap-aggregator tracking app organised by sector and location.",
    slug: "boola"
  },
  {
    title: "Kaduna state Agricultural Development Agency (KADA)",
    client: "Kaduna State",
    sector: "Public Sector",
    outcome: "Management of input distribution to smallholder farmers and agricultural extension services.",
    slug: "kada"
  },
  {
    title: "E-Government Portal",
    client: "Government of Nigeria",
    sector: "Public Sector",
    outcome: "Digital gateway for accessing and discovering government services across Nigeria.",
    slug: "e-government-portal"
  },

  // Enterprise & Foundations
  {
    title: "KadaHive Hub",
    client: "Bank of Industry & Kaduna State Government",
    sector: "Enterprise & Foundations",
    outcome: "Roundstone manages a state-of-the-art workspace, tech training, and business incubation hub.",
    slug: "kadahive-hub"
  },
  {
    title: "EBMS",
    client: "Enterprise",
    sector: "Enterprise & Foundations",
    outcome: "Centralised, AI-assisted electricity bill processing at scale.",
    slug: "ebms"
  },
  {
    title: "Tony Elumelu Foundation Platform",
    client: "Tony Elumelu Foundation",
    sector: "Enterprise & Foundations",
    outcome: "Business plan submission, pitch video handling, scoring, payment, and notification for one of Africa's leading entrepreneurship programmes.",
    slug: "tony-elumelu-foundation"
  },
  {
    title: "AIG-Imoukhuede Foundation Platform",
    client: "AIG-Imoukhuede Foundation",
    sector: "Enterprise & Foundations",
    outcome: "Application, testing, selection, and notification management.",
    slug: "aig-imoukhuede"
  },
  {
    title: "Enterprise NGR - YOE Programme",
    client: "Enterprise NGR",
    sector: "Enterprise & Foundations",
    outcome: "Application submission with AI-proctored testing and selection.",
    slug: "enterprise-ngr-yoe"
  },
  {
    title: "Learning Management System",
    client: "Various",
    sector: "Enterprise & Foundations",
    outcome: "Digital delivery and tracking for educational and vocational training programmes.",
    slug: "learning-management-system"
  },
  {
    title: "UNECA Digital Identity Consulting",
    client: "UN Economic Commission for Africa",
    sector: "Enterprise & Foundations",
    outcome: "Ongoing advisory role with the UN Economic Commission for Africa on digital identity.",
    slug: "uneca-digital-identity"
  },
  {
    title: "Galaxy Backbone Auth Trust",
    client: "Galaxy Backbone",
    sector: "Enterprise & Foundations",
    outcome: "Identity verification management and trust management service.",
    slug: "galaxy-backbone-auth-trust"
  },
  {
    title: "ONE-Plaform",
    client: "UNICEF",
    sector: "Enterprise & Foundations",
    outcome: "Development of a comprehensive one-platform for UNICEF to manage its programs and initiatives.",
    slug: "one-platform"
  },
  {
    title: "Tera 10",
    client: "Tera 10",
    sector: "Enterprise & Foundations",
    outcome: "Funding platform that helps developers access financial support and opportunities to build and grow their projects.",
    slug: "tera-10"
  },

  // Products
  {
    title: "Clay",
    client: "Internal Product",
    sector: "Products",
    outcome: "A buy-now-pay-later platform giving customers instalment purchasing power.",
    slug: "clay"
  },
  {
    title: "RoundTrack AI Proctoring",
    client: "Internal Product",
    sector: "Products",
    outcome: "Browser-based AI proctoring for exams, assessments, and interviews.",
    slug: "roundtrack-ai"
  },
  {
    title: "Health App",
    client: "Internal Product",
    sector: "Products",
    outcome: "Consumer-facing app for immediate access to care and patient engagement.",
    slug: "health-app"
  },
  {
    title: "Jaokins Farms",
    client: "Jaokins",
    sector: "Products",
    outcome: "A comprehensive farm management system for Jaokins Farms to manage their farm and operations.",
    slug: "jaokins-farms"
  },
  {
    title: "RoundClock",
    client: "Internal Product",
    sector: "Products",
    outcome: "Biometric time and attendance system using fingerprint and facial recognition for staff clocking, customer management, and workforce administration.",
    slug: "roundclock"
  },
  {
    title: "Transaharan",
    client: "Transaharan",
    sector: "Products",
    outcome: "Business growth and expansion platform connecting companies with consulting services, industry experts, learning resources, and advisory support across Africa.",
    slug: "transaharan"
  },
];

export const TESTIMONIALS: { quote: string, author: string, role: string }[] = [
  // To be filled with properly attributed testimonials
];

export const LEADERS = [
  {
    name: "Adeola Bojuwoye",
    role: "Managing Partner",
    bio: "Leads Roundstone's strategic direction and institutional engagements.",
    image: "/image/team/adeola-bojuwoye.jpg"
  },
  {
    name: "Opeyemi Onifade",
    role: "Head of Strategy",
    bio: "Leads strategy and helps translate organisational challenges into clear, practical solutions.",
    image: "/image/team/opeyemi-onifade.jpeg"
  },
  {
    name: "Vinod Jain",
    role: "Head of Software Engineering",
    bio: "Leads the engineering organisation responsible for every platform Roundstone ships, from architecture through delivery.",
    image: "/image/team/vinod-jain.jpeg"
  },
  {
    name: "Zahra Yunusa",
    role: "Chief Operation Officer",
    bio: "Oversight of Roundstone’s day-to-day operations, service delivery, and the internal systems that support the entire organisation.",
    image: "/image/team/zahra-yunusa.jpg"
  }
];

export const TRUST_LOGOS = [
  { name: "UNICEF", image: "/image/trusts/unicef.png" },
  { name: "Bank of Industry", image: "/image/trusts/bank-of-industry.png" },
  { name: "Federal Ministry of Health", image: "/image/trusts/federal-ministry-of-health.png" },
  { name: "Tony Elumelu Foundation", image: "/image/trusts/tef.jpg" },
  { name: "Galaxy Backbone", image: "/image/trusts/gbb.png" },
  { name: "Kaduna State Government", image: "/image/trusts/kada.jpeg" },
  { name: "AIG-Imoukhuede Foundation", image: "/image/trusts/aig-imoukhuede-foundation.webp" },
  { name: "Enterprise NGR", image: "/image/trusts/enterprisengr.png" },
  { name: "United Capital", image: "/image/trusts/united-capital.png" },
  { name: "Africa Prudential", image: "/image/trusts/africa-prudential.png" },
  { name: "Kashim Ibrahim Fellows", image: "/image/trusts/kashim-ibrahim-fellows.jpeg" },
  { name: "Kaduna State Power Supply Company", image: "/image/trusts/kaduna-state-power-supply-company.jpeg" },
];

export const VIGNETTES = [
  {
    client: "Federal Ministry of Health",
    title: "Yellow Card Portal",
    desc: "A digital platform that streamlined national Yellow Card enrolment, making the process more accessible and efficient for citizens and international travellers.",
    image: "/image/portfolio/yellowcard.png",
    href: "",
    reverse: false
  },
  {
    client: "UNICEF",
    title: "ONE-Platform",
    desc: "A comprehensive digital platform designed to help UNICEF efficiently manage and monitor its nationwide programmes.",
    image: "/image/portfolio/one-platform.png", 
    href: "",
    reverse: true
  },
  {
    client: "Tony Elumelu Foundation",
    title: "TEF Entrepreneurship Programme Platform",
    desc: "An end-to-end management system that handles business plan submissions, testing, and selection for Africa's leading entrepreneurship programme.",
    image: "/image/portfolio/tef.png",
    href: "",
    reverse: false
  }
];

export const SECTORS = [
  { name: "Government & Public Sector", icon: <Landmark className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> },
  { name: "Foundations & Development", icon: <HeartHandshake className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> },
  { name: "Financial Services", icon: <Wallet className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> },
  { name: "Healthcare & Education", icon: <HeartPulse className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> }
];
