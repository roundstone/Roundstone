# Roundstone Consulting — Website Redesign
### Content, Structure & UI/UX Specification

Prepared as a full redesign brief covering sitemap, page-level structure, written copy, and design direction — ready to hand to a designer/developer or to build directly as a prototype.

---

## 0. Design Rationale (read this first)

Roundstone's current site under-sells a genuinely credible business: 13+ years old, government-grade platforms (Ministry of Health, Ministry of Justice, Kaduna State), foundation-scale partners (Tony Elumelu Foundation, AIG-Imoukhuede), and a live fintech product (Clay BNPL). The redesign's job is to make that credibility *visible in 8 seconds*, not to invent a new personality.

**Positioning line we'll build the whole site around:**
> "The technology partner behind Nigeria's most trusted institutions."

This reframes Roundstone from "a software vendor" to "critical infrastructure provider" — which is what the client list actually proves.

**Design personality:** restrained, editorial, confident. Think of how a boutique investment bank or a Big-4-adjacent consultancy presents itself — generous white space, serif display type for authority, a single accent color used sparingly as a signal (not decoration), and real photography over illustration/iconography clutter. No gradients-on-everything, no floating 3D shapes, no stock "diverse team pointing at laptop" imagery.

---

## 1. Brand System

| Token | Hex | Role |
|---|---|---|
| Biscay (primary/ink) | `#1B4264` | Headlines, nav, primary buttons, footer |
| Mystic (surface) | `#DEE7EB` | Section backgrounds, cards, dividers |
| Pale Sky (secondary text) | `#6A7385` | Body copy, captions, secondary UI |
| Burnt Sienna (accent) | `#E48E4A` | CTAs, key numbers, hover states, tags — used sparingly, never as a background for large areas |
| White | `#FFFFFF` | Primary background |
| Near-black | `#0E1E2B` | Optional deep footer / dark section variant |

**Usage rule:** Burnt Sienna should appear on no more than 1–2 elements per screen (a button, a stat, an underline). If it's everywhere, it stops meaning "act now."

**Typography**
- **Display/Headlines:** A refined serif (e.g., *Fraunces*, *Newsreader*, or *Canela*-style) — echoes the wordmark's serif "ROUNDSTONE" and signals institutional weight. Used at large sizes (48–72px desktop) in Biscay.
- **Body/UI:** A clean grotesk sans (e.g., *Inter*, *General Sans*, or *Söhne*) for all body text, nav, forms, buttons — keeps it readable and modern against the serif headlines.
- **Numerals/stats:** Same sans, tabular figures, set large and light-weight so big numbers (13+ years, 25 professionals, 40+ platforms) feel understated rather than "infographic."

**Grid & spacing**
- 12-column grid, 1280px max content width, generous 96–140px vertical rhythm between sections on desktop (48–64px on mobile).
- Section padding never below 80px top/bottom on desktop — this is what makes a site feel "premium" vs. "template": air, not more content.

