export const portfolioData = {
  personal: {
    name: "Prachi Satish Nawale",
    initials: "PSN",
    role: "Final-Year IT Student | Full Stack Developer | Aspiring SDE/QA Engineer",
    email: "prachinawale04@gmail.com",
    phone: "Phone number available on request",
    location: "Sangamner, Maharashtra, India",
    resume: "/Prachi-Satish-Nawale-Resume.pdf",
    socials: {
      github: "#",
      linkedin: "#",
    },
  },
  hero: {
    eyebrow: "Available for graduate opportunities",
    intro:
      "I build practical, reliable software with a strong interest in full-stack development, quality assurance, problem solving, and thoughtful user experiences.",
    codeLines: [
      "const focus = ['Build', 'Test', 'Improve'];",
      "const mindset = 'Curious + Consistent';",
      "ship({ quality: true, impact: true });",
    ],
  },
  about: {
    title: "A builder who cares about quality.",
    paragraphs: [
      "I am pursuing a B.E. in Information Technology at Amrutvahini College of Engineering, Sangamner. I enjoy turning ideas into practical applications and strengthening them through careful testing and debugging.",
      "My foundation spans Java, full-stack development, software testing, database management, and problem solving. I am looking for opportunities where I can learn quickly, contribute thoughtfully, and grow as an engineer.",
    ],
    stats: [
      { value: "8.96/10", label: "CGPA" },
      { value: "Final Year", label: "B.E. Information Technology" },
      { value: "Nov 2022", label: "Degree started" },
    ],
    opportunities: ["Software Development Engineer", "QA Engineer", "Software Engineer"],
  },
  skills: [
    { category: "Languages", icon: "code", items: ["Java", "Python", "JavaScript", "SQL"] },
    { category: "Frontend", icon: "layout", items: ["React.js", "HTML5", "CSS3"] },
    { category: "Backend Technologies", icon: "server", items: ["Node.js", "Express.js"] },
    { category: "Databases", icon: "database", items: ["MongoDB", "MySQL", "JDBC"] },
    {
      category: "Core Computer Science",
      icon: "cpu",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "REST APIs",
        "Software Testing",
        "Debugging",
      ],
    },
    { category: "Tools", icon: "wrench", items: ["Git", "GitHub", "Postman", "VS Code"] },
  ],
  experience: [
    {
      company: "Zensar Technologies",
      role: "Software Development Intern",
      date: "December 2024 – January 2025",
      highlights: [
        "Completed training in Java, JDBC, and SQL.",
        "Developed a Java application integrated with MySQL using JDBC.",
        "Implemented CRUD operations and applied OOP and database concepts.",
        "Performed debugging and software testing.",
        "Collaborated with team members on development projects.",
      ],
    },
  ],
  projects: [
    {
      number: "01",
      title: "Deepfake Audio Detection System",
      description: "An AI-assisted system designed to identify synthetic or generated audio and present clear prediction results.",
      technologies: ["Python", "MERN", "MongoDB"],
      highlights: [
        "Developed an AI-based audio classification workflow.",
        "Implemented APIs for prediction and result processing.",
        "Achieved 85%+ detection accuracy.",
      ],
      github: "#",
      demo: "#",
    },
    {
      number: "02",
      title: "Agriculture Management System",
      description: "A structured desktop application for organizing essential farmer and crop information.",
      technologies: ["Java", "JDBC", "MySQL"],
      highlights: [
        "Developed a CRUD-based agriculture management application.",
        "Managed farmer and crop-related information.",
        "Applied OOP principles and JDBC-based MySQL integration.",
      ],
      github: "#",
      demo: "#",
    },
    {
      number: "03",
      title: "AgroConnectMitr",
      description: "A job-matching platform connecting farmers with agricultural workers through role-focused experiences.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      highlights: [
        "Developed a full-stack job-matching platform.",
        "Implemented role-based dashboards.",
        "Designed REST API-based frontend and backend communication.",
      ],
      github: "#",
      demo: "#",
    },
  ],
  certifications: [
    { title: "Programming in Java", issuer: "NPTEL", url: "#" },
    { title: "Google Cybersecurity Professional Certificate", issuer: "Coursera", url: "#" },
    { title: "Java Full Stack Developer Virtual Internship", issuer: "EduSkills", url: "#" },
  ],
  footer: {
    tagline: "Building dependable software, one thoughtful solution at a time.",
  },
};

export const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];