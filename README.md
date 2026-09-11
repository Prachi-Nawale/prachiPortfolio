# Prachi's Portfolio Hub

Build a modern, professional, responsive personal portfolio website for Prachi Satish Nawale, a final-year Information Technology student and aspiring Software Developer / QA Engineer.

The portfolio must be a frontend-only React.js single-page application. Use React.js, JavaScript (ES6+), HTML5, and CSS3 only. Do not create or use any backend, database, server, authentication system, API server, PHP, Python backend, Java backend, Firebase, MongoDB, MySQL, PostgreSQL, Express server, or other server-side technology. The backend technologies mentioned in the portfolio are only part of Prachi's skills/projects and must not be implemented in the portfolio itself.

Use a clean, professional, slightly tech-forward design suitable for recruiters and software engineering job applications. Make it mobile-first, fully responsive, fast-loading, accessible, and visually polished. Use a teal or indigo accent color, modern typography, subtle borders/shadows, clean cards, smooth hover effects, and a working dark/light mode toggle. Avoid excessive gradients, animations, or unnecessary visual clutter.

Use React functional components and keep the project maintainable. Use only lightweight frontend dependencies when necessary, such as "react-icons" and optionally "framer-motion". Prefer CSS transitions/animations where possible to minimize dependencies.

Required project structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── data.js
├── App.jsx
├── main.jsx
└── index.css
public/
└── Prachi-Satish-Nawale-Resume.pdf

Create a central "src/data/data.js" file containing all editable portfolio content, including personal information, hero content, about text, skills, experience, projects, certifications, contact information, and social/project links. Components should import and render this data dynamically instead of hardcoding portfolio information throughout JSX. Make it easy to update the entire portfolio by editing only "data.js".

Navbar

Create a sticky responsive navigation bar with links to:

- Home
- About
- Skills
- Experience
- Projects
- Certifications
- Contact

Include smooth scrolling, active-section highlighting, a responsive mobile hamburger menu, and a dark/light mode toggle. The mobile menu should close after navigation. Make all controls keyboard accessible and use appropriate "aria-label" attributes.

Hero Section

Display:

Prachi Satish Nawale

Final-Year IT Student | Full Stack Developer | Aspiring SDE/QA Engineer

Add a short professional introduction highlighting her interest in software development, full-stack development, software testing, problem solving, and building practical applications.

Include two CTA buttons:

- Download Resume
- Contact Me

The resume button should point to:

/public/Prachi-Satish-Nawale-Resume.pdf

The Contact Me button should smoothly scroll to the Contact section.

Include GitHub and LinkedIn links with icons using "react-icons". Store all URLs in "data.js" and use placeholders such as "#" where the actual URL is not available.

Add a subtle developer/technology-inspired visual element without making the Hero section overly complex.

About Section

Create a concise, recruiter-friendly About Me section using this information:

Prachi Satish Nawale is pursuing a B.E. in Information Technology with a CGPA of 8.96/10 at Amrutvahini College of Engineering, Sangamner, from November 2022 – Present.

She has hands-on knowledge and practical experience in:

- Java
- Full Stack Development
- Software Testing
- Database Management
- Problem Solving

Mention that she is interested in opportunities such as:

- Software Development Engineer (SDE)
- QA Engineer
- Software Engineer

Present the information using a clean combination of text and small information cards/statistics where appropriate.

Skills Section

Create attractive categorized skill cards/chips with icons and subtle hover animations.

Languages

- Java
- Python
- JavaScript
- SQL

Frontend

- React.js
- HTML5
- CSS3

Backend Technologies

- Node.js
- Express.js

Databases

- MongoDB
- MySQL
- JDBC

Core Computer Science

- Data Structures & Algorithms
- Object-Oriented Programming
- DBMS
- REST APIs
- Software Testing
- Debugging

Tools

- Git
- GitHub
- Postman
- VS Code

Use "react-icons" where suitable. Make the skill layout responsive and accessible.

Important: Node.js, Express.js, databases, and REST APIs are only displayed as skills/projects. Do not implement any backend functionality in this portfolio.

Experience Section

Create a modern responsive vertical timeline.

Zensar Technologies

Software Development Intern

December 2024 – January 2025

Include:

- Completed training in Java, JDBC, and SQL.
- Developed a Java application integrated with MySQL using JDBC.
- Implemented CRUD operations.
- Performed debugging and software testing.
- Collaborated with team members on development projects.
- Applied OOP and database concepts to practical software development.

Make the timeline look professional on both desktop and mobile.

Projects Section

Create a responsive 3-card project grid.

Every project card must contain:

- Project title
- Short description
- Technology badges
- 2–3 key highlights
- GitHub button
- Live Demo button

Store all project information and URLs in "data.js". Use "#" as placeholders for unavailable links.

Project 1: Deepfake Audio Detection System

Technologies: Python, MERN, MongoDB

Highlights:

- Developed an AI-based audio classification system for detecting deepfake/generated audio.
- Implemented backend APIs for prediction and result processing.
- Achieved 85%+ detection accuracy.

Project 2: Agriculture Management System

Technologies: Java, JDBC, MySQL

Highlights:

- Developed a CRUD-based agriculture management application.
- Managed farmer and crop-related information.
- Applied OOP principles and JDBC-based MySQL integration.

Project 3: AgroConnectMitr

