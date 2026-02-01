import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  material,
  postgres,
  nodejs,
  mongodb,
  git,
  Intership,
  datatemplate,
  Auth,
  dashboard,
  ecommerce,
  chatApp,
  repair,
  threejs,
  freelancer,
  roombooking,
  MetazDigital,
  CodeReview
  ,mocktail,
  biccas
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Material UI",
    icon: material,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Website Design",
    company_name: "Intership Studio",
    icon: Intership,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Aug 2021",
    points: [
      "Developing and maintaining web applications using Html, CSS, Javascript, JQuery and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Open source Developer",
    company_name: "Data Template",
    icon: datatemplate,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jun 2023",
    points: [
      "Developing and maintaining web applications using React.js, NodeJs, and other related technologies.",
      "Develop Frontend as per wireframes to create high-quality products.",
      "Develop Restful API for the required services.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in  estimating the time required for developing a project.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Aug 2024",
    points: [
      "As a freelancer, I deliver high-quality work across various industries, utilizing my expertise in creative problem-solving to achieve exceptional results for my clients.",
      "I actively contribute to open-source projects, leveraging my expertise to improve code quality and collaborate with the community to create impactful and accessible software solutions.",
      "As a freelancer, I excel in upgrading Node.js backend versions, ensuring smooth transitions and enhanced performance to keep web applications up-to-date and optimized.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "MetaZ Digital",
    icon: MetazDigital,
    iconBg: "#1f1f1f",
    date: "Sep 2024 - Present",
    points: [
      "Developed and maintained Node.js server-side applications with a focus on high performance and scalability.",
      "Added new modules and enhanced existing functionality based on evolving business needs.",
      "Used JSON for data exchange between frontend and backend, improving communication efficiency.",
      "Employed Git for version control and team collaboration within an Agile development framework.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "Staic Website design for e-commerce which uses core technology like Html, CSS, JavaScript, JQuery and other technology.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    site_link: "https://project.abhinayy48.repl.co/",
    source_code_link: "https://github.com/abhinayy58/E-commerce",
  },
  {
    name: "Authentication",
    description:
      "Cookies-based authentication and authorization for http-only on top of React, Redux, NodeJs and other Technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "Cookies",
        color: "yellow-text-gradient",
      },
    ],
    image: Auth,
    source_code_link: "https://github.com/abhinayy58/Auth",
  },

  {
    name: "Repair Shop",
    description:
      "Repairing shop app where technology used are React, NodeJs Mongo and other Technology where this develop for multi-role based authentication and authorization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "yellow-text-gradient",
      },
    ],
    image: repair,
    source_code_link: "https://github.com/abhinayy58",
  },
  {
    name: "Dashboard",
    description:
      "Admin dashboard for front-end using technologies like Reactjs, typescript, and ChartJs.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",mocktail
      },
      {
        name: "chartJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "yellow-text-gradient",
      },
    ],
    image: dashboard,
    site_link: "https://dashboardassign.netlify.app/",
    source_code_link: "https://github.com/abhinayy58/assignment",
  },
  {
    name: "Room Booking",
    description:
      "Room booking app(Basic) used technogies are React, Nodejs, Javascript, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "yellow-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: roombooking,
    source_code_link:
      "https://github.com/abhinayy58/room-booking/tree/main/backend",
  },
  {
    name: "Chat App",
    description: "Chat app for real time communication",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "yellow-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: chatApp,
    site_link: "https://instanttalks.onrender.com/signin",
    source_code_link: "https://github.com/abhinayy58/chat-app",
  },
  {
    name: "Code reviewer",
    description:
      "A React app that lets users input JavaScript code and get AI-generated code reviews with syntax highlighting.",
    tags: [
      {
        name: "react",
        color: "yellow-text-gradient",
      },
      {
        name: "Gen-AI",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
    ],
    image: CodeReview,
    source_code_link: "https://github.com/abhinayy58/Code-Reviewer",
  },
  {
    name: "Mocktail React App",
    description:
      "A React app that allows users to explore and discover a wide variety of mocktail recipes, complete with ingredients, preparation instructions, and images.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
      {
        name: "glassmorphism",
        color: "yellow-text-gradient",
      },
      {
        name: "parrallax",
        color: "blue-text-gradient",
      },
    ],
    image: mocktail,
    site_link: "https://mocktail-mojo.netlify.app/",
    source_code_link: "https://github.com/abhinayy58/mocktail-mojo",
  },
  {
    name: "SASS Buisness Website",
    description:
      "A SASS business prototype website built with React and Tailwind CSS. hvaing modern design and responsive layout.And also have enhanced user experience.",
    tags: [
     {
        name: "react",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "react-icons",
        color: "orange-text-gradient",
      },
    ],
    image: biccas,
    site_link: "https://biccass-app.netlify.app/",
    source_code_link: "https://github.com/abhinayy58/biccas",
  },
];

export { services, technologies, experiences, testimonials, projects };
