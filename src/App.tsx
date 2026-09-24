import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Menu, X, ArrowUpRight } from 'lucide-react';
import NeuralCanvas from './components/NeuralCanvas';
import Pipeline from './components/Pipeline';
import ProjectModal from './components/ProjectModal';
import { profile, experience as ex, projects, skills, education, courses, Project } from './data';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Research', 'Highlights', 'Contact'];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState<Project | null>(null);
  const [cat, setCat] = useState<string | null>(null);

  useEffect(() => {
    const s = () => setScrolled(scrollY > 24); s(); addEventListener('scroll', s, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => { removeEventListener('scroll', s); io.disconnect(); };
  }, []);

  return (
    <>
      <NeuralCanvas />
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-in">
          <a href="#home" className="logo">Yash Verma</a>
          <nav className={open ? 'open' : ''} aria-label="Primary">
            {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
            <a className="btn sm" href={profile.resume} download><Download size={14} /> Download Resume</a>
          </nav>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <p className="mono muted hero-k">AI/ML Engineer · LLMs · RAG · Agentic AI</p>
          <h1><span>Yash</span> <span>Verma</span></h1>
          <p className="hero-sub">Building intelligent systems with machine learning, deep learning and applied AI research.</p>
          <p className="muted hero-p">Final-year B.Tech (IT) student who has built LLM agents, RAG pipelines and reinforcement learning systems, and researched hardware-Trojan detection at IIT Kanpur. Looking for entry-level AI Engineer and Data Scientist roles in production ML.</p>
          <div className="row">
            <a className="btn" href="#projects">View my work</a>
            <a className="btn ghost" href={profile.resume} download><Download size={16} /> Download Resume</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </div>
          <div className="row soc">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </section>

        <section id="about" className="wrap">
          <h2 className="rv">I build intelligent systems where machine learning meets real engineering.</h2>
          <p className="lead rv">I'm finishing a B.Tech in Information Technology at RGIPT, with coursework in machine learning, deep learning, generative AI and computer vision. My work moves between research (detecting hardware Trojans with side-channel ML) and building applications: agents that reason over documents, semantic screening pipelines and RL policies for decision-making.</p>
          <div className="grid4">
            {[
              ['AI/ML', 'Machine learning, deep learning, NLP, computer vision, reinforcement learning'],
              ['Research', 'Hardware security, side-channel analysis, ML-based detection'],
              ['Engineering', 'Python, PyTorch, LangGraph, FastAPI, Docker, AWS'],
              ['Looking for', 'Entry-level AI Engineer / Data Scientist roles in production ML systems'],
            ].map(([t, d]) => <div key={t} className="card rv"><h3>{t}</h3><p className="muted">{d}</p></div>)}
          </div>
        </section>

        <section id="experience" className="wrap">
          <h2 className="rv">Experience</h2>
          <div className="tl rv">
            <div className="dot" />
            <p className="mono muted">{ex.period}</p>
            <h3>{ex.role} — {ex.org}</h3>
            <p className="lead">{ex.title}</p>
            <div className="stats">{ex.stats.map((s) => <div key={s.l}><b>{s.v}</b><span className="muted">{s.l}</span></div>)}</div>
            <ul>{ex.points.map((x) => <li key={x}>{x}</li>)}</ul>
            <ul className="chips mono">{ex.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="row">
              <a className="btn white-btn" href="/Intern-Certificate%20.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          </div>
        </section>

        <section id="projects" className="wrap">
          <h2 className="rv">Projects</h2>
          <div className="plist">
            {projects.map((p) => (
              <article key={p.id} className="proj rv" style={{ ['--h' as string]: p.hue }}>
                <div className="proj-vis" aria-hidden="true"><Pipeline steps={p.architecture} hue={p.hue} /></div>
                <div className="proj-body">
                  <p className="mono muted">{p.date}</p>
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                  <ul className="chips mono">{p.stack.slice(0, 5).map((s) => <li key={s}>{s}</li>)}</ul>
                  <button className="btn ghost" onClick={() => setProj(p)}>Read case study <ArrowUpRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap">
          <h2 className="rv">Skills</h2>
          <div className="tabs rv" role="group" aria-label="Filter skill groups">
            {Object.keys(skills).map((k) => <button key={k} aria-pressed={cat === k} className={cat === k ? 'on' : ''} onClick={() => setCat(cat === k ? null : k)}>{k}</button>)}
          </div>
          {Object.entries(skills).map(([k, v]) => (
            <div key={k} className={`sk rv ${cat && cat !== k ? 'dim' : ''}`}>
              <h3 className="mono muted">{k}</h3>
              <ul className="chips">{v.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </section>

        <section id="research" className="wrap">
          <h2 className="rv">Research & technical interests</h2>
          <p className="lead rv">At C3iHub, IIT Kanpur, I worked on detecting hardware Trojans with machine learning, without needing a trusted "golden" chip for comparison.</p>
          <div className="card rv"><Pipeline steps={['Hardware circuit', 'Side-channel analysis', 'ML detection model', 'Golden-chip-free Trojan detection']} hue="#5eead4" /></div>
          <ul className="chips rv">{['AI/ML for hardware security', 'LLM agents & RAG', 'Reinforcement learning', 'NLP', 'Computer vision'].map((t) => <li key={t}>{t}</li>)}</ul>
        </section>

        <section id="highlights" className="wrap">
          <h2 className="rv">Highlights & education</h2>
          <div className="grid4">
            {[['98%', 'Trojan detection accuracy using side-channel analysis'], ['3.19', 'False positives per 1000 gates on stealthy Trojans'], ['0', 'Golden chips required — reference-free detection']].map(([v, l]) => <div key={l} className="card rv"><b className="big">{v}</b><p className="muted">{l}</p></div>)}
          </div>
          <div className="edu">{education.map((e) => <div key={e.t} className="rv"><p className="mono muted">{e.d}</p><h3>{e.t}</h3><p>{e.s}</p><p className="muted">{e.n}</p></div>)}</div>
          <p className="muted rv">Key courses: {courses.join(', ')}.</p>
        </section>

        <section id="contact" className="wrap contact">
          <h2 className="rv">Let's build intelligent systems.</h2>
          <p className="lead rv">Open to AI/ML roles, internships, research collaborations and interesting AI projects.</p>
          <div className="row">
            <a className="btn" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <p><b>Yash Verma</b> · AI/ML Engineer</p>
        <p className="muted">Built with curiosity, code & intelligent systems.</p>
      </footer>
      {proj && <ProjectModal p={proj} onClose={() => setProj(null)} />}
    </>
  );
}
