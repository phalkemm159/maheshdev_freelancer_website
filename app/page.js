import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import {
  ArrowUpRight, Code2, Database, Workflow, Braces, BarChart3, Globe2,
  Mail, Phone, Github, Linkedin, ExternalLink, CheckCircle2, Sparkles, MessageCircle,
  Smartphone, Bot, MoveUpRight, Layers3, Zap, ShieldCheck
} from "lucide-react";

const services = [
  { icon: Code2, number: "01", title: "Web development", desc: "Fast, responsive websites and practical full-stack applications that help your business look credible and work better.", tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"] },
  { icon: BarChart3, number: "02", title: "Data analytics", desc: "Clean, understand, and visualize business data with useful Excel dashboards, clear reports, and Python analysis.", tags: ["Excel", "Python", "Pandas", "NumPy", "Matplotlib"] },
  { icon: Workflow, number: "03", title: "Python automation", desc: "Reduce repetitive work with custom scripts for data processing, reporting, and permitted website data extraction.", tags: ["Python", "BeautifulSoup", "Selenium", "Flask", "Automation"] }
];

const projects = [
  {
    name: "GlobalNest",
    category: "Property rentals & bookings",
    desc: "A full-stack property rental platform with secure authentication, booking workflows, payment integration, interactive maps, and image hosting.",
    stack: ["MERN", "Node.js", "Express", "MongoDB", "REST APIs"],
    repo: "https://github.com/phalkemm159/GlobalNest-Fullstack",
    demo: "https://globalnest.onrender.com/",
    icon: Globe2,
    tone: "mint"
  },
  {
    name: "Hospital Management System",
    category: "Healthcare application",
    desc: "A Flask and SQLite application with role-based dashboards for patients, doctors, and administrators, plus an AI-powered medical chatbot.",
    stack: ["Python", "Flask", "SQLite", "AI Chatbot"],
    repo: "https://github.com/phalkemm159/Hospital_Management_System_Project",
    demo: "https://hospital-management-system-w6nv.onrender.com/",
    icon: ShieldCheck,
    tone: "blue"
  },
  {
    name: "EduRAG",
    category: "AI-powered learning assistant",
    desc: "A retrieval-augmented learning assistant that processes video and audio learning content through transcription, embeddings, vector retrieval, and LLM-based answers.",
    stack: ["Python", "RAG", "Whisper", "Embeddings", "LLM"],
    repo: "https://github.com/phalkemm159/EduRAG-AI-Powered-Learning-Assistant",
    icon: Bot,
    tone: "peach"
  },
  {
    name: "All PDFs AI",
    category: "AI-powered PDF tools",
    desc: "A privacy-focused PDF workspace for document tasks, with AI-assisted question answering, summarisation, and information extraction.",
    stack: ["Python", "AI", "PDF Processing"],
    repo: "https://github.com/phalkemm159/ALL_PDFS_AI",
    demo: "https://all-pdfs-ai.onrender.com/",
    icon: Braces,
    tone: "mint"
  },
  {
    name: "Collaborative Whiteboard",
    category: "RSOC 2025 hackathon",
    desc: "A real-time shared whiteboard built during a six-hour hackathon, enabling multiple participants to collaborate and explain ideas visually.",
    stack: ["JavaScript", "Real-time Collaboration", "Canvas"],
    repo: "https://github.com/phalkemm159/WhiteBoard-Collaboration-Tool",
    icon: Layers3,
    tone: "blue"
  }
];

const process = [
  ["01", "Discover", "We clarify your goals, users, requirements, and what a successful result looks like."],
  ["02", "Plan", "You receive a clear scope, deliverables, timeline, and agreed milestones before work begins."],
  ["03", "Build & test", "I develop the solution, share progress, and test the agreed functionality."],
  ["04", "Handover", "You receive the completed work, source files where agreed, and handover guidance."]
];

function Heading({ kicker, title, copy }) {
  return <div className="max-w-2xl"><p className="eyebrow">{kicker}</p><h2 className="section-title mt-3">{title}</h2>{copy && <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">{copy}</p>}</div>;
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return <article className="project-card group">
    <div className={`project-art ${project.tone}`}>
      <div className="project-art-grid"></div>
      <div className="project-icon"><Icon size={34} strokeWidth={1.7}/></div>
      <span className="project-number">PROJECT / {project.category.toUpperCase()}</span>
    </div>
    <div className="p-6 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[.13em] text-emerald-700">{project.category}</p>
      <h3 className="mt-2 text-xl font-extrabold tracking-tight">{project.name}</h3>
      <p className="mt-3 min-h-[78px] text-sm leading-7 text-slate-600">{project.desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:gap-3" href={project.repo} target="_blank" rel="noreferrer"><Github size={16}/> View on GitHub <ArrowUpRight size={15}/></a>
        {project.demo && <a className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-emerald-700" href={project.demo} target="_blank" rel="noreferrer"><Globe2 size={16}/> Live demo <ArrowUpRight size={15}/></a>}
      </div>
    </div>
  </article>;
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahesh Phalke",
    "jobTitle": "Freelance Web Developer and Python Developer",
    "description": "Independent developer offering responsive website development, Python automation, and data analytics services.",
    "knowsAbout": ["React", "Next.js", "Node.js", "MongoDB", "Python", "Web Development", "Data Analytics", "Excel", "Web Scraping"],
    "sameAs": [
      "https://github.com/phalkemm159",
      "https://mahesh-phalke-portfolio-minimist.vercel.app/",
      "https://www.linkedin.com/in/mahesh-phalke159",
      "https://www.upwork.com/freelancers/~0186912d29790262f8?mp_source=share",
      "https://www.freelancer.in/u/phalkemm159"
    ],
    "email": "phalkemm234@gmail.com",
    "telephone": "+919834570499"
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="MaheshDev home">mahesh<span>dev</span><i>.</i></a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#services">Services</a><a href="#work">Projects</a><a href="#about">About</a><a href="#process">Process</a>
        </nav>
        <div className="nav-actions"><ThemeToggle/><a href="#contact" className="nav-cta">Let's talk <ArrowUpRight size={15}/></a></div>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot"></span> Independent developer · Open to projects</div>
            <p className="eyebrow mt-8">Web development <b>·</b> Python <b>·</b> Data analytics</p>
            <h1>Thoughtful tech.<br/><span>Real-world impact.</span></h1>
            <p className="hero-lede">I'm Mahesh Phalke — I build modern websites, automate everyday workflows, and turn raw data into useful business insights.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="button-primary">Start a project <ArrowUpRight size={17}/></a>
              <a href="#work" className="button-quiet">Explore my work <MoveUpRight size={16}/></a>
              <a href="https://wa.me/9834570499/?text=Hi%20wanted%20to%20connect%20....." target="_blank" rel="noreferrer" className="button-quiet" aria-label="Connect with Mahesh on WhatsApp"><MessageCircle size={17}/> WhatsApp me <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-proof">
              <span><CheckCircle2 size={16}/> Clear communication</span><span><CheckCircle2 size={16}/> Mobile-first builds</span><span><CheckCircle2 size={16}/> Practical solutions</span>
            </div>
          </div>
          <div className="hero-visual hero-photo-visual">
            <div className="photo-glow"></div>
            <div className="profile-photo-frame">
              <Image src="/images/mahesh-phalke.webp" alt="Mahesh Phalke, freelance web developer and Python developer" fill priority sizes="(max-width: 900px) 90vw, 42vw" className="profile-photo" />
              <div className="photo-caption"><span className="photo-caption-dot"></span><div><strong>Mahesh Phalke</strong><small>Freelance Developer · India</small></div></div>
            </div>
            <div className="floating-note note-top"><span className="note-symbol"><Code2 size={17}/></span><div><b>Web development</b><small>Modern digital experiences</small></div></div>
            <div className="floating-note note-bottom"><span className="note-symbol note-symbol-lime"><BarChart3 size={17}/></span><div><b>Data & automation</b><small>Practical solutions</small></div></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>TECHNOLOGIES I WORK WITH</span><div>REACT <i/> NODE.JS <i/> PYTHON <i/> MONGODB <i/> EXCEL</div></div>
      </section>

      <section id="services" className="section-pad">
        <div className="container">
          <Heading kicker="What I do" title="The right tools for your next move." copy="I work across web, data, and automation — helping individuals and growing businesses solve practical problems with technology."/>
          <div className="service-grid mt-12">
            {services.map(({icon:Icon,number,title,desc,tags})=><article className="service-card" key={number}>
              <div className="service-card-top"><div className="service-icon"><Icon size={23}/></div><span>{number} / SERVICE</span></div>
              <h3>{title}</h3><p>{desc}</p>
              <div className="flex flex-wrap gap-2 mt-6">{tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
              <a href="#contact" className="service-link">Discuss your project <ArrowUpRight size={16}/></a>
            </article>)}
          </div>
        </div>
      </section>

      <section id="work" className="section-pad work-section">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><Heading kicker="Selected work" title="A few things I've been building." copy="A snapshot of my work across full-stack development and applied machine learning. Each project is an opportunity to solve a real problem."/><a className="text-sm font-bold text-emerald-700 hover:underline" href="https://github.com/phalkemm159" target="_blank" rel="noreferrer">More on GitHub ↗</a></div>
          <div className="project-grid mt-12">{projects.map(p=><ProjectCard key={p.name} project={p}/>)}</div>
          <p className="mt-5 text-xs text-slate-500">Explore the source code on GitHub or open a live demo where one is available.</p>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container about-grid">
          <div className="about-panel"><div className="about-monogram">MP<span>.</span></div><p className="about-quote">Curious by nature.<br/><em>Builder by choice.</em></p><div className="about-line"></div><p className="text-sm leading-7 text-emerald-50/70">Learning continuously. Building thoughtfully. Focused on making technology useful.</p><div className="about-stamp"><Sparkles size={15}/> MADE WITH CURIOSITY</div></div>
          <div className="about-copy"><Heading kicker="A little about me" title="Hi, I'm Mahesh." copy="I'm a Computer Science and Engineering background developer with hands-on project experience in web development, Python, and data science. I enjoy understanding the problem first, then building a clear, maintainable solution around it."/>
            <div className="about-values"><div><Smartphone size={20}/><b>Responsive by default</b><p>Thoughtful experiences across mobile, tablet, and desktop.</p></div><div><Braces size={20}/><b>Built to be maintainable</b><p>Clean structure, sensible choices, and clear handover.</p></div></div>
            <div className="skill-cloud">{["JavaScript","React","Next.js","Node.js","Express","MongoDB","Python","Flask","Pandas","Excel","Scikit-learn","Git"].map(s=><span key={s}>{s}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="process" className="section-pad process-section">
        <div className="container"><Heading kicker="How it works" title="A simple, transparent process." copy="No guesswork. We agree on what needs to be done, how we'll work, and what you'll receive."/>
          <div className="process-grid mt-12">{process.map(([n,t,d])=><article key={n} className="process-item"><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div><p className="eyebrow !text-emerald-300">Have something in mind?</p><h2>Let's turn your idea into <span>something useful.</span></h2><p className="mt-5 max-w-lg text-base leading-8 text-emerald-50/70">Tell me what you're working on. Share a little about the challenge, and we can figure out a practical next step together.</p><a href="mailto:phalkemm234@gmail.com?subject=Hi%20wanted%20to%20connect...." className="button-light mt-8">Tell me about your project <ArrowUpRight size={17}/></a></div>
          <div className="contact-card"><p className="text-xs font-bold tracking-[.15em] text-emerald-200">CONNECT</p><a href="mailto:phalkemm234@gmail.com"><Mail size={18}/> phalkemm234@gmail.com</a><a href="tel:+919834570499"><Phone size={18}/> +91 98345 70499</a><a href="https://wa.me/9834570499/?text=Hi%20wanted%20to%20connect%20....." target="_blank" rel="noreferrer"><MessageCircle size={18}/> Connect on WhatsApp <ExternalLink size={13}/></a><a href="https://mahesh-phalke-portfolio-minimist.vercel.app/" target="_blank" rel="noreferrer"><Globe2 size={18}/> My portfolio website <ExternalLink size={13}/></a><a href="https://github.com/phalkemm159" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ExternalLink size={13}/></a><a href="https://www.linkedin.com/in/mahesh-phalke159" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ExternalLink size={13}/></a><a href="https://www.upwork.com/freelancers/~0186912d29790262f8?mp_source=share" target="_blank" rel="noreferrer"><ExternalLink size={18}/> Upwork profile <ExternalLink size={13}/></a><a href="https://www.freelancer.in/u/phalkemm159" target="_blank" rel="noreferrer"><ExternalLink size={18}/> Freelancer profile <ExternalLink size={13}/></a><p className="contact-note">Available for freelance web development, Python automation, and data analytics projects.</p></div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="container flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><a href="#home" className="brand brand-footer">mahesh<span>dev</span><i>.</i></a><p>© {new Date().getFullYear()} Mahesh Phalke. Built with care.</p><a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </>;
}
