import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../data/data";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="page-section section-tinted" aria-labelledby="projects-title">
      <SectionHeading number="04" eyebrow="Selected work" title="Projects with practical purpose." description="A selection of academic and independent work spanning AI, Java, and full-stack application development." />
      <div className="projects-grid">
        {portfolioData.projects.map((project) => <article className="project-card reveal" key={project.title}><div className="project-number">{project.number}</div><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="badge-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="project-links"><a href={project.github} aria-label={`View ${project.title} on GitHub`}><Github aria-hidden="true" /> GitHub</a><a href={project.demo} aria-label={`View live demo of ${project.title}`}><ExternalLink aria-hidden="true" /> Live Demo</a></div></article>)}
      </div>
    </section>
  );
}