import {
  meta,
  shopify,
  starbucks,
  tesla,
  vr,
  lua,
  unreal,
  unity,
  sql,
  cpp,
  python,
  java,
  fastapi,
  numpy,
  javaEncryption,
  speechRecognition,
  audioSegmentation,
  ubc,
  seaspan,
  echo_empathy_icon,
  lock,
  exploration,
} from "../assets/images";

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  gdb,
  junit,
  r,
  golang,
} from "../assets/icons";

export const skills = [
  // Additional skills from the update
  {
    imageUrl: vr, // Placeholder or link needed
    name: "AR/VR/MR",
    type: "Interactive Technologies",
  },
  {
    imageUrl: lua, // Placeholder or link needed
    name: "Lua Scripting",
    type: "Programming Language",
  },
  // Existing skills
  {
    imageUrl: css, // Assuming placeholder or link
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express, // Assuming placeholder or link
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git, // Assuming placeholder or link
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github, // Assuming placeholder or link
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html, // Assuming placeholder or link
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript, // Assuming placeholder or link
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb, // Assuming placeholder or link
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion, // Assuming placeholder or link
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui, // Assuming placeholder or link
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs, // Assuming placeholder or link
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs, // Assuming placeholder or link
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react, // Assuming placeholder or link
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux, // Assuming placeholder or link
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass, // Assuming placeholder or link
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss, // Assuming placeholder or link
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript, // Assuming placeholder or link
    name: "TypeScript",
    type: "Frontend",
  },
  // New or updated skills based on the resume
  {
    imageUrl: java, // Placeholder or link needed
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: golang, // Placeholder or link needed
    name: "Golang",
    type: "Backend",
  },
  {
    imageUrl: python, // Placeholder or link needed
    name: "Python",
    type: "General",
  },
  {
    imageUrl: cpp, // Placeholder or link needed
    name: "C/C++",
    type: "General",
  },
  {
    imageUrl: sql, // Placeholder or link needed
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: r, // Placeholder or link needed
    name: "R",
    type: "Data Analysis",
  },
  {
    imageUrl: unity, // Placeholder or link needed
    name: "Unity",
    type: "Game Development",
  },

  {
    imageUrl: unreal, // Placeholder or link needed
    name: "Unreal Engine",
    type: "Game Development",
  },
  {
    imageUrl: fastapi, // Placeholder or link needed
    name: "FastAPI",
    type: "Backend",
  },
  {
    imageUrl: junit, // Placeholder or link needed
    name: "JUnit",
    type: "Testing",
  },
  {
    imageUrl: gdb, // Placeholder or link needed
    name: "GDB",
    type: "Development Tool",
  },
  // Considering libraries as a part of technologies
  {
    imageUrl: numpy, // Placeholder or link needed
    name: "NumPy",
    type: "Data Science",
  },
  {
    imageUrl: javaEncryption, // Placeholder or link needed for RSA/AES
    name: "Java Encryption (RSA/AES)",
    type: "Security",
  },
  {
    imageUrl: speechRecognition, // Placeholder or link needed
    name: "Speech Recognition",
    type: "AI/ML",
  },
  {
    imageUrl: audioSegmentation, // Placeholder or link needed
    name: "Audio Segmentation/Transcription",
    type: "AI/ML",
  },
];

