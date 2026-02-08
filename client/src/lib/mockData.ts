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
}

export const JOBS: Job[] = [
  {
    id: "1",
    title: "Graduate Engineer Trainee",
    company: "TechSolutions Inc.",
    logo: "https://ui-avatars.com/api/?name=Tech+Solutions&background=0D8ABC&color=fff",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "₹4.5 - 6.5 LPA",
    tags: ["Freshers", "2024 Batch", "Java"],
    postedAt: "2 hours ago",
    batch: ["2023", "2024", "2025"],
    description: "We are looking for enthusiastic Graduate Engineer Trainees to join our backend development team. You will be trained on Java Spring Boot and Microservices architecture.",
    requirements: [
      "B.E/B.Tech in CS/IT/ECE",
      "Strong knowledge of Java basics",
      "Good problem-solving skills",
      "Knowledge of SQL is a plus"
    ]
  },
  {
    id: "2",
    title: "Software Development Intern",
    company: "InnovateX",
    logo: "https://ui-avatars.com/api/?name=Innovate+X&background=eb4034&color=fff",
    location: "Remote",
    type: "Internship",
    salary: "₹15,000 / month",
    tags: ["Internship", "Remote", "React"],
    postedAt: "5 hours ago",
    batch: ["2025", "2026"],
    description: "Join our fast-paced startup as a frontend intern. You will work closely with our senior developers to build responsive web applications using React and Tailwind CSS.",
    requirements: [
      "Currently pursuing B.Tech/BCA",
      "Familiarity with HTML, CSS, JavaScript",
      "Basic understanding of React",
      "Eagerness to learn"
    ]
  },
  {
    id: "3",
    title: "Associate Analyst",
    company: "Global Systems",
    logo: "https://ui-avatars.com/api/?name=Global+Systems&background=34eb89&color=fff",
    location: "Hyderabad, India",
    type: "Full Time",
    salary: "₹4.0 - 5.0 LPA",
    tags: ["MNC", "Hiring Drive", "Analyst"],
    postedAt: "1 day ago",
    batch: ["2023", "2024"],
    description: "Global Systems is hiring for Associate Analyst roles. This is a great opportunity to start your career in a multinational environment with excellent training programs.",
    requirements: [
      "Any Graduate (B.Sc, B.Com, B.Tech)",
      "Excellent communication skills",
      "Basic computer proficiency",
      "Willing to work in rotational shifts"
    ]
  },
  {
    id: "4",
    title: "Junior Data Engineer",
    company: "DataFlow",
    logo: "https://ui-avatars.com/api/?name=Data+Flow&background=6b34eb&color=fff",
    location: "Pune, India",
    type: "Full Time",
    salary: "₹5.0 - 8.0 LPA",
    tags: ["Data Engineering", "Python", "SQL"],
    postedAt: "2 days ago",
    batch: ["2023", "2024"],
    description: "We are seeking a Junior Data Engineer to help build and maintain our data pipelines. Ideal for candidates who love Python and SQL.",
    requirements: [
      "B.Tech in CS or related field",
      "Strong Python scripting skills",
      "Understanding of ETL processes",
      "Experience with SQL databases"
    ]
  },
  {
    id: "5",
    title: "UI/UX Design Intern",
    company: "Creative Studio",
    logo: "https://ui-avatars.com/api/?name=Creative+Studio&background=eb34c6&color=fff",
    location: "Mumbai, India",
    type: "Internship",
    salary: "₹10,000 - ₹20,000 / month",
    tags: ["Design", "Figma", "Creative"],
    postedAt: "3 days ago",
    batch: ["2024", "2025"],
    description: "Passionate about design? Join our creative team and work on real client projects. You will learn Figma, prototyping, and user research.",
    requirements: [
      "Design portfolio is a must",
      "Knowledge of Figma/Adobe XD",
      "Good visual design sense",
      "Communication skills"
    ]
  }
];

export const STATS = [
  { label: "Active Jobs", value: "500+", icon: Building2 },
  { label: "Companies", value: "120+", icon: MapPin },
  { label: "Daily Updates", value: "50+", icon: Clock },
  { label: "Hired Students", value: "10k+", icon: GraduationCap },
];
