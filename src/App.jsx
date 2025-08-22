import React from "react";
import './index.css';
import { motion } from "framer-motion";
import { Code2, Database, Server, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";

// ---- CONFIG: Edit these to personalize ----
const PROFILE = {
  name: "Ammar Yagoub",
  title: "Java & Spring Boot | Backend Developer | Computer Science Graduate ",
  location: "Saudi Arabia",
  email: "mailto:ammar.yagoub3@gmail.com", // change to your email
  linkedin: "https://www.linkedin.com/in/ammar-yagoub-300936293/", // change to your LinkedIn
  github: "https://github.com/amar-ya", // change to your GitHub
  resumeUrl: import.meta.env.BASE_URL + "Ammar Yagoub-Software developer-Resume.pdf", // link to a hosted PDF resume
};

const SKILLS = [
  "Java", "Spring Boot", "Spring-web", "Spring-security", "REST APIs", "SQL (MySQL/PostgreSQL)",
  "Liquibase", "RabbitMQ", "Git & GitHub", "Jira", "Maven", "Spring Data JPA", "Docker", "Intellij Idea"
];

const PROJECTS = [
  {
    title: "Souq — Marketplace Backend",
    period: "2025",
    description:
      "Backend for a marketplace app with JWT auth, role-based access, and product/order services. Built with Spring Boot, PostgreSQL,and Liquibase.",
    tech: ["Spring Boot", "PostgreSQL", "Liquibase", "JWT"],
    repo: "https://github.com/amar-ya/Souq/tree/master/backend",
    demo: "#",
  },
];

const EXPERIENCE = [
  {
    role: "backend Developer Trainee",
    company: "Royal Commission for Jubail & Yanbu",
    period: "2024/February — 2024/September",
    bullets: [
      "Developed and maintained Spring Boot services.",
      "Implemented role-based authentication for secure access control.",
      "Built REST APIs to monitor SMS messages, including sender, receiver, and content.",
    ],
  },
  {
    role: "Application Support ",
    company: "2P perfect presentation",
    period: "2025/August — Present",
    bullets: [
      "Receive issues via email, phone, or ticketing system.",
      "Use dashboards/alerts to check application health and availability.",
      "Answer FAQs about the application.",
    ],
  },
];

// ---- UI Helpers ----
const Section = ({ id, title, icon, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex items-center gap-3 mb-8">
      {icon}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm mr-2 mb-2 shadow-sm">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border p-5 sm:p-6 shadow-sm hover:shadow-md transition-all bg-white/70 backdrop-blur">
    {children}
  </div>
);

export default function PortfolioApp() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800">
      {/* Subtle background pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')] opacity-10"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold">{PROFILE.name}</a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-lg text-slate-600">{PROFILE.title}</p>
            <p className="mt-4 text-slate-700 leading-relaxed">{PROFILE.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PROFILE.resumeUrl} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow">
                <Download size={16} /> Download CV
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow">
                <Code2 size={16} /> View Projects
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a href={PROFILE.github} className="p-2 rounded-lg border hover:shadow" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={PROFILE.linkedin} className="p-2 rounded-lg border hover:shadow" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={PROFILE.email} className="p-2 rounded-lg border hover:shadow" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="w-full max-w-sm lg:ml-auto flex justify-center">
              <img
                src={import.meta.env.BASE_URL + "photo.jpeg"} // file in /public
                alt="Ammar Yagoub"
                className="h-48 w-48 rounded-full border-4 border-white shadow-lg object-cover"
                loading="eager"
                decoding="async"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About" icon={<Server className="text-slate-500" />}>
        <Card>
          <p className="leading-relaxed">
            I’m Ammar Yagoub, a Computer Science graduate (2024/Nov) and backend developer passionate about building scalable and reliable systems. My expertise is in Java and Spring Boot, where I design and implement REST APIs, manage databases, and apply clean architecture principles. I enjoy solving complex problems, working with SQL and data modeling, and developing services that are efficient, secure, and easy to maintain. Beyond coding, I’m continuously improving my technical skills and exploring modern tools and practices to deliver impactful software solutions.
          </p>
        </Card>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" icon={<Database className="text-slate-500" />}>
        <Card>
          <div className="flex flex-wrap">
            {SKILLS.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </Card>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" icon={<Code2 className="text-slate-500" />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{p.period}</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 mt-3 leading-relaxed">{p.description}</p>
              <div className="mt-3 flex flex-wrap">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.repo && (
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm hover:underline">
                    <Github size={16} /> Code
                  </a>
                )}
                {p.demo && p.demo !== "#" && (
                  <a href={p.demo} className="inline-flex items-center gap-1 text-sm hover:underline">
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" icon={<Server className="text-slate-500" />}>
        <div className="space-y-4">
          {EXPERIENCE.map((e) => (
            <Card key={e.role}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{e.role}</h3>
                  <p className="text-sm text-slate-500">{e.company} • {e.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" icon={<Mail className="text-slate-500" />}>
        <Card>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a href={PROFILE.email} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow">
              <Mail size={16} /> Email Me
            </a>
            <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={PROFILE.github} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow">
              <Github size={16} /> GitHub
            </a>
          </div>
        </Card>
      </Section>

      <footer className="py-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</footer>
    </div>
    
  );
}

