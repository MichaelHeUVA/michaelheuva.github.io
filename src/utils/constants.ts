export const ExperienceList = [
  {
    svg: "./icons/uvaec.jpeg",

    link: "https://engineering.virginia.edu/offices-programs/center-engineering-career-development",
    title: "Technical Interviewing Workshop President",
    company: "UVA Center for Engineering Career Development",
    period: "Sep 2024 - Present",
    description:
      "Led a university workshop focused on preparing students for technical interviews, covering data structures, algorithms, and system design challenges.",
    achievements: [
      "Led a workshop 3 times a week for UVA students by walking through common data structures and algorithm leetcode problems.",
      "Facilitated whiteboarding sessions to collaboratively work through system design challenges and tradeoffs.",
      "Assisted over 20 students to get their dream internship (Meta, Amazon, Capital One, Roblox, Bloomberg, Zocdoc, Riot Games).",
    ],
    tags: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Leadership",
      "Mentorship",
    ],
  },
  {
    svg: "./icons/aws.svg",
    link: "https://aws.amazon.com/",
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    period: "May 2025 - July 2025",
    description:
      "Designed and implemented an Digital Asset Management system automating image categorization for the AWS Documentation website using AWS SageMaker, processing 50,000 images. Identified and reported a severity-2 security vulnerability in the documentation pipeline, collaborating with senior engineers to resolve it within 48 hours.",
    achievements: [
      "Reduced manual categorization effort by 80%, saving approximately 40 hours per week compared to human-only classification.",
      "Improved documentation consistency and customer experience by standardizing images across 329 AWS services using a prompt engineered AWS Bedrock model.",
    ],
    tags: [
      "AWS SageMaker",
      "AWS Bedrock",
      "Python",
      "Security",
      "Machine Learning",
    ],
  },
  {
    svg: "./icons/gbr.svg",
    link: "https://www.gobankingrates.com/",
    company: "GOBankingRates",
    title: "Software Engineer Intern",
    period: "May 2024 - Sep 2024",
    description:
      "Maintained a mission-critical internal codebase used by over 2000 banks, ensuring high performance and 99.97% uptime. Developed and deprecated API endpoints and managed cloud infrastructure to enhance content delivery efficiency.",
    achievements: [
      "Delivered 10+ new features and improvements by working with cross-functional teams.",
      "Reduced time to find an error by 75% by utilizing Datadog to monitor and report errors for kubernetes cron jobs.",
      "Developed and deprecated 3 API endpoints for image generation using Express.js, optimizing functionality.",
      "Employed Terraform for infrastructure as code to manage AWS CloudFront caching policies, enhancing content delivery efficiency.",
    ],
    tags: [
      "Express.js",
      "Node.js",
      "Datadog",
      "Terraform",
      "AWS CloudFront",
      "Kubernetes",
      "Agile",
    ],
  },
  {
    svg: "./icons/runway.svg",
    link: "https://www.joinrunway.io/",
    title: "Software Engineer Intern",
    company: "Runway",
    period: "Jan 2023 - Mar 2024",
    description:
      "Built a full-stack platform connecting early-stage startups with college students for freelance work, engaging over 2000 college students, contributing to the company's $5 million valuation and top 25 recognition.",
    achievements: [
      "Managed and built over 20 user interface components and pages using Next.js for the job board, student and business profiles.",
      "Generated 5+ Spring Boot REST API routes hosted on an EC2 instance to organize over 200 business projects.",
      "Accomplished a 30% improvement in website loading speed and a 25% increase in user engagement by leveraging DynamoDB and S3 for data retrieval and storage, and utilizing Tailwind to create website components.",
    ],
    tags: [
      "Next.js",
      "Spring Boot",
      "Tailwind CSS",
      "DynamoDB",
      "S3",
      "EC2",
      "React.js",
    ],
  },
  {
    svg: "./icons/uva.svg",
    link: "https://engineering.virginia.edu/",
    title: "Bachelor of Science in Computer Science, Minor in Data Science",
    company: "University of Virginia",
    period: "Aug 2022 - May 2026",
    description: "Focus on Software Engineering and Artificial Intelligence",
    achievements: [
      "Relevant Courses: Data Structures and Algorithms, Computer Systems and Organization, Discrete Math and Theory, Linear Algebra, Software Engineering, Artificial Intelligence, Computer Vision, Machine Learning, Reinforcement Learning, Natural Language Processing",
    ],
    tags: [
      "Next.js",
      "Spring Boot",
      "Tailwind CSS",
      "DynamoDB",
      "S3",
      "EC2",
      "React.js",
    ],
  },
];

