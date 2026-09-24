import { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project, profile } from '../data';
import Pipeline from './Pipeline';

const Sec = ({ t, children }: { t: string; children: React.ReactNode }) => <section className="m-sec"><h3>{t}</h3>{children}</section>;

export default function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const key = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    addEventListener('keydown', key); document.body.style.overflow = 'hidden'; btn.current?.focus();
    return () => { removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={p.name} onClick={onClose}>
      <div className="modal-in" onClick={(e) => e.stopPropagation()} style={{ ['--h' as string]: p.hue }}>
        <button ref={btn} className="x" onClick={onClose} aria-label="Close project"><X size={20} /></button>
        <p className="mono muted">{p.date}</p>
        <h2>{p.name}</h2>
        <p className="lead">{p.tagline}</p>
        <Sec t="Problem"><p>{p.problem}</p></Sec>
        <Sec t="Approach"><p>{p.approach}</p></Sec>
        <Sec t="Architecture"><Pipeline steps={p.architecture} hue={p.hue} /></Sec>
        <Sec t="Key features"><ul className="chips">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></Sec>
        <Sec t="Technologies"><ul className="chips mono">{p.stack.map((f) => <li key={f}>{f}</li>)}</ul></Sec>
        {p.results && <Sec t="Results"><ul>{p.results.map((r) => <li key={r}>{r}</li>)}</ul></Sec>}
        <div className="row">
          <a className="btn" href={p.repo ?? profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          {p.demo && <a className="btn ghost" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
        </div>
      </div>
    </div>
  );
}