**Imagery**
- Real photography from the existing team/office photos (the profile PDF already has strong ones — the team portrait, the office/server-room shots). Duotone them in Biscay for hero/section breaks (matches the PDF's existing blue-duotone treatment — it's already on-brand, just needs a cleaner, less busy execution than the PDF's diagonal-ribbon background).
- Avoid generic stock icons for services; instead use a consistent thin-line icon set (1.5px stroke, Biscay or Pale Sky) — one icon style throughout, never mixed sets.
- Client/partner logos in a single desaturated grey treatment on white or Mystic background (standard credibility-bar pattern used by consultancies like Slalom, Thoughtworks, EPAM).

**Motion**
- Minimal: fade/slide-up on scroll (8–12px translate, 400ms), number counters animating once on stats, subtle underline-draw on nav hover. No parallax gimmicks, no auto-playing carousels for logos (they read as spammy) — use a static grid or slow, pausable scroll.

---

## 2. Sitemap

```
Home
├── About
│   ├── Our Story
│   ├── Leadership Team
│   └── Careers
├── Services
│   ├── Software Development
│   ├── ERP Implementation & Consulting
│   ├── IT Infrastructure & Security
│   └── AI & Data Solutions
├── Work (Case Studies / Portfolio)
│   ├── Public Sector (B2G)
│   ├── Enterprise & Foundations (B2B)
│   └── Products (B2C) — Clay, RoundTrack, Health App
├── Insights (optional, phase 2 — light blog/newsroom)
├── Contact
└── (Footer utility) Privacy Policy · Terms
```

**Global nav:** Home · About · Services (dropdown) · Work · Contact — plus a persistent "Book a Consultation" button in Burnt Sienna, top-right, on every page.

**Rationale for structure:** Consulting/tech buyers evaluate in this order — *who are you → what do you do → prove it → what does engaging you look like*. The sitemap mirrors that decision path instead of an arbitrary page list.

---

## 3. Page-by-Page Specification

### 3.1 Home

**Purpose:** Establish credibility and category in one scroll; route visitors to Services or Work; capture leads via CTA.

| Section | Layout | Content |
|---|---|---|
| **Nav** | Sticky, transparent-over-hero → solid white on scroll | Logo left, links center-right, CTA button far right |
| **Hero** | Two-column: left 55% text, right 45% duotone photo (team/server room) | **Headline:** "Technology infrastructure for Nigeria's most trusted institutions." **Subhead:** "Since 2011, Roundstone Consulting has designed, built, and supported the software behind government agencies, leading foundations, and everyday financial services used by millions of Nigerians." **CTA:** \[Book a Consultation] (primary, Burnt Sienna) \[View Our Work] (ghost/outline) |
| **Trust bar** | Full-width strip, Mystic background | "Trusted by" + logo row: Tony Elumelu Foundation, AIG-Imoukhuede Foundation, Bank of Industry, Federal Ministry of Health, United Capital, Africa Prudential, Kashim Ibrahim Fellows |
| **By the numbers** | 4-column stat row, white background, large light-weight numerals | **13+** Years in operation · **25** In-house professionals · **6-month** Warranty on every engagement · **3** Sectors served: Government, Enterprise, Consumer |
| **What we do** | 4-card grid, thin-line icons | Software Development · ERP Implementation & Consulting · IT Infrastructure & Security · AI & Data Solutions — each card: one-line description + "Learn more →" |
| **Proof, not claims** | 3 short case vignettes, alternating image/text | e.g. *Yellow Card Portal* (Ministry of Health) — "Digitized national health card enrollment end-to-end." / *EBMS* — "An AI-assisted billing engine processing electricity payments at scale." / *Clay* — "A buy-now-pay-later platform giving everyday Nigerians access to instalment purchasing." Each links to full case study. |
| **Why Roundstone** | Editorial 2-column: short paragraph + 3 differentiators list | Differentiators: *Lean, senior-led delivery* (no bloated account layers) · *Institutional-grade reliability* (built for government and financial compliance) · *Full lifecycle ownership* (strategy → build → 6-month supported handover) |
| **Leadership strip** | 4 small portrait cards | Adeola Bojuwoye (Managing Partner), Opeyemi Onifade (Head of Strategy), Vinod Jain (Head of Software Engineering), Zahra Yunusa (Head of Business Development) — "Meet the team →" links to About |
| **Final CTA** | Full-width, Biscay dark background, centered | Headline: "Have a project in mind?" + short line + \[Book a Consultation] button (Burnt Sienna) |
| **Footer** | 4-column | Company info + address · Quick links · Services · Contact details + social |

---

### 3.2 About → Our Story

| Section | Content |
|---|---|
| **Intro headline** | "Building Nigeria's digital backbone, one institution at a time." |
| **Narrative copy** | *Roundstone Consulting was founded in 2011 and has spent over a decade helping private, state, and federal organisations across Nigeria modernise how they operate. What began as a software development practice has grown into a full-service technology partner — combining custom engineering, ERP consulting, and infrastructure expertise under one roof.*<br><br>*We're based in Kaduna, where our team of 25 designers, engineers, and consultants works across sectors that matter: healthcare, justice, financial inclusion, education, and public administration. Our approach is deliberately lean — we keep delivery close to our senior team, which means faster decisions, fewer handoffs, and software that's built to still be running in five years, not five months.*<br><br>*Every engagement comes with a six-month technical support guarantee. It's not a sales feature — it's how we think about the relationship.* |
| **Mission / Vision (reframed, not lifted verbatim)** | **Mission:** Equip organisations with dependable, cost-effective technology that measurably improves how they operate. **Vision:** To be the technology partner Nigerian and African institutions turn to first. |
| **Sector focus grid** | Government & Public Sector · Foundations & Development Organisations · Financial Services · Healthcare & Education |
| **Timeline (optional, phase 2)** | 2011 Incorporated → key platform launches → present |

### 3.2b About → Leadership Team

Full bios, portrait photography (duotone treatment for consistency), one per row on mobile / 2-column grid on desktop:

- **Adeola Bojuwoye — Managing Partner.** Over a decade of experience in technology and business development across banking and telecommunications, leading Roundstone's strategic direction and client partnerships.
- **Opeyemi Onifade — Head of Strategy.** Identifies growth opportunities and shapes the roadmap that keeps Roundstone's offering aligned with where Nigerian institutions are headed.
- **Vinod Jain — Head of Software Engineering.** Leads the engineering organisation responsible for every platform Roundstone ships, from architecture through delivery.
- **Zahra Yunusa — Head of Business Development.** Builds the partnerships and relationships that connect Roundstone with the organisations it serves.

### 3.2c About → Careers

Short page: culture blurb (drawn from the profile's "Staff & Training" section — reframed as an employer pitch, not an internal policy doc), current openings (or "no open roles — send us your CV" state), and a simple application CTA/email.

> "We hire for curiosity and hold onto people through investment, not perks. Every team member goes through structured onboarding and ongoing technical, product, QA, and customer-service training — because the software we ship is only as good as the people maintaining it."

---

### 3.3 Services (hub page)

Short intro + 4 service cards linking to sub-pages, plus the **process diagram** (this is one of the strongest assets in the current profile — clean it up rather than discard it):

**Our process:** Identify → Analyse → Design → Cost & Sign-off → Development → Support → Launch, shown as a simple 4–5 step horizontal timeline with icons rather than the boxy flowchart in the current PDF.

#### 3.3.1 Software Development
- **What it covers:** Custom web and mobile applications, platform engineering, systems integration, application modernisation.
- **How we work:** Senior-led project teams (application, front-end, back-end developers, QA and test engineers) scoped per project — no bench-heavy staffing.
- **Representative platforms:** Learning Management System, Case Management System (Ministry of Justice), Boola (scavenger aggregation app), scholarship/fellowship application portals.
- **CTA:** "Start a project brief"

#### 3.3.2 ERP Implementation & Consulting
- **What it covers:** ERP selection, implementation, and ongoing optimisation delivered in partnership with **Eden AI**, our professional ERP partner.
- **Capabilities:** Custom development & integrations bridging legacy systems to modern ERP; data visibility and reporting; compliance-aligned configuration.
- **Outcomes:** increased operational efficiency, real-time data visibility, improved security & regulatory compliance.

#### 3.3.3 IT Infrastructure & Security
- **What it covers:** Designing, implementing, and managing secure, scalable IT infrastructure for organisations that can't afford downtime — government agencies, financial institutions, healthcare providers.
- **Includes:** infrastructure architecture, security hardening, ongoing managed support (unlimited phone/email support, remote-first resolution, on-site when required).

#### 3.3.4 AI & Data Solutions
- **What it covers:** Applied AI features embedded into real operational systems — not experimentation for its own sake.
- **Representative platforms:** RoundTrack AI Proctoring (browser-based exam/interview monitoring), EBMS (AI-assisted electricity billing validation at scale), AI-proctored application screening for youth employment programmes.

*(Each service sub-page follows the same layout: hero statement → capability list → 2–3 relevant case studies pulled from Work → CTA banner.)*

---

### 3.4 Work (Case Studies / Portfolio)

**Purpose:** This is Roundstone's single biggest untapped asset — a client list most agencies would kill for. The current profile buries it in bullet lists; the new site should treat each as a mini case study.

**Layout:** Filterable grid — tabs for *Public Sector · Enterprise & Foundations · Products*. Each card: platform name, one-sentence outcome, client/sector tag, "View details →."

**Public Sector (B2G)**
- **Yellow Card Portal** — Federal Ministry of Health · Enrollment, issuance, and management of Nigeria's new E-Yellow Card.
- **Case Management System** — Ministry of Justice · End-to-end case tracking and management.
- **KDSG Scholarship Board Platform** — Kaduna State Government · Application, testing, selection, and notification for state scholarships.
- **Kashim Ibrahim Fellowship Platform** — Application and selection management for a flagship state fellowship programme.
- **Boola** — Kaduna State · A scavenger/scrap-aggregator tracking app organised by sector and location.

**Enterprise & Foundations (B2B)**
- **KadaHive Hub** — Bank of Industry & Kaduna State Government · Roundstone manages a state-of-the-art workspace, tech training, and business incubation hub.
- **EBMS** — Centralised, AI-assisted electricity bill processing at scale.
- **Tony Elumelu Foundation Platform** — Business plan submission, pitch video handling, scoring, payment, and notification for one of Africa's leading entrepreneurship programmes.
- **AIG-Imoukhuede Foundation Platform** — Application, testing, selection, and notification management.
- **Enterprise NGR — YOE Programme** — Application submission with AI-proctored testing and selection.
- **Learning Management System** — Digital delivery and tracking for educational and vocational training programmes.
- **UNECA Digital Identity Consulting** — Ongoing advisory role with the UN Economic Commission for Africa on digital identity.

**Products (B2C)**
- **Clay** — A buy-now-pay-later platform giving customers instalment purchasing power.
- **RoundTrack AI Proctoring** — Browser-based AI proctoring for exams, assessments, and interviews.
- **Health App** — Consumer-facing app for immediate access to care and patient engagement.

Each "View details" page (template): Client/Sector · Challenge (1 para) · Approach (1 para) · What we built (bullets) · Outcome (bullets, quantify where possible) · Related services (links back to Services).

---

### 3.5 Contact

| Section | Content |
|---|---|
| **Headline** | "Let's talk about what you're building." |
| **Two-column layout** | Left: contact form (Name, Email, Phone, Company, Service of interest [dropdown], Message, Submit). Right: office details card — address (Nexus Workspaces, No. 8 Bida Road, Off Yakubu Gowon Road, Kaduna), phone, email, embedded map. |
| **Secondary strip** | "Prefer email?" direct mailto link + response-time expectation ("We typically respond within 1 business day") |
| **Form behaviour** | Inline validation, success state confirmation message, spam protection (honeypot/CAPTCHA), form submissions routed to a real inbox — this is the #1 functional requirement the current site is likely missing. |

---

## 4. Cross-Site UI/UX Recommendations

1. **Navigation:** Max 5 top-level items + persistent CTA. Services shows a dropdown mega-menu with the 4 sub-services and short one-line descriptors — reduces bounce and shows breadth immediately.
2. **Visual hierarchy:** One serif headline + one supporting sans subhead per section, max. Resist stacking multiple bold statements — premium sites say less per section, not more.
3. **CTA strategy:** Every page ends in a CTA banner; never more than one *primary* (filled, Burnt Sienna) CTA visible on screen at a time — secondary actions are ghost/outline buttons.
4. **Social proof placement:** Logo bar goes directly under the hero on every major page, not buried at the bottom — this is the fastest trust signal Roundstone has.
5. **Mobile behaviour:** Nav collapses to a full-screen overlay menu; stat rows go from 4-column to 2×2 grid; case study filter tabs become a horizontal scroll chip row; forms go full-width single column.
6. **Accessibility:** Minimum 4.5:1 contrast (Biscay-on-white and white-on-Biscay both pass comfortably; check Pale Sky text on white stays above 4.5:1 for body copy — may need to darken slightly for small sizes); all icons paired with text labels; form fields fully labelled, not placeholder-only.
7. **Performance/perception of premium:** Optimise and lazy-load imagery, but never use skeleton-loading gimmicks that draw attention to load time — a fast, quiet load is itself a premium cue.
8. **Consistency device:** Use one recurring visual motif from the brand (e.g., a thin quarter-circle/arc, echoing the dotted-circle logomark) as a subtle section-divider graphic — gives the site a signature without resorting to generic blob shapes or gradients.

---

## 5. Content Tone Guidelines

- Write in first person plural ("we"), active voice, short sentences.
- Lead every section with the *outcome*, not the *feature* ("Digitized national health card enrollment end-to-end" not "We built a portal using X technology").
- Never use unverifiable superlatives ("world-class," "cutting-edge," "revolutionary") — the client list is the superlative. Let facts carry the weight.
- Numbers over adjectives wherever the profile supports it (13+ years, 25 professionals, 6-month warranty, named institutions).

---

## Next Steps

I can take this straight into a working prototype — a clickable homepage (and one or two key sub-pages) built with the brand system above, so you can see the direction in the browser before any development investment. Want me to build that next?