export const experiences = [
  {
    title: "3D Visualization Intern",
    company_name: "Seaspan ULC",
    icon: seaspan,
    iconBg: "#ffffff",
    cardBg: "#777019", // Assuming a maritime color theme
    date: "January 2024 - Present",
    points: [
      "Achieved a 40% enhancement in the realism and accuracy of maritime visualizations through advanced 3D modeling VR techniques, directly contributing to a 25% improvement in client feedback on project deliverables.",
      "Led the integration of Lua scripting for interactive models, resulting in a significant reduction in time required for model updates, improving time and space complexity of existing algorithms with a 30% increase in the security of model data through pioneering encryption practices.",
    ],
  },

  {
    title: "Undergraduate Teaching Assistant - MATH 101",
    company_name: "University of British Columbia",
    icon: ubc,
    iconBg: "#ffffff", // UBC's brand color
    cardBg: "#5A33FF",
    date: "August 2023 - Present",
    points: [
      "Contributed to the development of innovative teaching methodologies for integral calculus, emphasizing practical application and critical thinking.",
      "Organized and led weekly study groups, offering additional support and fostering a collaborative learning environment for students.",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant - First Year Focus",
    company_name: "University of British Columbia",
    icon: ubc,
    iconBg: "#ffffff", // UBC's brand color
    cardBg: "#4ECC9A",
    date: "August 2023 - Present",
    points: [
      "Utilized technical expertise as a Teaching Assistant for a First-Year Academic Engagement Seminar, driving discussions and activities for 150+ incoming first-year students within the realm of computer science and math.",
      "Designed 25+ computer science-integrated co-curricular events, enhancing the learning environment through peer mentoring and study sessions, and effectively managing course content.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Emerging Media Lab, University of British Columbia",
    icon: ubc,
    iconBg: "#ffffff", // A vibrant tech-inspired color
    cardBg: "#667EAB",
    date: "August 2023 - January 2024",
    points: [
      "Collaborated in the development of innovative open-source teaching tools leveraging VR and AR technologies, using 3D modeling tools such as Unreal, Unity, Maya, and Blender.",
      "Built a secure VR makerspace with 2FA multiplayer server for the UBC Master of Education in Literacy Education program, enhancing interactive learning, student engagement, and digital literacy.",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant - MATH 100",
    company_name: "University of British Columbia",
    icon: ubc,
    iconBg: "#ffffff", // UBC's brand color
    cardBg: "#D7C342",
    date: "August 2023 - January 2024",
    points: [
      "Facilitated understanding of fundamental mathematical concepts for first-year students, through engaging lectures and hands-on problem-solving sessions.",
      "Provided personalized feedback and academic support to students, significantly enhancing their comprehension and performance in calculus.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/anandkaranubc",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/karananandubc",
  },
];

export const projects = [
  {
    iconUrl: echo_empathy_icon, // Placeholder, replace with actual icon URL
    theme: "btn-back-green", // Suggesting a new theme color; adjust as needed
    name: "Echo Empathy",
    description:
      "Co-developed Echo Empathy, a web application leveraging OpenAI and Reddit to match individuals with similar mental health challenges, fostering a community of empathy and support through advanced sentiment analysis algorithms and secure, user-friendly interfaces.",
    link: "https://github.com/Vihangip/EchoEmpathy", // Placeholder, replace with actual link
  },
  {
    iconUrl: ubc, // Placeholder, replace with actual icon URL
    theme: "btn-back-blue", // Keeping theme consistent with the project's color scheme
    name: "UBC Degree Navigator - BlueNav",
    description:
      "Collaborated with a team of 13 developers and designers to create a UBC student-oriented degree and graduation requirement tracking system, significantly contributing by optimizing data structures, integrating backend and frontend, and implementing Redux for improved system performance.",
    link: "https://github.com/ubclaunchpad/ubc-degree-navigator", // Placeholder, replace with actual link
  },
  {
    iconUrl: lock, // Placeholder, replace with actual icon URL
    theme: "btn-back-red", // Suggesting a new theme color; adjust as needed
    name: "Multipurpose Encryption App",
    description:
      "Developed a Swing-based application enabling users to securely encrypt and decrypt passwords using the customized RSA algorithm and offers user authentication with encrypted credentials, supported by over 300+ test cases for reliability and functionality.",
    link: "https://github.com/anandkaranubc/Encryption-App", // Placeholder, replace with actual link
  },
  {
    iconUrl: exploration, // Placeholder, replace with actual icon URL
    theme: "btn-back-green", // Suggesting a new theme color for differentiation
    name: "Air Quality Analysis in an Italian City",
    description:
      "Analyzed air quality variations between day and night in an Italian city, performing hypothesis testing and bootstrapping for statistical analysis, validated through 95% confidence intervals at 5% significance level.",
    link: "https://github.com/ZackYe42/STAT201-G11-Project", // Placeholder, replace with actual link
  },
];
