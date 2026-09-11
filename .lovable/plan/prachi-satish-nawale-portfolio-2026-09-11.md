# Prachi Satish Nawale Portfolio

## Overview
Build a polished, recruiter-focused single-page React portfolio at the home page. The site will remain entirely frontend-only and use centralized portfolio data for easy updates.

## What I’ll build
- Sticky navigation with active-section highlighting, smooth scrolling, mobile menu, and accessible dark/light theme control.
- Hero, About, Skills, Experience, Projects, Certifications, Contact, and Footer sections.
- Responsive cards, skill groups, professional timeline, project actions, social links, and subtle technology-inspired decoration.
- Frontend-only contact form with validation that opens the visitor’s email application using a safely encoded `mailto:` link.
- System theme detection, saved theme preference, reduced-motion support, visible keyboard focus, and mobile-first layouts.
- Route-level SEO metadata for Prachi’s portfolio.

## Content and maintenance
- Store personal details, copy, skills, experience, projects, certifications, contact details, and all links in `src/data/data.js`.
- Split each requested section into its own reusable React component.
- Include a resume download path at `/Prachi-Satish-Nawale-Resume.pdf`; the placeholder will explain where the real PDF belongs.

## Visual direction
- Clean, tech-forward editorial layout using teal as the primary accent, restrained coral highlights, crisp borders, and subtle shadows.
- Modern sans-serif typography with strong hierarchy and compact recruiter-friendly content.
- No heavy gradients, visual clutter, or excessive animation.

## Technical details
- Use the existing React/TanStack application shell while keeping the portfolio itself frontend-only.
- Use CSS variables and Tailwind utilities from the central design system.
- Add only a lightweight icon dependency if needed.
- Verify the page at desktop and mobile sizes, including menu, theme, section navigation, form behavior, overflow, and console errors.
