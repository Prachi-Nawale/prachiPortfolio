import { ArrowUp, Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/data";

export function Footer() {
  const { personal, footer } = portfolioData;
  return (
    <footer className="site-footer">
      <div className="footer-main"><div><strong>{personal.name}</strong><p>{footer.tagline}</p></div><div className="footer-links"><a href={personal.socials.github}><Github aria-hidden="true" /> GitHub</a><a href={personal.socials.linkedin}><Linkedin aria-hidden="true" /> LinkedIn</a><a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {personal.name}</span><span>Built with React</span></div>
    </footer>
  );
}