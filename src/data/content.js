// Edit everything in this file with your real details — nothing else needs to change.

export const profile = {
  name: "Lindelwe",
  role: "Senior Software Engineer",
  location: "Cape Town, South Africa",
  tagline:
    "I build event-driven systems that hold up under real load, and I teach other engineers how to do the same.",
  intro:
    "Full Stack Software Engineer with 6+ years of experience building scalable, cloud-native applications in the banking and fintech domain. Proficient in .NET C#, Java, AWS, Azure, and modern frontend frameworks with a track record of delivering micro-services based solutions in regulated, agile environments. Skilled in DevOps practices, infrastructure-as-code, and mentoring junior developers. Passionate about clean architecture, continuous improvement, and shipping reliable software.",
  linkedin: "https://linkedin.com/in/lindelwe-myeza",
  resumeFile: "/resume.pdf",
};

export const experience = [
  {
    role: "Senior Software Engineer",
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
    role: "Junior Software Developer",
    org: "Astel Systems",
    period: "Past - 2 years 1 month",
    points: [
      "Integrated the Azure Cloud Portal with an IoT application built on .NET Core 6.0, successfully taking the solution from development through to production—a significant achievement as a junior developer.",
      "Gained hands-on experience across the full SDLC, including CI/CD pipelines, cloud resource provisioning, and production monitoring for cloud-based IoT services."
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
    name: "Certification name",
    issuer: "Issuing organization",
    period: "Year – 2024",
  },
  {
    name: "Another certification name",
    issuer: "Issuing organization",
    period: "Year – 2023",
  },
];

export const skills = [
  { group: "Languages", items: ["C#", "Java", "Python", "JavaScript"] },
  { group: "Backend", items: ["ASP.NET Core", "Spring Boot", "Node.js", "REST APIs"] },
  { group: "Messaging & Data", items: ["Kafka", "RabbitMQ", "Redis", "SQL"] },
  { group: "Frontend & Cloud", items: ["React", "AWS", "Docker"] },
];

export const projects = [
  {
    title: "Order & Inventory Service",
    stack: "C# · ASP.NET Core · RabbitMQ",
    description:
      "An event-driven order management system with separate orders and inventory services communicating asynchronously over a message queue.",
    image: "/projects/csharp-project.png",
    repo: "https://github.com/lindelwem/order-inventory-service",
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
