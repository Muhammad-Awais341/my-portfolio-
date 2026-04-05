import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiFigma,
  SiGit,
} from "react-icons/si";

export default function Home() {
  const projects = [
    {
      title: "Mini ATS",
      description:
        "Applicant Tracking System built as a modern frontend web application for managing job postings, candidates, and recruitment stages in a structured and secure way.",
      role: "Frontend Developer",
      tech: "Next.js · TypeScript · Tailwind CSS · Supabase · PostgreSQL",
      points: [
        "Planned secure authentication and role-based access control",
        "Structured job and candidate management flows",
        "Designed Kanban-style recruitment stage handling",
        "Focused on security, accessibility, and scalable frontend architecture",
      ],
      result:
        "Demonstrates product thinking, structured architecture, database integration, and secure application design.",
      links: ["Live", "GitHub"],
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "RLS"],
    },
    {
      title: "Nordstay",
      description:
        "Airbnb-style booking platform built as a fullstack MVP with a focus on usability, responsive layout, and clear booking flows.",
      role: "Frontend Development & UX",
      tech: "Next.js · TypeScript · Supabase",
      points: [
        "Designed user flows for search, booking, and authentication",
        "Built a responsive interface with clear structure",
        "Implemented authentication and data handling",
      ],
      result:
        "Functional MVP showcasing user-friendly design and structured frontend architecture.",
      links: ["Live", "GitHub"],
      tags: ["Next.js", "TypeScript", "Supabase", "UX"],
    },
    {
      title: "Discussion Platform",
      description:
        "Reddit-inspired discussion platform created as a group project with a focus on frontend structure, component design, and user interaction.",
      role: "Frontend Developer",
      tech: "React · TypeScript",
      points: [
        "Developed reusable UI components and page layouts",
        "Worked with state management and user interactions",
        "Collaborated in a team using GitHub",
      ],
      result:
        "Highlights teamwork, frontend structure, and collaborative development workflow.",
      links: ["Live", "GitHub"],
      tags: ["React", "TypeScript", "Teamwork", "GitHub"],
    },
    {
      title: "Wash & Go",
      description:
        "UX/UI concept for a laundry booking app designed for shared residential buildings, focused on simplicity, clarity, and efficient user flows.",
      role: "UX/UI Designer",
      tech: "Figma",
      points: [
        "Designed user flows for booking, cancellation, and availability",
        "Created wireframes and interface designs in Figma",
        "Focused on layout, clarity, and visual hierarchy",
      ],
      result:
        "Delivered a simple and user-friendly concept grounded in UX principles.",
      links: ["Figma"],
      tags: ["Figma", "UX/UI", "Wireframing", "User Flows"],
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "WordPress",
    "Figma",
    "Git/GitHub",
  ];

  const services = [
    "Frontend development",
    "Landing pages",
    "Small business websites",
    "WordPress updates",
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-black px-6 py-12 max-w-6xl mx-auto">
      {/* HERO */}
      <section className="flex flex-col items-center text-center mb-28 pt-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Muhammad Awais
        </h1>

        <p className="text-xl text-gray-700 mb-4">Frontend Developer building scalable web applications with React, TypeScript, and Next.js</p>

        <div className="flex flex-wrap justify-center gap-4">
  <a
    href="#projects"
    className="px-6 py-3 rounded-xl border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="px-6 py-3 rounded-xl border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
  >
    Contact Me
  </a>
</div>
      </section>

 {/* ABOUT */}
<section id="about" className="mb-32">
  <div className="max-w-3xl mx-auto text-center">
    
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
      About me
    </h2>

    <div className="space-y-6 text-gray-600 leading-7 text-base md:text-lg">
      <p>
        I am a frontend developer based in Sweden with a passion for creating robust, scalable, and user-centric web applications. I specialize in building modern interfaces using React, TypeScript, and Next.js, and enjoy transforming complex requirements into intuitive digital experiences. My approach emphasizes clean code, performance, and accessibility, ensuring that every project delivers both technical excellence and outstanding usability.
      </p>
    </div>
  </div>
</section>

     {/* SKILLS */}
<section id="skills" className="mb-32">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
  Skills
</h2>
  </div>

  <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
    {[
      { name: "HTML", icon: <SiHtml5 size={22} /> },
      { name: "CSS", icon: <SiCss size={22} /> },
      { name: "JavaScript", icon: <SiJavascript size={22} /> },
      { name: "TypeScript", icon: <SiTypescript size={22} /> },
      { name: "React", icon: <SiReact size={22} /> },
      { name: "Next.js", icon: <SiNextdotjs size={22} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
      { name: "WordPress", icon: <SiWordpress size={22} /> },
      { name: "Figma", icon: <SiFigma size={22} /> },
      { name: "Git", icon: <SiGit size={22} /> },
    ].map((skill) => (
      <div
        key={skill.name}
        className="flex flex-col items-center justify-center rounded-xl border border-gray-200 p-4 text-sm text-gray-700 hover:shadow-md hover:-translate-y-1 transition duration-300"
      >
        <span className="mb-2 text-gray-800">{skill.icon}</span>
        <span>{skill.name}</span>
      </div>
    ))}
  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A selection of projects focused on frontend development, UX, and
            modern web application architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                {project.title === "Mini ATS" && (
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <p className="text-sm text-gray-500 mb-4 leading-6">
                Role: {project.role} <br />
                Tech: {project.tech}
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-5">
                {project.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 mb-5">{project.result}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-medium">
                {project.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="underline underline-offset-4 hover:text-gray-600"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
<section id="services" className="mb-32">
  <h2 className="text-3xl font-semibold mb-10 text-center">Services</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Service 1 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="text-2xl">💻</span>
      <div>
        <h3 className="font-semibold mb-1">Frontend Engineering</h3>
        <p className="text-sm text-gray-600">
          Building scalable, high-performance web applications using React, TypeScript, and Next.js.
        </p>
      </div>
    </div>

    {/* Service 2 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="text-2xl">🚀</span>
      <div>
        <h3 className="font-semibold mb-1">UI/UX Implementation</h3>
        <p className="text-sm text-gray-600">
          Translating design systems into clean, responsive, and user-friendly interfaces.
        </p>
      </div>
    </div>

    {/* Service 3 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="text-2xl">🌐</span>
      <div>
        <h3 className="font-semibold mb-1">Business Web Solutions</h3>
        <p className="text-sm text-gray-600">
          Developing fast, SEO-friendly websites tailored for business growth and conversion.
        </p>
      </div>
    </div>

    {/* Service 4 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="text-2xl">⚡</span>
      <div>
        <h3 className="font-semibold mb-1">Performance Optimization</h3>
        <p className="text-sm text-gray-600">
          Improving loading speed, responsiveness, and overall frontend performance.
        </p>
      </div>
    </div>

    {/* Service 5 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="text-2xl">🔌</span>
      <div>
        <h3 className="font-semibold mb-1">API Integration</h3>
        <p className="text-sm text-gray-600">
          Integrating REST APIs, authentication systems, and third-party services.
        </p>
      </div>
    </div>

    {/* Service 6 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="text-2xl">🧩</span>
      <div>
        <h3 className="font-semibold mb-1">Component Architecture</h3>
        <p className="text-sm text-gray-600">
          Building reusable and scalable UI components for maintainability and consistency.
        </p>
      </div>
    </div>

  </div>
</section>

  {/* CONTACT */}
<section id="contact" className="text-center pt-16 pb-12">
  <h2 className="text-3xl font-semibold mb-4">Contact</h2>
  <p className="text-gray-600 mb-8">
    Dedicated to real-world frontend solutions. Let's connect and create something amazing together!
  </p>

  <div className="flex justify-center gap-12 text-gray-700">
    <a
      href="mailto:awais.devops1@gmail.com"
      aria-label="Email"
      className="hover:scale-110 hover:text-black transition"
    >
      {/* Email SVG */}
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    </a>

    <a
      href="https://github.com/Muhammad-Awais341"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="hover:scale-110 hover:text-black transition"
    >
      {/* GitHub SVG */}
      <svg width="28" height="28" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.09 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.9 0-1.3.47-2.36 1.24-3.2-.12-.3-.54-1.5.12-3.13 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.66 1.63.24 2.83.12 3.13.77.84 1.23 1.9 1.23 3.2 0 4.59-2.8 5.6-5.48 5.89.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/in/muhammad-awais-60961b1b8/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:scale-110 hover:text-black transition"
    >
      {/* LinkedIn SVG */}
      <svg width="28" height="28" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.18h.05c.53-1 1.84-2.18 3.8-2.18 4.06 0 4.82 2.67 4.82 6.14V24h-4v-7.03c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.83-2.71 3.72V24h-4V8Z" />
      </svg>
    </a>
  </div>
</section>
{/* FOOTER */}
<footer className="text-center text-sm text-gray-500 mt-16 pb-6">
  © {new Date().getFullYear()} Muhammad Awais. All rights reserved.
</footer>
    </main>
  );
}