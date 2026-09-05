// Edit everything in this file with your real details — nothing else needs to change.

import resumeFile from "../assets/resume.pdf";
import orderInventoryImage from "../assets/order_inventory_event_flow_vertical.png";

export const profile = {
  name: "Lindelwe",
  role: "Senior Software Engineer",
  // Cycled by the hero typewriter. Keep them short — they share one line.
  roles: [
    "Senior Software Engineer",
    "Artificial Intelligence",
    "Cloud & Microservices",
    "Mentor & Instructor",
    "Full Stack Engineer",
  ],
  available: true,
  location: "Cape Town, South Africa",
  tagline:
    "I build the systems that millions of banking customers rely on — and train the engineers who'll build what comes next.",
  intro:
    "Full Stack Software Engineer with 6+ years of experience building scalable, cloud-native applications in the banking and fintech domain. Proficient in .NET C#, Java, AWS, Azure, and modern frontend frameworks with a track record of delivering micro-services based solutions in regulated, agile environments. Skilled in DevOps practices, infrastructure-as-code, and mentoring junior developers. Passionate about clean architecture, continuous improvement, and shipping reliable software.",
  linkedin: "https://linkedin.com/in/lindelwe-myeza",
  email: "lindelwenpmyeza@gmail.com",
  resumeFile,
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Capitec Bank",
    period: "Present - 3 years 1 month",
    points: [
      "Design, develop and maintain full stack banking applications using .NET, Vue.js, and TypeScript, serving millions of customers through microservices and event-driven architectures deployed on Kubernetes.",
      "Built a task allocation service leveraging Terraform for infrastructure-as-code, Kafka for real-time message streaming, and Unleash for feature toggling, improving team workflow efficiency.",
      "Engineered serverless data processing pipelines using AWS Lambda (Python), Aurora RDS, and S3 buckets, reducing manual data handling and improving processing reliability.",
      "Managed an in-house platform for scaffolding repositories and generating deployment YAML files across multiple environments on GitHub, accelerating onboarding for new projects.",
      "Implemented observability and log tracing with Instana and OpenSearch, enabling faster incident diagnosis and reducing mean time to resolution.",
      "Mentored junior developers through code reviews and pull request guidance, and by clarifying requirements and providing technical direction on their day-to-day work.",
      "Collaborated using pair programming practices with Claude to improve code quality and development velocity."
    ],
  },
  {
    role: "Part-time Software Engineering Instructor",
    org: "TripleTen",
    period: "Past - 6 months",
    points: [
      "Tutored and mentored students across a 6 months bootcamp program called: Software Development.",
      "Provided code reviews, graded assignments, and delivered supplemental instruction, strengthening communication and technical leadership skills."
    ],
  },
  {
    role: "Part-time Learning Specialist",
    org: "2U",
    period: "Past - 2 years",
    points: [
      "Tutored and mentored students across three bootcamp programs: Software Development, Artificial Intelligence, and Data Visualization, supporting over 50 students through a 24-week curriculum.",
      "Provided code reviews, graded assignments, and delivered supplemental instruction, strengthening communication and technical leadership skills."
    ],
  },
  {
    role: "Software Developer",
    org: "Contour Technology",
    period: "Past - 11 months",
    points: [
      "Contributed across the full software development lifecycle—from requirements gathering and architecture design through to deployment—for enterprise backend services built in .NET C#.",
      "Developed desktop applications using Windows Presentation Foundation (WPF) and XAML, delivering robust and user-friendly interfaces for internal business tools."
    ],
  },
  {
    role: "Software Developer",
    org: "Astel Systems",
    period: "Past - 2 years 1 month",
    points: [
      "Integrated the Azure Cloud Portal with an IoT application built on .NET Core 6.0, successfully taking the solution from development through to production—a significant achievement as a junior developer.",
      "Gained hands-on experience across the full SDLC, including CI/CD pipelines, cloud resource provisioning, and production monitoring for cloud-based IoT services."
    ],
  },
  {
    role: "Junior Software Developer",
    org: "Wilson Bayly Holmes (WBHO)",
    period: "Past - 6 months",
    points: [
      "Supported system modernisation by contributing to migrations from RPG to Java, using Maven, Bitbucket, MySQL, HTML, and CSS.",
      "Focused on system enhancements and reporting functionalities, gaining foundational experience in enterprise software development."
    ],
  },
];

export const education = [
  {
    qualification: "Bachelor of Science in Computer Science & Information Technology",
    institution: "University of KwaZulu-Natal",
    period: "Year – 2019",
  },
];

export const certifications = [
  {
    name: " AWS Developer Associate",
    issuer: "Amazon Web Services",
    period: "Year – 2026",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    period: "Year – 2024",
  },
  {
    name: "Azure Fundamentals AZ-900",
    issuer: "Microsoft",
    period: "Year – 2021",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["C#", "Java", "Python", "TypeScript", "JavaScript", "C++"],
  },
  {
    group: "Frameworks",
    items: [".NET (MVC / Core)", "Vue.js", "React", "Node.js", "WPF / XAML"],
  },
  {
    group: "Cloud & Infrastructure",
    items: ["AWS (Lambda, Aurora RDS, S3)", "Azure", "Kubernetes", "Terraform", "Docker"],
  },
  {
    group: "Data & Messaging",
    items: ["SQL Server", "NoSQL", "Kafka", "OpenSearch"],
  },
  {
    group: "DevOps & Tools",
    items: ["GitHub Actions", "Instana", "Unleash", "GitHub Copilot", "Claude", "Bitbucket", "Maven"],
  },
  {
    group: "Architecture",
    items: ["Microservices", "Event-Driven Architecture", "REST APIs", "MERN Stack"],
  },
];

// Shown as animated counters under the resume intro.
export const stats = [
  { value: 6, suffix: "+", label: "Years shipping software" },
  { value: 50, suffix: "+", label: "Engineers & students mentored" },
  { value: 3, suffix: "", label: "Cloud certifications" },
  { value: 6, suffix: "", label: "Engineering teams" },
];

export const projects = [
  {
    title: "Order & Inventory Service",
    stack: "C# · ASP.NET Core · RabbitMQ · Docker",
    description:
      "An event-driven order management system with separate orders and inventory services communicating asynchronously over a message queue.",
    image: orderInventoryImage,
    repo: "https://github.com/LindelweM/order-inventory-system",
    live: "",
  },
  {
    title: "Booking System",
    stack: "Java · Spring Boot · Redis",
    description:
      "A reservation system for booking classes or tables, with a relational data model and Redis caching on top of a clean REST API.",
    image: "/projects/java-project.png",
    repo: "https://github.com/lindelwem/booking-system",
    live: "",
  },
  {
    title: "Finance Tracker",
    stack: "Python",
    description:
      "A tool that ingests bank statement CSVs and automatically categorizes spending, built for practical day-to-day use.",
    image: "/projects/python-project.png",
    repo: "https://github.com/lindelwem/finance-tracker",
    live: "",
  },
];
