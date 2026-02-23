import { Building2, MapPin, Banknote, Clock, GraduationCap } from "lucide-react";

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string; // URL or placeholder
  location: string;
  type: string; // Full Time, Intern
  salary: string;
  tags: string[];
  postedAt: string;
  description: string;
  requirements: string[];
  batch: string[];
  experience: string; // Fresher, 0-1 Years, 1-3 Years, 3+ Years
  applyLink?: string;
}

export const JOBS: Job[] = [
  //08-02-2026
  {
    id: "1",
    title: "Junior Engineer – Full Stack Developer",
    company: "Cornerstone OnDemand",
    logo: "https://ui-avatars.com/api/?name=Cornerstone+OnDemand&background=0D8ABC&color=fff",
    location: "Pune, Maharashtra, India",
    type: "Full Time",
    salary: "₹3.8 - 5.0 LPA (Estimated)",
    tags: ["Full Stack", "React", "Node.js", "AWS", "Cloud Engineering"],
    postedAt: "04 Feb 2026",
    batch: ["2022", "2023", "2024", "2025"],
    experience: "0-2 Years",
    description: "Join the Cloud Engineering Team to design, build, and optimize cloud-native applications using React, Node.js, TypeScript, .NET/Java & AWS, collaborating with cross-functional teams to deliver scalable solutions.",
    requirements: [
      "Bachelor’s degree in CS/Engineering (or equivalent experience)",
      "Experience with React, Node.js, TypeScript",
      "Knowledge of .NET or Java backend",
      "Hands-on with AWS cloud services",
      "Understanding of CI/CD and Docker",
      "Strong problem-solving and communication skills"
    ],
    applyLink: "https://cornerstone.csod.com/ux/ats/careersite/2/home/requisition/10876?c=cornerstone&sq=Junior%20Engineer"
  },
  {
    id: "2",
    title: "Technology Support Engineer",
    company: "Accenture",
    logo: "https://ui-avatars.com/api/?name=Accenture&background=eb4034&color=fff",
    location: "Navi Mumbai, Maharashtra, India",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["Support", "Windows", "Troubleshooting"],
    postedAt: "Recent",
    batch: ["2022", "2023", "2024", "2025"],
    experience: "0-2 Years",
    description: "Accenture is hiring a Technology Support Engineer to resolve incidents across business systems, ensure operational stability, manage change requests, update knowledge bases, and collaborate with service teams for issue resolution. :contentReference[oaicite:0]{index=0}",
    requirements: [
      "Proficiency in Microsoft Windows Desktop Management",
      "Experience with incident management systems",
      "Remote desktop support familiarity",
      "Good troubleshooting and communication skills",
      "15 years of full-time education required"
    ],
    applyLink: "https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5366571-S1954086_en&src=LINKEDINJP"
  },
  {
    id: "3",
    title: "Software Engineer – Backend",
    company: "Modulr Finance",
    logo: "https://ui-avatars.com/api/?name=Modulr+Finance&background=34eb89&color=fff",
    location: "Pune, Maharashtra, India",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["Backend", "Java", "Microservices", "Fintech"],
    postedAt: "Recent",
    batch: ["2022", "2023", "2024", "2025"],
    experience: "0-3 Years",
    description: "Modulr Finance is hiring a Backend Software Engineer to contribute to building scalable, reliable backend systems for its embedded payments platform, working with distributed microservices and REST APIs. :contentReference[oaicite:1]{index=1}",
    requirements: [
      "Experience with Java (17+) or similar backend languages",
      "Build and evolve microservices",
      "Design and maintain RESTful APIs",
      "Work with PostgreSQL and other data stores",
      "Collaborative team player with strong engineering fundamentals"
    ],
    applyLink: "https://job-boards.greenhouse.io/modulrfinance/jobs/7735424002?gh_jid=7735424002&source=LinkedIn"
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "NTT DATA",
    logo: "https://ui-avatars.com/api/?name=NTT+DATA&background=6b34eb&color=fff",
    location: "Remote / Karnataka, India",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["SQL", "Python", "Power BI", "Analytics"],
    postedAt: "Recent",
    batch: ["2022", "2023", "2024", "2025"],
    experience: "0-3 Years",
    description: "NTT DATA is seeking a Data Analyst to analyze large datasets, create dashboards, perform EDA, and collaborate with stakeholders using SQL, Python, and Power BI tools. :contentReference[oaicite:2]{index=2}",
    requirements: [
      "Strong SQL proficiency",
      "Python for data cleaning and analytics",
      "Power BI dashboarding",
      "Experience with notebook environments",
      "Statistical analysis and data storytelling skills"
    ],
    applyLink: "https://careers.services.global.ntt/global/en/job/31bc3bcd4dfa200/Data-Analyst"
  },
  {
    id: "5",
    title: "Software Engineer (Inferred Entry Role)",
    company: "Emerson",
    logo: "https://ui-avatars.com/api/?name=Emerson&background=1abc9c&color=fff",
    location: "Pune, Maharashtra, India",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["C#", ".NET", "Agile", "Industrial Software"],
    postedAt: "09 Jan 2026",
    batch: ["2022", "2023", "2024", "2025"],
    experience: "0-2 Years",
    description: "Emerson is hiring Software Engineers to design and develop software for industrial automation, participate in agile development, code review, QA testing, and technical support activities. (Full job description was provided by user.)",
    requirements: [
      "Hands-on experience with C# and .NET framework",
      "Version control (Git)",
      "Object-oriented programming fundamentals",
      "QA and agile SDLC experience",
      "Strong problem-solving and communication skills"
    ],
    applyLink: "https://hdjq.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/25030499?keyword=engineer&location=India&locationId=300000000228786&locationLevel=country&mode=location"
  },

  {
    id: "6",
    title: "Associate Software Engineer",
    company: "Empower",
    logo: "https://ui-avatars.com/api/?name=Empower&background=0d6efd&color=fff",
    location: "India (As per job listing)",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["Java", "Spring Boot", "Microservices", "SQL", "Agile"],
    postedAt: "Feb 2026",
    batch: ["2022", "2023", "2024", "2025"],
    experience: "0-2 Years",
    description: "Empower is hiring Associate Software Engineers to develop scalable backend services, work on microservices architecture, write clean and efficient code, and collaborate in agile teams to deliver financial technology solutions.",
    requirements: [
      "Strong knowledge of Java and Spring Boot",
      "Understanding of REST APIs and microservices",
      "Experience with relational databases (SQL)",
      "Familiarity with Git and agile methodologies",
      "Strong analytical and problem-solving skills"
    ],
    applyLink: "https://jobs.empower.com/job/-/-/42743/91822546048"
  },

  {
    id: "7",
    title: "Software Engineer",
    company: "Enveu",
    logo: "https://ui-avatars.com/api/?name=Enveu&background=6f42c1&color=fff",
    location: "India",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["JavaScript", "React", "Node.js", "AWS", "API Development"],
    postedAt: "Feb 2026",
    batch: ["2022", "2023", "2024", "2025"],
    experience: "0-3 Years",
    description: "Enveu is looking for Software Engineers to build and maintain OTT platform solutions, develop scalable web applications, integrate APIs, and collaborate with cross-functional teams.",
    requirements: [
      "Strong knowledge of JavaScript and React",
      "Experience with Node.js backend development",
      "Understanding of REST APIs",
      "Knowledge of cloud platforms (AWS preferred)",
      "Good communication and teamwork skills"
    ],
    applyLink: "https://enveu.keka.com/careers/jobdetails/128956"
  },

  {
    id: "8",
    title: "Software Development Engineer",
    company: "Autodesk",
    logo: "https://ui-avatars.com/api/?name=Autodesk&background=f39c12&color=fff",
    location: "Bengaluru, Karnataka, India",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["C++", "Python", "Cloud", "Data Structures", "Algorithms"],
    postedAt: "Feb 2026",
    batch: ["2021", "2022", "2023", "2024"],
    experience: "1-3 Years",
    description: "Autodesk is hiring Software Development Engineers to design, build, and maintain scalable engineering software solutions, improve performance, and contribute to cloud-based product development.",
    requirements: [
      "Strong programming skills in C++ or Python",
      "Solid understanding of data structures and algorithms",
      "Experience with cloud technologies",
      "Problem-solving mindset",
      "Good communication skills"
    ],
    applyLink: "http://autodesk.wd1.myworkdayjobs.com/Ext/job/Bengaluru-IND/Software-Development-Engineer_26WD95482"
  },

  {
    id: "9",
    title: "Data Engineer II",
    company: "Thermo Fisher Scientific",
    logo: "https://ui-avatars.com/api/?name=Thermo+Fisher&background=e74c3c&color=fff",
    location: "India (As per job listing)",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["Python", "SQL", "ETL", "Data Pipelines", "Cloud"],
    postedAt: "Feb 2026",
    batch: ["2020", "2021", "2022", "2023"],
    experience: "2+ Years",
    description: "Thermo Fisher Scientific is hiring a Data Engineer II to design and maintain data pipelines, manage ETL processes, and support analytics initiatives by ensuring data integrity and scalability.",
    requirements: [
      "Strong Python and SQL skills",
      "Experience building ETL pipelines",
      "Knowledge of cloud platforms",
      "Understanding of data warehousing concepts",
      "Strong analytical and debugging skills"
    ],
    applyLink: "https://jobs.thermofisher.com/global/en/job/R-01336905/Data-Engineer-II"
  },

  {
    id: "10",
    title: "Software Engineer 1",
    company: "Intuit",
    logo: "https://ui-avatars.com/api/?name=Intuit&background=3498db&color=fff",
    location: "Bengaluru, Karnataka, India",
    type: "Full Time",
    salary: "Not disclosed",
    tags: ["Java", "Spring", "Microservices", "Cloud", "DSA"],
    postedAt: "Feb 2026",
    batch: ["2022", "2023", "2024"],
    experience: "0-2 Years",
    description: "Intuit is hiring Software Engineer 1 to build scalable financial software systems, contribute to backend services, write high-quality code, and collaborate in agile development teams.",
    requirements: [
      "Strong programming skills (Java preferred)",
      "Understanding of data structures and algorithms",
      "Experience with REST APIs and microservices",
      "Familiarity with cloud platforms",
      "Strong problem-solving and communication skills"
    ],
    applyLink: "https://jobs.intuit.com/job/bengaluru/software-engineer-1/27595/90402464720?cid=job_li"
  }


];

export const STATS = [
  { label: "Active Jobs", value: "40+", icon: Building2 },
  { label: "Companies", value: "12+", icon: MapPin },
  { label: "Daily Updates", value: "5+", icon: Clock },
  { label: "Hired Students", value: "100+", icon: GraduationCap },
];
