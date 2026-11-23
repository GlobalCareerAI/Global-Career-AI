# Project memory

## Product intent & audience

- Arabic-first job portal/platform connecting job seekers with employers
- Primary audience: Arabic-speaking job seekers and hiring companies
- Core flows: job search by keyword/city, browse categories, view featured jobs, apply directly, AI-powered matching, interactive CV, instant alerts
- Includes seeker/company/platform navigation paths and stats (jobs, companies, candidates)

## Brand personality & voice

- Arabic primary language with language toggle available
- Clean, calm, trustworthy, and straightforward tone
- Simple and approachable; light visual presence

## Visual design & UX direction

- **Stack:** Vite + React + Tailwind CSS
- **Direction:** RTL layout with Arabic fonts (Tajawal)
- **Theme:** Light, simple, minimal; soft light background with blue accent touches
- **Sections built:** sticky header (nav, language toggle, login/signup, mobile dropdown), hero (large heading, job/city search, popular keywords, stats), job categories grid (8 categories with opportunity counts), featured jobs (location, work type, salary, skills, apply button), features section (AI matching, interactive CV, instant alerts), 4-step how-it-works, footer (seekers/companies/platform/social links)
- **Motion:** simple appear-on-scroll and hover effects
- Prefer clean spacing, rounded cards, and subtle blue highlights on light backgrounds

## Decisions, constraints & rationale

- Started from empty project; scaffolded Vite + React + Tailwind as the base
- Arabic homepage built first per explicit request; design is light and simple
- Type-check and production build both pass successfully
- RTL and Tajawal font chosen to ensure proper Arabic typography and reading direction
- Blue accent on light palette selected for calm, professional feel

## Open questions & assumptions

- Secondary language for the toggle not yet specified (likely English)
- No backend/API yet; job data, categories, and stats are static placeholder content
- Authentication flow, job detail pages, and application submission not yet implemented
- Brand name, logo, and exact color values not finalized