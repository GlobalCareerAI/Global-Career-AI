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
- **Application form (generalized):** accepts any job title (dropdown with "أخرى" → free text), work type (full/remote/hybrid/part), country (dropdown with "دولة أخرى" option), city (free text); heading: "قدّم على الوظيفة التي تناسبك، في أي مكان"
- **Motion:** simple appear-on-scroll and hover effects
- Prefer clean spacing, rounded cards, and subtle blue highlights on light backgrounds

## Decisions, constraints & rationale

- Started from empty project; scaffolded Vite + React + Tailwind as the base
- Arabic homepage built first; design is light and simple
- RTL and Tajawal font chosen for proper Arabic typography and reading direction
- Blue accent on light palette selected for calm, professional feel
- Application form generalized per explicit request: removed Riyadh-only restriction; added country/city/work-type fields; job title dropdown includes "أخرى" for arbitrary entries
- Database table for applications extended with columns: city, country, work type
- Type-check and production build both pass successfully

## Open questions & assumptions

- Secondary language for the toggle not yet specified (likely English)
- Homepage job data, categories, and stats remain static placeholder content
- Authentication flow and job detail pages not yet implemented
- Brand name, logo, and exact color values not finalized
- Country/job-title dropdown lists are manually curated; no dynamic data source yet