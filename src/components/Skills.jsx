import { Braces, Cpu, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { portfolioData } from "../data/data";
import { SectionHeading } from "./SectionHeading";

const icons = { code: Braces, layout: LayoutTemplate, server: Server, database: Database, cpu: Cpu, wrench: Wrench };

export function Skills() {
  return (
    <section id="skills" className="page-section section-tinted" aria-labelledby="skills-title">
      <SectionHeading number="02" eyebrow="Technical toolkit" title="Skills built through practice." description="A balanced foundation across development, testing, databases, and essential engineering tools." />
      <div className="skills-grid">
        {portfolioData.skills.map((group) => {
          const Icon = icons[group.icon];
          return <article className="skill-card reveal" key={group.category}><div className="card-heading"><span className="card-icon"><Icon aria-hidden="true" /></span><h3>{group.category}</h3></div><ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>;
        })}
      </div>
    </section>
  );
}