export const ProjectList = [
  {
    title: "Machine Learning Food Recognizer",
    description:
      "A group project focused on building an effective food recognition model using a large Kaggle dataset, demonstrating proficiency in data preprocessing and model evaluation.",
    tags: [
      "ipynb",
      "Python",
      "scikit-learn",
      "keras",
      "tensorflow",
      "Machine Learning",
    ],
    github: "https://github.com/MichaelHeUVA/ML4VA",
    achievements: [
      "Leveraged the capabilities of scikit-learn to build an effective food recognizer model using a Kaggle dataset in a Jupyter Notebook.",
      "Preprocessed 101,000 food images distributed across 101 distinct classes, ensuring quality input for training and evaluation.",
      "Achieved a noteworthy test accuracy of 71.70% with a test loss of 1.1317, while also securing a top-5 accuracy of 91.31%.",
    ],
  },
  {
    title: "HooGrades",
    description:
      "A full-stack SaaS website developed during a 24-hour hackathon to grade student homework using the OpenAI Vision API, featuring a robust AWS backend and fluid frontend design.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS S3",
      "AWS EC2",
      "OpenAI API",
      "Framer Motion",
    ],
    github: "https://github.com/MichaelHeUVA/HooGrades",
    achievements: [
      "Participated in a 24-hour hackathon competing against a field of 700 contestants.",
      "Developed a full-stack web application using with AWS Lambda serving a REST API with Next.js as the frontend.",
      "Spearheaded the UI/UX design using Figma and utilized OpenAI's vision API to grade students' work.",
      "Integrated Framer Motion to incorporate fluid animations, improving the website's interactivity and visual appeal.",
      "Implemented a robust backend architecture on AWS, using services such as Lambda, DynamoDB, S3, and EC2, ensuring scalability, reliability, and high performance of the platform.",
    ],
  },
  {
    title: "CheapGPT",
    description:
      "A Node.js-based Discord bot enabling users to interact with ChatGPT 4 (with vision) in a server setting, continuously maintained for optimal performance and scalability.",
    tags: ["Node.js", "Discord API", "OpenAI API", "SQLite3", "TypeScript"],
    github: "https://github.com/MichaelHeUVA/CheapGPT",
    achievements: [
      "Launched a Node.js based Discord bot to allow users to interact with ChatGPT 4 with vision in a server setting.",
      "Continuously maintained and updated the Discord bot to ensure optimal performance and scalability.",
      "Generated a file directory system when the text exceeded the Discord character limit.",
      "Implemented commands for users and allowed users to create multiple conversations. Used SQLite3 to store the API usage for each unique user.",
    ],
  },
  {
    title: "HoosReport",
    description:
      "A whistleblower application created using the Python Django framework, featuring a DevOps role to ensure system functionality, continuous integration, and cloud-based file storage.",
    tags: [
      "Python Django",
      "AWS S3",
      "PostgreSQL",
      "Heroku",
      "Github Actions",
      "Agile Methodology",
    ],
    github: "https://github.com/uva-cs3240-s24/project-b-01",
    // demo: "https://project-b-01-d00b72518ac8.herokuapp.com/",
    achievements: [
      "Created a whistleblower app with the Python Django framework and deployed it using Heroku.",
      "Ensured the functionality of systems as the DevOps role for the team.",
      "Utilized the Agile Methodology to complete sprints over the course of the semester.",
      "Employed Amazon S3 to store files and PostgreSQL to store the users information.",
      "Set up continuous integration using Github Actions which automated tests every time code was committed.",
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal website designed and developed using modern web technologies to showcase projects and skills, featuring responsive UI/UX design.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "GitHub Pages"],
    github: "https://github.com/MichaelHeUVA/michaelhe.github.io",
    demo: "https://michaelheuva.github.io/",
    achievements: [
      "Designed and developed a personal portfolio website utilizing modern web technologies, including Next.js, Tailwind CSS, and TypeScript.",
      "Utilized Tailwind CSS for responsive and visually appealing UI/UX design, ensuring a seamless user experience across various devices.",
      "Deployed the web app to GitHub pages and resolved linking conflicts.",
    ],
  },
  {
    title: "Chess Elo Calculator",
    description:
      "A website coded with vanilla JavaScript, HTML, and CSS that calculates the change in chess Elo rating based on game results and FIDE's performance rating algorithm.",
    tags: ["JavaScript", "HTML", "CSS", "FIDE Algorithm"],
    github: null,
    demo: "https://sites.google.com/view/computer-systems-site/home",
    achievements: [
      "Used JavaScript, HTML, and CSS to code a website that calculates the change in chess Elo depending on who won.",
      "Created a toggleable dark mode feature for users.",
      "Implemented FIDE's performance rating Elo algorithm.",
    ],
  },
];