Technologies: React.js, Node.js, Express.js, PostgreSQL

Highlights:

- Developed a full-stack job-matching platform connecting farmers and agricultural workers.
- Implemented role-based dashboards.
- Designed REST API-based communication between frontend and backend.

Again, these backend technologies should only appear as project information. The portfolio itself must remain completely frontend-only.

Certifications Section

Create a clean certification list/card layout containing:

- Programming in Java — NPTEL
- Google Cybersecurity Professional Certificate — Coursera
- Java Full Stack Developer Virtual Internship — EduSkills

Store certification information and optional certificate URLs in "data.js".

Contact Section

Create a professional Contact section containing:

Email: prachinawale04@gmail.com

Phone: Use an editable placeholder in "data.js" because the actual phone number has not been provided.

Location: Sangamner, Maharashtra, India

Include GitHub and LinkedIn icons/links.

Create a frontend-only contact form containing:

- Name
- Email
- Subject
- Message
- Submit button

The form must not require a backend. Implement it using either:

1. A "mailto:" approach that opens the user's default email client, or
2. A clearly marked placeholder for a future third-party form service.

Do not create an API endpoint or backend form handler.

Add basic client-side validation for required fields and email format, and provide a clear success/instruction message after submission.

Footer

Create a minimal professional footer containing:

- Prachi Satish Nawale
- Short professional tagline
- GitHub link
- LinkedIn link
- Copyright
- "Built with React" text

Dark/Light Mode

Implement a fully working dark/light theme toggle.

Requirements:

- Detect system preference on first visit.
- Save the selected theme using "localStorage".
- Restore the user's theme preference on reload.
- Use CSS variables where practical.
- Ensure sufficient contrast in both themes.
- Provide an accessible theme toggle with an appropriate "aria-label".

Animations

Add subtle, professional animations:

- Section fade-in/reveal
- Slight upward motion on scroll
- Project/card hover effects
- Button hover effects
- Mobile menu animation
- Smooth scrolling

Use CSS animations/transitions or Framer Motion if genuinely useful. Do not over-animate the website.

Respect:

@media (prefers-reduced-motion: reduce)

so users who prefer reduced motion are not forced to see animations.

Responsive Design

The portfolio must work perfectly on:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors

Use mobile-first CSS and responsive breakpoints.

Ensure there is:

- No horizontal scrolling
- Responsive typography
- Responsive navbar
- Responsive hero section
- Responsive skill cards
- Responsive experience timeline
- Responsive project grid
- Responsive contact form
- Responsive footer

Accessibility

Use semantic HTML5 elements such as:

- "

"
- ""
- ""
- "

"
- "

"
- "

"

Follow good accessibility practices:

- Proper heading hierarchy
- Descriptive link text
- Accessible buttons
- Appropriate "aria-label" attributes
- Keyboard navigation
- Visible focus states
- Meaningful image "alt" text
- Good color contrast
- Reduced-motion support
- Do not rely on color alone to communicate information

SEO

Add basic SEO metadata:

- Page title
- Meta description
- Relevant keywords
- Open Graph metadata where appropriate

Use:

Title: "Prachi Satish Nawale | Software Developer & QA Engineer"

Create an appropriate professional meta description.

Performance

Keep the website lightweight and fast.

- Avoid unnecessary dependencies.
- Use reusable React components.
- Avoid duplicated code.
- Optimize images.
- Lazy-load non-critical images.
- Avoid unnecessary re-renders.
- Keep CSS organized.
- Keep the final bundle reasonably small.
- Do not add a backend.

Code Quality

Write clean, readable, production-style React code.

Use:

- Functional components
- React hooks where appropriate
- Reusable components
- ".map()" for rendering arrays from "data.js"
- Centralized data/configuration
- Meaningful variable names
- Minimal duplication
- Clean CSS
- Proper component separation

Do not put large amounts of static portfolio content directly inside JSX when it can be stored in "data.js".

Final Deliverables

Generate the complete working source code for every file required to run the portfolio, including:

package.json
src/main.jsx
src/App.jsx
src/index.css
src/data/data.js
src/components/Navbar.jsx
src/components/Hero.jsx
src/components/About.jsx
src/components/Skills.jsx
src/components/Experience.jsx
src/components/Projects.jsx
src/components/Certifications.jsx
src/components/Contact.jsx
src/components/Footer.jsx

Also explain where to place:

public/Prachi-Satish-Nawale-Resume.pdf

If you cannot generate the actual PDF, create the correct file path and clearly explain that the user's real resume PDF should be placed there.

Finally, provide concise instructions for:

1. Installing dependencies.
2. Running the project locally.
3. Updating portfolio information through "data.js".
4. Replacing the resume.
5. Updating GitHub, LinkedIn, project, and certification links.
6. Changing the phone number.
7. Deploying the frontend to GitHub Pages, Netlify, or Vercel.

Critical Constraint

This is strictly a frontend-only portfolio website.

The only technologies used to build the portfolio should be:

React.js + JavaScript + HTML5 + CSS3

Do not create any backend, database, authentication, server, API endpoint, or server-side code.

The final website should feel like a polished, modern portfolio created for a final-year IT student applying for Software Developer, SDE, QA Engineer, and Software Engineering roles.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/26eb06f5-2ce3-4796-8ffe-159de40b6477).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
