import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/data";

export function Hero() {
  const { personal, hero } = portfolioData;
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="availability"><span aria-hidden="true" />{hero.eyebrow}</p>
          <h1 id="hero-title">{personal.name}</h1>
          <p className="hero-role">{personal.role}</p>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={personal.resume} download>
              <Download aria-hidden="true" /> Download Resume
            </a>
            <a className="button button-secondary" href="#contact">
              <Mail aria-hidden="true" /> Contact Me
            </a>
          </div>
          <div className="social-row" aria-label="Social profiles">
            <a href={personal.socials.github} aria-label="Prachi's GitHub profile"><Github aria-hidden="true" /></a>
            <a href={personal.socials.linkedin} aria-label="Prachi's LinkedIn profile"><Linkedin aria-hidden="true" /></a>
          </div>
        </div>
        <div className="code-panel" aria-label="Developer mindset">
          <div className="code-panel-top"><span /><span /><span /><small>portfolio.js</small></div>
          <pre>{hero.codeLines.map((line, index) => <code key={line}><b>{String(index + 1).padStart(2, "0")}</b>{line}</code>)}</pre>
          <div className="code-status"><span /> Ready to build</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About section"><ArrowDown aria-hidden="true" /></a>
    </section>
  );
}