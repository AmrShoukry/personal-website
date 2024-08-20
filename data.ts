import { github } from './public/assets/icons/github';
import { gmail } from './public/assets/icons/gmail';
import { linkedin } from './public/assets/icons/linkedin';

export const sectionNames = {
  education: 'Education 🎓',
  projects: 'Projects 💼',
  activities: 'Activities 🤝',
  certificates: 'Certificates 🎉',
  skills: 'Skills 🪜',
};

export const aboutData = {
  image: 'assets/images/about/amrshoukry.jpg',
  landingName: '👋 Amr Shoukry',
  name: 'Amr Shoukry',
  landingText:
    'I am Amr Shoukry, a Computer Science student at Mansoura University, Egypt, and a graduate of the ALX Software Engineering program. I specialize in front-end technologies and am skilled in C, Python, JavaScript, and TypeScript. My expertise includes Git, command-line interfaces, OOP, data structures, algorithms, React, and GraphQL. With a background in leadership and teamwork through volunteering, I am committed to continuous learning and aspire to become a job-ready front-end developer, building scalable and user-friendly web applications. I am also excited about the prospect of becoming an AI engineer in the future',
  text: 'I am Amr Shoukry, a Computer Science student at Mansoura University, Egypt, with a strong foundation in both theoretical and practical aspects of software engineering. A graduate of the ALX Software Engineering program, I have honed my skills in front-end technologies and gained extensive experience in programming languages such as C, Python, JavaScript, and TypeScript. My technical expertise includes proficiency in Git and GitHub, command-line interfaces, and a solid understanding of object-oriented programming (OOP), data structures, algorithms, and React. I have also explored GraphQL, expanding my knowledge of modern web technologies. My experience extends beyond technical skills to include leadership and teamwork, demonstrated through various volunteering roles. I am passionate about continuous learning and dedicated to applying my skills in innovative environments. My goal is to become a front-end developer capable of building scalable and user-friendly web applications, contributing effectively to dynamic teams and projects.',
  title: 'Software Engineer',
  links: [
    {
      icon: linkedin,
      link: 'https://www.linkedin.com/in/amrshoukry/',
    },
    {
      icon: github,
      link: 'https://github.com/amrshoukry',
    },
    {
      icon: gmail,
      link: 'mailto:shoukryworkamr1@gmail.com',
    },
  ],
};

export const educationData = {
  title: sectionNames.education,
  description:
    'In this page, you will find detailed information about my academic background and the subjects that have shaped my career. Here, I highlight the institutions I have attended and the key subjects I have studied, which have contributed significantly to my growth and expertise as a professional. This overview reflects the educational foundation upon which I build my skills and knowledge.',
  image: 'assets/images/education/education.jpg',
};
export const educationArray = [
  {
    title: 'FCIS - Mansoura University',
    text: 'I am currently in my final year as a Computer Science student at Mansoura University, Egypt, with an expected graduation in June 2025. My academic performance has been consistently excellent, reflecting a strong commitment to mastering software engineering and computer science principles.',
    image: 'assets/images/education/college.jpg',
  },
];
export const syllabusArray = [
  {
    title: 'Year1',
    grade: 'Excellent',
    bullets: [
      'Physics',
      'Programming with C#',
      'English language',
      'Discrete Mathematics',
      'Introduction to Computer Science',
      'Introduction to Information Technology',
      'Introduction to Information Systems',
      'Object-Oriented Programming with C#',
      'Logic Circuits',
      'Statistics and Probability 1',
      'Calculus',
    ],
  },
  {
    title: 'Year2',
    grade: 'Excellent',
    bullets: [
      'Data structure',
      'Computer Architecture and Organization',
      'Web development',
      'Linear Algebra',
      'Operating System 1',
      'Database',
      'Statistics and Probability 2',
      'Data Communication',
      'Electronics',
      'Graphics',
      'Ethics',
    ],
  },
  {
    title: 'Year3',
    grade: 'Excellent',
    bullets: [
      'Algorithms',
      'Networks',
      'Logic Programming',
      'Assembly',
      'Software Engineering 1',
      'Software Engineering 2',
      'Programming Language Design',
      'Artificial Intelligence 1',
      'Operating System 2',
      'Digital Signal Processing',
    ],
  },
  {
    title: 'Year4',
    grade: 'N/A',
    bullets: [
      'Artificial Intelligence 2',
      'Robotics',
      'Natural Language Processing',
      'Selected Topics',
      'Distributed Systems',
      'Neural Network',
      'ANLP',
      'Expert Systems',
      'Compiler',
      'Embedded systems',
    ],
  },
];
export const educationProjectsArray = [
  {
    title: 'ShoukryDo',
    image: 'assets/images/education/assembly.jpg',
    text: 'This application contains a Tasks Management Application implemented using an 8086 emulator in Assembly language. The application is designed to enhance your productivity and time management, featuring various modules such as Focus Mode, Todo Management, Tasks Mode, Upgradeable Plans, and more.',
    link: 'https://github.com/AmrShoukry/ShoukryDo_Assembly',
  },
  {
    title: 'Artevo',
    image: 'assets/images/education/artevo.jpg',
    text: 'ARTEVO is an online platform that combines elements of e-commerce and social media, designed for artists to connect and interact with each other. The application is still in development, and I am using React for its implementation.',
    link: 'https://github.com/Little-grow/ARTEVO_Project',
  },
  {
    title: 'N-Queens',
    image: 'assets/images/education/nqueens.jpg',
    text: 'This project involved implementing the n-queens problem with a graphical user interface. I used HTML, CSS, and JavaScript to develop the interface and functionality.',
    link: 'https://github.com/AmrShoukry/N-Queens',
  },
  {
    title: 'Solving Linear System',
    image: 'assets/images/education/linear.jpg',
    text: 'This project aimed to solve linear systems using Gauss and Gauss-Jordan methods. I used HTML, CSS, and JavaScript to create an interactive interface for the application.',
    link: 'https://github.com/AmrShoukry/SolvingLinearSystem',
  },
];

