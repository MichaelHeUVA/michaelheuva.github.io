export const NavbarList = [
  {
    name: "Experience",
    path: "#experience",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Resume",
    path: process.env.BASEPATH + "/Michael-He-Resume.pdf",
  },
];

export const ExperienceList = [
  {
    companyName: "Runway",
    companySVG: "./runway.svg",
    companyLink: "https://www.joinrunway.io/",
    role: "Software Engineer Intern",
    date: "January 2023 - Present",
    description:
      "Produced production level code to manage over 1000 college students and businesses. Interacted with other developers to manage and build a full stack website. Collaborated with project managers, designers, and developers to define project goals, requirements, and timelines. Built over 20 user interface components and pages using Next.js, React.js, and Tailwind CSS. Worked with developers to build Java Spring backend routes to organize over 200 business projects.",
  },
];

export const ProjectList = [
  {
    name: "Personal Portfolio",
    link: "https://github.com/MichaelHeUVA/michaelhe.github.io",
    skills: ["React.js", "Next.js", "Tailwind CSS", "GitHub", "Git"],
    date: "September 2023 - Present",
    description:
      "Designed and developed a personal portfolio website utilizing modern web technologies, including Next.js, Tailwind CSS, and TypeScript. Utilized Tailwind CSS for responsive and visually appealing UI/UX design, ensuring a seamless user experience across various devices. Deployed the web app to GitHub pages and resolved linking conflicts.",
  },
  {
    name: "CheapGPT",
    link: "https://github.com/MichaelHeUVA/CheapGPT",
    skills: ["JavaScript", "Discord API", "OpenAI API"],
    date: "June 2023 - Present",
    description:
      "Created a Node.js based Discord bot to allow users to interact with ChatGPT 4 in a server setting. Continuously maintain and update the Discord bot to ensure optimal performance and scalability. Generated a file directory system when the text exceeded the Discord character limit. Implemented commands for users to interact with the bot.",
  },
  {
    name: "Runway Website",
    link: "https://www.joinrunway.io/",
    skills: [
      "Next.js",
      "React.js",
      "Java Spring",
      "Tailwind CSS",
      "Amazon DynamoDB",
      "Git",
      "TypeScript",
    ],
    date: "January 2023 - Present",
    description:
      "Launched a full stack website modeled using Figma. Built a page for businesses to view student profiles. Developed a page listing business submitted projects created functionalities for students to apply/unapply to projects. Restructured pricing and home landing pages with Next.js. Interacted with the AWS DynamoDB and AWS S3 to retrieve and render website components. Utilized Tailwind CSS and flexbox to optimize desktop and mobile views. Generated backend routes using Java Spring Boot hosted on an Amazon EC2 instance. Working to rebuild the entire site from React.js to Next.js and Tailwind CSS.",
  },
  {
    name: "Chess Elo Calculator",
    link: "https://sites.google.com/view/computer-systems-site/home",
    skills: ["JavaScript", "HTML", "CSS"],
    date: "March 2022 - May 2022",
    description:
      "Used JavaScript, HTML, and CSS to code a website that calculates the change in chess Elo depending on who won. Created a toggleable dark mode feature for users. Implemented FIDE’s performance rating Elo algorithm.",
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
