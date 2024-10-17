export const NavbarList = [
  {
    name: "Experience",
    path: "#experience",
  },
  {
    name: "Leadership",
    path: "#leadership",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Resume",
    path: "/Michael-He-Resume.pdf",
  },
];

export const ExperienceList = [
  {
    companyName: "GOBankingRates",
    companySVG: "./gbr.svg",
    companyLink: "https://www.gobankingrates.com/",
    role: "Software Engineer Intern",
    date: "May 2024 - September 2024",
    description: [
      "Ensured high availability and performance with a 99.97% uptime by maintaining a mission-critical internal codebase used by over 2000 banks.",
      "Completed over 15 Jira tickets, contributing to the successful development and deployment of software features and improvements.",
      "Delivered 10+ new features and improvements by working with cross-functional teams.",
      "Reduced time to find a error by 75% by utilizing Datadog to monitor and report errors for kubernetes cron jobs.",
      "Developed and deprecated 3 API endpoints for image generation using Express.js, optimizing functionality.",
      "Engaged in daily stand ups and regular one-on-one meetings with the manager following an agile methodology.",
      "Leveraged Gemfury and Docker for local project execution and successful deployment to production environments.",
      "Configured company codebases using Windows Subsystem for Linux (WSL) to enhance development workflows.",
      "Employed Terraform for infrastructure as code to manage AWS CloudFront caching policies, enhancing content delivery efficiency.",
      "Updated ReadMes and documentation in confluence to support installation on ARM Macs, ensuring comprehensive guidelines.",
    ],
  },
  {
    companyName: "Runway",
    companySVG: "./runway.svg",
    companyLink: "https://www.joinrunway.io/",
    role: "Software Engineer Intern",
    date: "January 2023 - March 2024",
    description: [
      "Contributed to Runway’s place in the top 25 startups to watch in the ’Silicon Valley of the South’ and a $5 million evaluation.",
      "Produced production level code to manage over 2000 college students and businesses.",
      "Interacted with other developers to manage and build over 20 user interface components and pages using Next.js.",
      "Partnered with developers to build 5+ Spring Boot RESTful API routes hosted on an EC2 instance to organize over 200 business projects.",
      "Accomplished a 30% improvement in website loading speed and a 25% increase in user engagement with desktop and mobile devices by leveraging DynamoDB and S3 for data retrieval and storage, and utilizing Tailwind to create responsive layouts when developing website components.",
      "Collaborated with project managers, UI/UX designers, and 3 developers to define project goals, requirements, and timelines.",
    ],
  },
];

export const ProjectList = [
  {
    name: "Personal Portfolio",
    link: "https://github.com/MichaelHeUVA/michaelhe.github.io",
    skills: ["React.js", "Next.js", "Tailwind CSS", "GitHub", "Github Pages"],
    date: "September 2023 - Present",
    description: [
      "Designed and developed a personal portfolio website utilizing modern web technologies, including Next.js, Tailwind CSS, and TypeScript.",
      "Utilized Tailwind CSS for responsive and visually appealing UI/UX design, ensuring a seamless user experience across various devices.",
      "Deployed the web app to GitHub pages and resolved linking conflicts.",
    ],
  },
  {
    name: "CheapGPT",
    link: "https://github.com/MichaelHeUVA/CheapGPT",
    skills: ["Node.js", "Discord API", "OpenAI API", "Sqlite3"],
    date: "June 2023 - Present",
    description: [
      "Launched a Node.js based Discord bot to allow users to interact with ChatGPT 4 with vision in a server setting.",
      "Continuously maintain and update the Discord bot to ensure optimal performance and scalability.",
      "Generated a file directory system when the text exceeded the Discord character limit.",
      "Implemented commands for users and allowed users to create multiple conversations. Used SQLite3 to store the API usage for each unique user",
    ],
  },
  {
    name: "HooGrades",
    link: "https://github.com/MichaelHeUVA/HooGrades",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS S3",
      "AWS EC2",
      "Github",
    ],
    date: "March 2024",
    description: [
      "Participated in a 24 hour hackathon competing against a field of 700 contestants.",
      " Developed a full-stack web application using with AWS Lambda serving a REST API with Next.js as the frontend.",
      "Spearheaded the UI/UX design using Figma for HooGradess. Utilized OpenAi's vision API to grade students' work.",
      "Integrated Framer Motion to incorporate fluid animations, improving the website's interactivity and visual appeal.",
      "Implemented a robust backend architecture on AWS, using services such as Lambda, DynamoDB, S3, and EC2, ensuring scalability, reliability, and high performance of the HooGrades platform.",
      "Facilitated team collaboration and effective version control using GitHub, leading to streamlined development processes, efficient resolution of merge conflicts, and maintenance of high-quality code standards",
    ],
  },
  {
    name: "HoosReport",
    link: "https://project-b-01-d00b72518ac8.herokuapp.com/",
    skills: [
      "Python Django",
      "AWS S3",
      "Postgresql",
      "Heroku",
      "Github Actions",
    ],
    date: "January 2024 - May 2024",
    description: [
      "Created a whistleblower app with the python Django framework and deployed it using Heroku.",
      "Ensured the functionality of systems as the DevOps role for the team.",
      "Utilized the Agile Methodology to complete sprints over the course of the semester.",
      "Employed Amazon S3 to store files and Postgresql to store the users information.",
      "Set up continuous integration using Github Actions which automated tests every time code was committed.",
    ],
  },
  {
    name: "Chess Elo Calculator",
    link: "https://sites.google.com/view/computer-systems-site/home",
    skills: ["JavaScript", "HTML", "CSS"],
    date: "March 2022 - May 2022",
    description: [
      "Used JavaScript, HTML, and CSS to code a website that calculates the change in chess Elo depending on who won.",
      "Created a toggleable dark mode feature for users. Implemented FIDE’s performance rating Elo algorithm.",
    ],
  },
];

export const LeadershipList = [
  {
    organizationName: "University of Virginia",
    organizationSVG: "./uva.svg",
    organizationLink: "https://www.virginia.edu/",
    role: "Technical Interviewing Workshop Lead",
    date: "September 2024 - Present",
    description: [
      "Led a workshop 3 times a week for over 100 UVA students by walking through common data structures and algorithm problems.",
      "Facilitated whiteboarding sessions to collaboratively work through system design challenges and tradeoffs.",
      "Provided actionable tips for each stage of the interview process based on personal experience and industry best practices.",
    ],
  },
];

export const SocialsList = [
  {
    name: "GitHub",
    link: "https://github.com/MichaelHeUVA",
    svg: "/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michael--he/",
    svg: "/linkedin.svg",
  },
  {
    name: "Email",
    link: "mailto:michaelhe1224@outlook.com?subject=Hello",
    svg: "/outlook.svg",
  },
];
