import { Check } from "lucide-react";
import { portfolioData } from "../data/data";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="page-section" aria-labelledby="experience-title">
      <SectionHeading number="03" eyebrow="Experience" title="Learning by building." />
      <div className="timeline">
        {portfolioData.experience.map((item) => <article className="timeline-item reveal" key={item.company}><div className="timeline-marker" aria-hidden="true" /><div className="timeline-meta"><span>{item.date}</span></div><div className="timeline-content"><p className="company">{item.company}</p><h3>{item.role}</h3><ul>{item.highlights.map((highlight) => <li key={highlight}><Check aria-hidden="true" />{highlight}</li>)}</ul></div></article>)}
      </div>
    </section>
  );
}