export const projectsData = {
  title: sectionNames.projects,
  description:
    'In this page, you will find detailed information about the projects I have undertaken, showcasing my practical experience and hands-on skills. Here, I highlight the key projects that have contributed to my growth as a professional, demonstrating my ability to apply theoretical knowledge to real-world challenges. Each project reflects my commitment to innovation, problem-solving, and continuous learning.',
  image: 'assets/images/projects/projects.jpg',
};

export const projectsSkillsArray = [
  {
    title: 'Programming Languages',
    bullets: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Technical Skills',
    bullets: [
      'Git and GitHub',
      'Command-line Interface',
      'React',
      'GraphQL',
      'Angular',
      'REST APIs',
      'UI Design',
    ],
  },
  {
    title: 'Soft Skills',
    bullets: [
      'Communication',
      'Teamwork',
      'Adaptability',
      'Creativity',
      'Collaboration',
      'Continuous Learning',
    ],
  },
];

export const projectsArray = [
  {
    title: 'Personal Website',
    image: 'assets/images/projects/personalwebsite.jpg',
    text: 'I designed and developed my personal website using Figma for the design process. The website was built with Angular as the application framework and styled with Sass',
    link: 'https://github.com/AmrShoukry/personal-website',
  },
  {
    title: 'Whisper Real Time Chat Application',
    image: 'assets/images/projects/whisper.jpg',
    text: 'I contributed to the front-end development of Whisper, utilizing technologies such as React and TypeScript. I leveraged React libraries like Zustand for state management, Styled Components for styling, Material UI for design, React Hook Form for form handling, and React Router for navigation. Additionally, I integrated Apollo for GraphQL and Axios for fetching REST endpoints',
    link: 'https://github.com/WalaEddine01/Whisper',
  },
  {
    title: 'Simple Media',
    image: 'assets/images/projects/simplemedia.jpg',
    text: 'I created a RESTful API for a basic social media platform, incorporating CRUD operations, user authentication, and following MVC architecture. The API, built on Node.js with Express and MongoDB, features functionalities like likes, comments, and user interactions while ensuring data security.',
    link: 'https://github.com/AmrShoukry/Simple_Media',
  },
];

export const certificatesData = {
  title: sectionNames.certificates,
  description:
    'In this page, you will find information about the certifications I have earned, highlighting my commitment to continuous learning and professional development. Here, I showcase the key certificates that validate my skills and knowledge in various areas. These certifications demonstrate my dedication to staying current with industry standards and my proactive approach to expanding my expertise.',
  image: 'assets/images/certificates/certificates.jpg',
};

