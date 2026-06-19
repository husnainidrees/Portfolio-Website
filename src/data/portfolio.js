// =============================================================
// All content below is sourced directly from Muhammad Husnain's CV.
// Wording has been refined for clarity and international hiring,
// but no projects, roles, or skills have been invented.
// =============================================================

export const personal = {
  name: 'Muhammad Husnain',
  role: 'Software Engineer',
  tagline: 'Python • Ruby on Rails • React.js',
  location: 'Lahore, Pakistan',
  email: 'husnainidrees78@gmail.com',
  phone: '+92 345 1482854',
  // Resume lives in /public and is served at this path
  resumeUrl: '/Muhammad_Husnain_CV.pdf',
  // TODO: replace with your real GitHub profile URL
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/in/muhammad-husnain192',
  intro:
    'Software Engineer building scalable, high-performance web applications with Python (Django, FastAPI), Ruby on Rails, and React.js — with hands-on experience shipping live production systems.',
}

export const about = {
  summary:
    'A highly motivated Software Engineering graduate with a strong passion for web development and machine learning. I build dynamic, responsive web applications using Ruby on Rails, React.js, and Django (Python), and enjoy translating complex client requirements into effective, well-engineered solutions. I also develop machine learning models and apply AI techniques to solve real-world problems, and I thrive in collaborative, fast-paced engineering teams.',
  highlights: [
    'Full-stack development across Django, FastAPI, Ruby on Rails and React.js',
    'Designing and integrating clean, secure RESTful APIs',
    'Asynchronous processing with Celery & Redis, plus Stripe payment integrations',
    'Cloud deployment workflows on AWS (EC2, S3)',
    'Machine learning, deep learning and computer vision',
  ],
}

// Skill groups — extracted from the CV's experience, projects and skills sections
export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 82 },
      { name: 'TypeScript', level: 72 },
      { name: 'SQL', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', level: 90 },
      { name: 'Django REST Framework', level: 88 },
      { name: 'FastAPI', level: 82 },
      { name: 'Ruby on Rails', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'Celery & Redis', level: 78 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 82 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    title: 'AI / ML & Cloud',
    skills: [
      { name: 'PyTorch', level: 78 },
      { name: 'TensorFlow', level: 74 },
      { name: 'OpenCV', level: 76 },
      { name: 'scikit-learn', level: 78 },
      { name: 'AWS (EC2, S3)', level: 72 },
      { name: 'Stripe API', level: 75 },
    ],
  },
]

