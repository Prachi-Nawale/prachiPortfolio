import { ArrowUpRight, Award } from "lucide-react";
import { portfolioData } from "../data/data";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="page-section" aria-labelledby="certifications-title">
      <SectionHeading number="05" eyebrow="Certifications" title="Continuous learning, validated." />
      <div className="certificate-list">
        {portfolioData.certifications.map((certificate, index) => <a className="certificate-item reveal" href={certificate.url} key={certificate.title} aria-label={`View ${certificate.title} certificate`}><span className="certificate-index">0{index + 1}</span><span className="certificate-icon"><Award aria-hidden="true" /></span><span className="certificate-copy"><strong>{certificate.title}</strong><small>{certificate.issuer}</small></span><ArrowUpRight className="certificate-arrow" aria-hidden="true" /></a>)}
      </div>
    </section>
  );
}