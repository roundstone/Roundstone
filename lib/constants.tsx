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
  { value: 13, suffix: "+", label: "Years in operation" },
  { value: 25, suffix: "", label: "In-house professionals" },
  {
    value: 6,
    suffix: <span className="text-3xl relative -top-4 font-normal ml-0.5"> mo </span>,
    label: "Warranty on every engagement"
  },
  { value: 3, suffix: "", label: "Sectors: Gov, Enterprise, Consumer" },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Feed", href: "/feed" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Software Development",
    desc: "Modernise how your institution operates. We build custom applications, engineer platforms, and integrate complex systems.",
    icon: <Monitor className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/software-development",
    slug: "software-development"
  },
  {
    title: "ERP Consulting",
    desc: "Gain real-time data visibility and efficiency. We select, implement, and integrate ERP platforms with your legacy systems.",
    icon: <Database className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/erp",
    slug: "erp"
  },
  {
    title: "IT & Security",
    desc: "Keep your critical systems running securely. We design, implement, and manage scalable IT infrastructure architecture.",
    icon: <ShieldCheck className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/it-infrastructure",
    slug: "it-infrastructure"
  },
  {
    title: "AI & Data Solutions",
    desc: "Embed intelligence into your operations. We build applied AI features into real, scaled operational systems.",
    icon: <Cpu className="w-8 h-8 text-biscay mb-6 stroke-[1.5]" />,
    href: "/services/ai-data",
    slug: "ai-data"
  }
];

export const PORTFOLIO_PROJECTS = [
  // Public Sector (B2G)
  {
    title: "Yellow Card Portal",
    client: "Federal Ministry of Health",
    sector: "Public Sector (B2G)",
    outcome: "Enrollment, issuance, and management of Nigeria's new E-Yellow Card.",
    slug: "yellow-card-portal"
  },
  {
    title: "Case Management System",
    client: "Ministry of Justice",
    sector: "Public Sector (B2G)",
    outcome: "End-to-end case tracking and management.",
    slug: "case-management-system"
  },
  {
    title: "KDSG Scholarship Board Platform",
    client: "Kaduna State Government",
    sector: "Public Sector (B2G)",
    outcome: "Application, testing, selection, and notification for state scholarships.",
    slug: "kdsg-scholarship"
  },
  {
    title: "Kashim Ibrahim Fellowship Platform",
    client: "Kashim Ibrahim Fellowship",
    sector: "Public Sector (B2G)",
    outcome: "Application and selection management for a flagship state fellowship programme.",
    slug: "kashim-ibrahim-fellowship"
  },
  {
    title: "Boola",
    client: "Kaduna State",
    sector: "Public Sector (B2G)",
    outcome: "A scavenger/scrap-aggregator tracking app organised by sector and location.",
    slug: "boola"
  },
  {
    title: "Kaduna state Agricultural Development Agency (KADA)",
    client: "Kaduna State",
    sector: "Public Sector (B2G)",
    outcome: "Management of input distribution to smallholder farmers and agricultural extension services.",
    slug: "kada"
  },
  {
    title: "E-Government Portal",
    client: "Government of Nigeria",
    sector: "Public Sector (B2G)",
    outcome: "Digital gateway for accessing and discovering government services across Nigeria.",
    slug: "e-government-portal"
  },

  // Enterprise & Foundations (B2B)
  {
    title: "KadaHive Hub",
    client: "Bank of Industry & Kaduna State Government",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Roundstone manages a state-of-the-art workspace, tech training, and business incubation hub.",
    slug: "kadahive-hub"
  },
  {
    title: "EBMS",
    client: "Enterprise",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Centralised, AI-assisted electricity bill processing at scale.",
    slug: "ebms"
  },
  {
    title: "Tony Elumelu Foundation Platform",
    client: "Tony Elumelu Foundation",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Business plan submission, pitch video handling, scoring, payment, and notification for one of Africa's leading entrepreneurship programmes.",
    slug: "tony-elumelu-foundation"
  },
  {
    title: "AIG-Imoukhuede Foundation Platform",
    client: "AIG-Imoukhuede Foundation",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Application, testing, selection, and notification management.",
    slug: "aig-imoukhuede"
  },
  {
    title: "Enterprise NGR — YOE Programme",
    client: "Enterprise NGR",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Application submission with AI-proctored testing and selection.",
    slug: "enterprise-ngr-yoe"
  },
  {
    title: "Learning Management System",
    client: "Various",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Digital delivery and tracking for educational and vocational training programmes.",
    slug: "learning-management-system"
  },
  {
    title: "UNECA Digital Identity Consulting",
    client: "UN Economic Commission for Africa",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Ongoing advisory role with the UN Economic Commission for Africa on digital identity.",
    slug: "uneca-digital-identity"
  },
  {
    title: "Galaxy Backbone Auth Trust",
    client: "Galaxy Backbone",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Identity verification management and trust management service.",
    slug: "galaxy-backbone-auth-trust"
  },
  {
    title: "ONE-Plaform",
    client: "UNICEF",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Development of a comprehensive one-platform for UNICEF to manage its programs and initiatives.",
    slug: "one-platform"
  },
  {
    title: "Tera 10",
    client: "Tera 10",
    sector: "Enterprise & Foundations (B2B)",
    outcome: "Funding platform that helps developers access financial support and opportunities to build and grow their projects.",
    slug: "tera-10"
  },

  // Products (B2C)
  {
    title: "Clay",
    client: "Internal Product",
    sector: "Products (B2C)",
    outcome: "A buy-now-pay-later platform giving customers instalment purchasing power.",
    slug: "clay"
  },
  {
    title: "RoundTrack AI Proctoring",
    client: "Internal Product",
    sector: "Products (B2C)",
    outcome: "Browser-based AI proctoring for exams, assessments, and interviews.",
    slug: "roundtrack-ai"
  },
  {
    title: "Health App",
    client: "Internal Product",
    sector: "Products (B2C)",
    outcome: "Consumer-facing app for immediate access to care and patient engagement.",
    slug: "health-app"
  },
  {
    title: "Jaokins Farms",
    client: "Jaokins",
    sector: "Products (B2C)",
    outcome: "A comprehensive farm management system for Jaokins Farms to manage their farm and operations.",
    slug: "jaokins-farms"
  },
  {
    title: "RoundClock",
    client: "Internal Product",
    sector: "Products (B2C)",
    outcome: "Biometric time and attendance system using fingerprint and facial recognition for staff clocking, customer management, and workforce administration.",
    slug: "roundclock"
  },
  {
    title: "Transaharan",
    client: "Transaharan",
    sector: "Products (B2C)",
    outcome: "Business growth and expansion platform connecting companies with consulting services, industry experts, learning resources, and advisory support across Africa.",
    slug: "transaharan"
  },
];