export const projects = [
  {
    title: 'FLIT — AI Hiring Platform',
    description:
      'A full-stack SaaS recruitment platform that automates hiring end to end. An AI matching engine ranks candidates against roles and powers personalised job recommendations, while AI resume summarisation gives employers an instant shortlist view. Includes role-based workflows for employers and candidates, Google Calendar interview scheduling, and Stripe-powered subscriptions — built to scale.',
    tech: ['Django', 'Django REST Framework', 'Python', 'React', 'AI Matching', 'Google Calendar API', 'Stripe'],
    type: 'Full-Stack SaaS · AI Hiring',
    github: null,
  },
  {
    title: 'SlotySync — Car Wash Booking Platform',
    description:
      'A production-ready scheduling platform built for service-based businesses in Dubai. Customers book across multiple time slots with real-time availability that prevents double-booking, while operators manage the full pipeline through a dedicated admin panel. Engineered with a clean REST API for fast, reliable booking at scale.',
    tech: ['React', 'Django', 'Django REST Framework', 'PostgreSQL'],
    type: 'Booking & Scheduling System',
    github: null,
  },
  {
    title: 'WeaveSync — Desktop Productivity App',
    description:
      'A modern, cross-platform desktop productivity app built on a Rust core for speed and reliability. Tauri keeps the footprint tiny while a lightweight web UI delivers a fast, native-feeling experience — pairing high-performance systems engineering with a clean, responsive interface.',
    tech: ['Rust', 'Tauri', 'React', 'Cross-Platform'],
    type: 'Desktop Application',
    github: null,
  },
  {
    title: 'Green-Pal',
    description:
      'A full-stack service booking platform built on Django, featuring user authentication, end-to-end booking workflows, and admin dashboards. Designed with role-based access control for seamless interaction between users and service providers, and a fully responsive UI.',
    tech: ['Python', 'Django', 'Tailwind CSS', 'HTML', 'CSS'],
    type: 'Full-Stack Web App',
    github: null,
  },
  {
    title: 'Body-Part Based Person Re-Identification',
    description:
      'Research-based final year project focused on improving person re-identification accuracy through body-part-based modelling. Trained and evaluated deep learning models across the Market-1501, DukeMTMC and MTMC datasets using modern computer-vision tooling.',
    tech: ['PyTorch', 'TensorFlow', 'Torchreid', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas'],
    type: 'Research / Computer Vision',
    github: null,
  },
  {
    title: 'Bug Tracking System',
    description:
      'An issue-tracking platform developed at Visnext to streamline bug reporting, resolution and team collaboration. Built with a clean MVC architecture and secure, role-based user management for maintainability and scale.',
    tech: ['Django', 'Ruby on Rails', 'PostgreSQL', 'REST API'],
    type: 'Internal Tooling',
    github: null,
  },
]

export const experience = [
  {
    role: 'Software Engineer — Python Developer',
    company: 'NeuroOceans AI',
    duration: 'Sep 2025 – Present',
    points: [
      'Ship and maintain multiple live production projects, collaborating with cross-functional teams to deliver scalable, high-performance applications.',
      'Build backend systems with Django, FastAPI and Ruby on Rails using clean architecture and optimized business logic.',
      'Design and integrate RESTful APIs for seamless communication between frontend, backend and third-party services.',
      'Implement asynchronous task processing and background jobs with Celery and Redis to improve performance and reliability.',
      'Integrate secure Stripe payment workflows, including subscriptions and transaction handling.',
      'Deploy and manage scalable infrastructure on AWS (EC2, S3) and build modern, responsive React.js + Tailwind interfaces.',
    ],
  },
  {
    role: 'Associate Software Engineer — Python Developer',
    company: 'Visnext Software Solutions',
    duration: 'Nov 2024 – Sep 2025',
    points: [
      'Contributed production-level features to the live GreenPal project alongside cross-functional teams.',
      'Developed a Bug Tracking System using Django and Ruby on Rails to improve issue tracking and resolution.',
      'Built RESTful APIs with Django REST Framework and FastAPI for seamless data communication.',
      'Created responsive React.js, Tailwind CSS and Bootstrap interfaces, improving UI/UX across the product.',
      'Implemented complete authentication systems with secure login, registration and role-based access control.',
    ],
  },
  {
    role: 'AI/ML Intern — Software Engineer',
    company: 'Axix Technologies',
    duration: 'Jan 2024 – Oct 2024',
    points: [
      'Developed APIs with Flask and tested them via Postman to handle HTTP requests and integrate Python backend functionality.',
      'Collaborated on AI-related projects, applying machine learning algorithms to solve real-world problems.',
      'Used GitHub for version control and collaborative development workflows.',
    ],
  },
  {
    role: 'Backend Development Trainee',
    company: 'HiSKy Tech',
    duration: 'Jun 2023 – Oct 2023',
    points: [
      'Completed a focused online training in backend development with Python and the Django framework.',
      'Built responsive websites with HTML, CSS and Bootstrap, and dynamic web apps using Django models, views, templates and URL routing.',
      'Practised authentication, form handling and full CRUD functionality, strengthening MVC and ORM fundamentals.',
    ],
  },
]

export const education = [
  {
    institution: 'University of Central Punjab',
    degree: 'BS in Software Engineering',
    duration: 'Oct 2020 – Jul 2024',
    detail: 'GPA: 3.53 / 4.0',
    coursework: [
      'Machine Learning',
      'Natural Language Processing',
      'Image Processing',
      'Software Engineering',
      'Web Development',
    ],
  },
]

export const certifications = [
  'Web Design for Everybody',
  'Data Science — IBM (Coursera)',
  'Basic Microsoft Office Skills',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
