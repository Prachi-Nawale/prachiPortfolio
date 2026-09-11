export function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span className="section-number" aria-hidden="true">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </div>
  );
}