export const TESTIMONIALS = [
  {
    quote: "The System streamlined workflows, reduced manual data entry, and improved collaboration. The Testing, Review, and Assessment Portal enabled evaluation and feedback. The team's responsiveness, communication, and support were key to this partnership's success.",
    author: "Oluwatobi Ajayi",
    role: "Businessman"
  },
  {
    quote: "The scholarship application portal developed by the team was user-friendly, intuitive, and visually appealing. This streamlined the funding application process for students, aligned with the organization's mission and values, and allowed for greater impact by supporting more students.",
    author: "Fatima Umar",
    role: "Founder"
  },
  {
    quote: "The Proctoring tool streamlined the recruitment process, enabled objective evaluation of candidates, informed decisions. The team's professionalism, responsiveness, and support were crucial to this partnership's success, and the organization anticipates a continued partnership in the future.",
    author: "Emeka Nwachukwu",
    role: "Director of ZuBaz"
  }
];

export const LEADERS = [
  {
    name: "Adeola Bojuwoye",
    role: "Managing Partner",
    bio: "Over a decade of experience in technology and business development across banking and telecommunications, leading Roundstone's strategic direction and client partnerships.",
    image: "/image/team/adeola-bojuwoye.jpg"
  },
  {
    name: "Opeyemi Onifade",
    role: "Head of Strategy",
    bio: "Identifies growth opportunities and shapes the roadmap that keeps Roundstone's offering aligned with where Nigerian institutions are headed.",
    image: "/image/team/opeyemi-onifade.jpeg"
  },
  {
    name: "Vinod Jain",
    role: "Head of Software Engineering",
    bio: "Leads the engineering organisation responsible for every platform Roundstone ships, from architecture through delivery.",
    image: "/image/team/vinod-jain.jpg"
  },
  {
    name: "Zahra Yunusa",
    role: "Chief Of Operations",
    bio: "Builds the partnerships and relationships that connect Roundstone with the organisations it serves.",
    image: "/image/team/zahra-yunusa.jpg"
  }
];

export const TRUST_LOGOS = [
  { name: "UNICEF", image: "/image/trusts/unicef.png" },
  { name: "Bank of Industry", image: "/image/trusts/bank-of-industry.png" },
  { name: "Tony Elumelu Foundation", image: "/image/trusts/tef.jpg" },
  { name: "Federal Ministry of Health", image: "/image/trusts/federal-ministry-of-health.png" },
  { name: "AIG-Imoukhuede Foundation", image: "/image/trusts/aig-imoukhuede-foundation.webp" },
  { name: "Galaxy Backbone", image: "/image/trusts/gbb.png" },
  { name: "Enterprise NGR", image: "/image/trusts/enterprisengr.png" },
  { name: "Kaduna State Government", image: "/image/trusts/kada.jpeg" },
  { name: "United Capital", image: "/image/trusts/united-capital.png" },
  { name: "Africa Prudential", image: "/image/trusts/africa-prudential.png" },
  { name: "Kashim Ibrahim Fellows", image: "/image/trusts/kashim-ibrahim-fellows.jpeg" },
  { name: "Kaduna State Power Supply Company", image: "/image/trusts/kaduna-state-power-supply-company.jpeg" },
];

export const VIGNETTES = [
  {
    client: "Federal Ministry of Health",
    title: "Yellow Card Portal",
    desc: "Digitized national health card enrollment end-to-end, securing and streamlining the process for millions of citizens and international travelers.",
    image: "/image/portfolio/yellowcard.png",
    href: "/work/yellow-card-portal",
    reverse: false
  },
  {
    client: "Enterprise",
    title: "EBMS",
    desc: "An AI-assisted billing engine processing electricity payments at scale, bringing unprecedented accuracy and visibility to regional power distribution.",
    image: "", // Placeholder since we don't have this image yet
    href: "/work/ebms",
    reverse: true
  },
  {
    client: "Consumer Fintech",
    title: "Clay BNPL",
    desc: "A buy-now-pay-later platform giving everyday Nigerians access to instalment purchasing, powered by a robust risk-assessment engine.",
    image: "/image/portfolio/clay.png",
    href: "/work/clay",
    reverse: false
  }
];

export const SECTORS = [
  { name: "Government & Public Sector", icon: <Landmark className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> },
  { name: "Foundations & Development", icon: <HeartHandshake className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> },
  { name: "Financial Services", icon: <Wallet className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> },
  { name: "Healthcare & Education", icon: <HeartPulse className="w-8 h-8 mb-6 text-burntsienna stroke-[1.5] group-hover:-translate-y-2 transition-transform duration-300" /> }
];
