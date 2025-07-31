import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Sai",
  lastName: "Pooja",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Java Full Stack Developer",
  avatar: "/images/avatar.jpg" ,width:"100%",height:"100%",
  email: "saipoojareddypalle@gmail.com",
  location: "United States",
  languages: ["English", "Telugu","Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saipooja-git",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/saipoojareddypalle/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Hi, I’m Sai Pooja — a recent graduate from Northwest Missouri State University with real-world, hands-on experience building full-stack applications.  
<br />I'm actively looking for full-time roles where I can contribute and grow as a developer. When I'm not coding for work, I’m creating my own projects for fun!

    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      I'm Sai Pooja, a full-stack developer with a passion for building robust, 
      user-friendly applications that bridge design and functionality. Based in the U.S.,
       I transform real-world challenges into clean, scalable software solutions. 
       My work spans modern web technologies,responsive UI design, 
       and full-cycle application development.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Northwest Missouri State University",
        timeframe: "2024 - 2025",
        role: "Graduate Assistant & Data Analyst",
        achievements: [  
<>Built and deployed full-stack web applications using Spring Boot, React/Angular, Node.js, and MongoDB — delivering performant, scalable solutions.</>,
  <>Designed RESTful APIs with Spring Boot and Node.js, while implementing responsive, accessible UIs with React/Angular for seamless user experiences.</>,
  <>Integrated secure authentication, state management, and client-side routing, enhancing application reliability and user engagement.</>,
<>Developed interactive dashboards in Power BI and Tableau to visualize trends across large datasets, driving insights for academic and operational strategies.</>,
  <> Automated ETL workflows using SQL and Python, reducing data processing time and improving accuracy for university-wide reports.</>,
<>Developed secure, scalable backend services using Java 8, Spring, and JPA, reducing invoice processing latency by 35%.</>,
<>Refactored legacy JSP pages to modular Angular components, improving maintainability and scalability.</>,
<>Implemented AWS-based solutions with ECS, S3, EC2, Aurora, API Gateway, and Route 53, improving service uptime and scalability by 40%.</>,
<>Containerized microservices using Docker and deployed to Kubernetes clusters, enhancing system reliability and reducing downtime.</>,

        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "HighRadius Pvt Ltd",
        timeframe: "2021 - 2022",
        role: "Software Engineer",
       achievements: [
  <>Built scalable full-stack modules using Java (Spring Boot) and React, improving transaction processing speed by 30%.</>,
  <>Led the development of RESTful APIs and integrated third-party services, streamlining client onboarding and reducing integration time by 25%.</>,
  <>Collaborated with cross-functional teams to deploy enterprise features that enhanced system reliability and user satisfaction.</>,
],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Northwest Missouri State University",
        description: <>Studied Applied Computer Science.</>,
      },
      {
        name: "Build the Future",
description: <>Pursued online learning and personal projects to deepen expertise in modern web development.</>,
      },
    ],
  },
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Backend Development",
      description: (
        <>
          Experienced with Spring Boot, Node.js, Express, Flask, Django, Servlets, JPA, and API design for scalable web services.
        </>
      ),
      // images: [
      //   {
      //     src: "/images/projects/project-01/cover-01.jpg",
      //     alt: "Backend project",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      title: "Frontend Development",
      description: (
        <>
          Skilled in building dynamic UIs using React, Angular, HTML, CSS, Bootstrap, and TypeScript.
        </>
      ),
      // images: [
      //   {
      //     src: "/images/projects/project-01/cover-02.jpg",
      //     alt: "Frontend project",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      title: "Programming Languages",
      description: (
        <>
          Proficient in Python, Java, JavaScript, TypeScript, C, C++, Go, Kotlin, and C#.
        </>
      ),
      // images: [
      //   {
      //     src: "/images/projects/project-01/cover-03.jpg",
      //     alt: "Code base",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      title: "Databases",
      description: (
        <>
          Hands-on experience with MySQL, PostgreSQL, MongoDB, AWS DynamoDB.
        </>
      ),
      // images: [
      //   {
      //     src: "/images/projects/project-01/cover-04.jpg",
      //     alt: "Database diagram",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      title: "Data & Analytics Tools",
      description: (
        <>
          Skilled with Informatica, Tableau, and RStudio for data processing and visualization.
        </>
      ),
      // images: [
      //   {
      //     src: "/images/projects/project-01/cover-05.jpg",
      //     alt: "Analytics dashboard",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      title: "Cloud Platforms",
      description: (
        <>
          Deployed and managed applications on AWS and GCP using services like EC2, Lambda, S3, and GCP Cloud Functions.
        </>
      ),
      // images: [
      //   {
      //     src: "/images/projects/project-01/cover-06.jpg",
      //     alt: "Cloud infrastructure",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
  ],
},

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const projects = {
  path: "/projects",
  label: "Projects",
  title: `${person.name}'s Creative Explorations`,
  description: `Dive into a curated showcase of innovative projects and personal experiments by ${person.name}, reflecting curiosity, creativity, and real-world problem solving.`,
  items: [
    {
      slug: "todo-app",
      title: "Todo Web Application",
      tag: "Angular & Firebase",
      image: "/images/projects/todo-app.png",
      thought: "Wanted to build a productivity tool that simplifies daily task management using Angular and Firebase.",
    },
    {
      slug: "schoolbus-tracker",
      title: "School Bus Tracker App",
      tag: "Spring Boot · React · Node.js",
      image: "/images/projects/schoolbus-tracker.png",
      thought: "Inspired by parents’ concern for student safety—this tracks school buses in real time.",
    },
    {
      slug: "chatgpt-bot",
      title: "ChatGPT Chatbot",
      tag: "JavaScript · HTML · CSS",
      image: "/images/projects/chatgpt-bot.png",
      thought: "Created an interactive web-based ChatGPT experience for fun and educational use cases.",
    },
    {
      slug: "drug-counselling-system",
      title: "Drug Counselling & Guidance System",
      tag: "Full Stack Java · HTML · CSS",
      image: "/images/projects/drug-counselling.png",
      thought: "Built to assist individuals struggling with substance abuse by offering guidance and support.",
    },
    {
      slug: "calmsphere",
      title: "Calmsphere Meditation App",
      tag: "Android",
      image: "/images/projects/calmsphere.jpg",
      thought: "Personal project to promote mental wellness through guided meditations and calming visuals.",
    },
  ],
};



 const contact = {
  label: "Contact",
  heading: "Get in Touch",
  email: "saipoojareddypalle@gmail.com",
  linkedin: "https://linkedin.com/in/saipoojareddypalle/",
  resumeLink: "/resume.pdf",
  description: "I'm always open to opportunities or collaborations. Let's connect!"
};


export { person, social, newsletter, home, about, work, projects, contact };
