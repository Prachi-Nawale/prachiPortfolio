import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { portfolioData } from "../data/data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { about, personal } = portfolioData;
  return (
    <section id="about" className="page-section" aria-labelledby="about-title">
      <SectionHeading number="01" eyebrow="About me" title={about.title} />
      <div className="about-grid">
        <div className="about-copy reveal">
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="opportunity-list"><BriefcaseBusiness aria-hidden="true" /><div><strong>Open to opportunities</strong><p>{about.opportunities.join(" · ")}</p></div></div>
        </div>
        <div className="profile-facts reveal">
          <div className="fact-card wide"><GraduationCap aria-hidden="true" /><div><span>Education</span><strong>Amrutvahini College of Engineering</strong><small>B.E. Information Technology · Nov 2022 – Present</small></div></div>
          {about.stats.map((stat) => <div className="fact-card" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          <div className="fact-card wide"><MapPin aria-hidden="true" /><div><span>Based in</span><strong>{personal.location}</strong></div></div>
        </div>
      </div>
    </section>
  );
}