export const certificatesSkillsArray = [
  {
    title: 'Programming Languages',
    bullets: ['C', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Technical Skills',
    bullets: [
      'Git and GitHub',
      'Command-line Interface',
      'OOP',
      'Data Structures',
      'Algorithms',
      'React',
      'REST APIs',
      'Agile',
      'RDBMS',
    ],
  },
];

export const certificatesArray = [
  {
    title: 'ALX Software Engineering 12 Month Program',
    image: 'assets/images/certificates/alx.jpg',
    text: 'Throughout the program, I engaged in a diverse range of subjects, including C programming, Unix Programming, Data Structures & Algorithms, the basics of Reverse Engineering & Security, Python, Linux/command line, Infrastructure Design & Management, JavaScript, TypeScript, React, HTML, CSS, SASS, Git, and GitHub.',
    link: 'https://intranet.alxswe.com/certificates/JfpRELHBG6',
  },
  // {
  //   title: 'ITI .NET Full Stack Developer',
  //   image: 'assets/images/certificates/agile.jpg',
  //   text: 'I have developed a simple software application using Python and Tkinter. This project demonstrates my understanding of object-oriented programming and the ability to create user-friendly and functional applications.',
  //   link: 'https://www.google.com/',
  // },
  {
    title: 'EF Standard English Test (EF SET)',
    image: 'assets/images/certificates/english.jpg',
    text: 'I completed the EF Standard English Test (EF SET), where I achieved a C2 Proficient rating in Reading, indicating my strong ability to understand complex texts and detailed information. For Listening, I obtained a C1 Advanced rating, reflecting my advanced comprehension skills and capability to follow detailed spoken English.',
    link: 'https://cert.efset.org/hNfwsE',
  },

  {
    title: 'Agile Frameworks Fundamentals',
    image: 'assets/images/certificates/agile.jpg',
    text: 'Absorbed knowledge of Agile methodologies, honed our agility and distinguished the disparities between embodying agility and implementing Agile practices',
    link: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/12135630-0c74-46e1-a6f8-05d0ea26a018.pdf',
  },
  {
    title: 'Assembly Project 3rd Placement',
    image: 'assets/images/certificates/assembly.jpg',
    text: 'I won 3rd place for an Assembly Project, which involved creating a Tasks Management Application using an 8086 emulator in Assembly language. This application is designed to enhance productivity and time management, featuring modules such as Focus Mode, Todo Management, Tasks Mode, and Upgradeable Plans, among others.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7164310875888119808/',
  },
  {
    title: 'ITI PHP Winter Training',
    image: 'assets/images/certificates/itiphp.jpg',
    text: 'I participated in the ITI PHP Winter Training, where I acquired a solid understanding of the fundamentals of Relational Database Management Systems (RDBMS), PHP, and Laravel. This training provided me with essential skills in database management, server-side scripting, and modern PHP frameworks.',
  },
];

export const activitiesData = {
  title: sectionNames.activities,
  description:
    'In this page, you will find detailed information about the extracurricular activities and involvements that have enriched my personal and professional life. Here, I highlight the key activities and organizations I have participated in, which have helped me develop a diverse skill set and foster a well-rounded perspective. These experiences demonstrate my commitment to personal growth, community engagement, and continuous improvement.',
  image: 'assets/images/activities/activities.jpg',
};

export const activitiesSkillsArray = [
  {
    title: 'Soft Skills',
    bullets: [
      'Communication',
      'Teamwork',
      'Adaptability',
      'Leadership',
      'Collaboration',
    ],
  },
];

export const activitiesArray = [
  {
    title: 'Life Makers Charity',
    image: 'assets/images/activities/lifemakers.jpg',
    text: 'As the sub-leader of a 15-member team during the Life Makers Charity Winter Campaign, I played a crucial role in motivating the team to promote our cause and increase donations. In the Ramadan Campaign, I managed the IT data entry for an 18-member team, overseeing the collection and accurate input of donations from a Facebook Messenger group into Excel spreadsheets.',
    link: 'https://www.facebook.com/LifeMaker.Mk',
  },
  {
    title: 'Mega Team',
    image: 'assets/images/activities/mega.jpg',
    text: 'As a Front-end Mentor for two groups within the MEGA Team, I supported their learning by providing study materials, assigning tasks, and organizing meetings to tackle challenges together. Additionally, I contributed to the team by writing content.',
    link: 'https://www.linkedin.com/company/mega-team-mu/',
  },
  {
    title: 'Step By Step',
    image: 'assets/images/activities/stepbystep.jpg',
    text: 'I created questions and summaries for my colleagues to support our collective success in exams, ensuring that everyone had the resources needed to excel.',
  },
];

export const skillsArray = [
  {
    title: 'Programming Languages',
    bullets: ['C', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Technical Skills',
    bullets: [
      'Git and GitHub',
      'Command-line Interface',
      'OOP',
      'Data Structures',
      'Algorithms',
      'React',
      'Angular',
      'GraphQL',
      'REST APIs',
      'UI Design',
    ],
  },
  {
    title: 'SoftSkills',
    bullets: [
      'Communication',
      'Leadership',
      'Teamwork',
      'Adaptability',
      'Creativity',
      'Collaboration',
      'Continuous Learning',
    ],
  },
  {
    title: 'Languages',
    bullets: ['Arabic (Native)', 'English (Working Proficiency)'],
  },
];
