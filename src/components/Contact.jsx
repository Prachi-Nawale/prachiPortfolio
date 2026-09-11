import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { portfolioData } from "../data/data";
import { SectionHeading } from "./SectionHeading";

const initialForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (!form.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!form.message.trim()) nextErrors.message = "Please write a message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setStatus("Please review the highlighted fields."); return; }
    const body = `Hello Prachi,\n\n${form.message.trim()}\n\nFrom: ${form.name.trim()} (${form.email.trim()})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(body)}`;
    setStatus("Your email application should open with the message ready to send.");
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  return (
    <section id="contact" className="page-section contact-section" aria-labelledby="contact-title">
      <SectionHeading number="06" eyebrow="Contact" title="Let’s build something useful." description="I’m open to graduate roles, internships, and conversations about software development and quality engineering." />
      <div className="contact-grid">
        <div className="contact-details reveal">
          <h3>Start a conversation</h3><p>Have a role, project, or opportunity in mind? Send me a message and I’ll respond as soon as possible.</p>
          <address>
            <a href={`mailto:${personal.email}`}><Mail aria-hidden="true" /><span><small>Email</small>{personal.email}</span></a>
            <div><Phone aria-hidden="true" /><span><small>Phone</small>{personal.phone}</span></div>
            <div><MapPin aria-hidden="true" /><span><small>Location</small>{personal.location}</span></div>
          </address>
          <div className="social-row"><a href={personal.socials.github} aria-label="Prachi's GitHub profile"><Github aria-hidden="true" /></a><a href={personal.socials.linkedin} aria-label="Prachi's LinkedIn profile"><Linkedin aria-hidden="true" /></a></div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-row"><Field label="Name" name="name" value={form.name} error={errors.name} onChange={updateField} autoComplete="name" /><Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={updateField} autoComplete="email" /></div>
          <Field label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={updateField} />
          <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="6" maxLength="1200" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message ? <span id="message-error" className="field-error">{errors.message}</span> : null}</div>
          <button className="button button-primary submit-button" type="submit"><Send aria-hidden="true" /> Open Email App</button>
          <p className="form-note">This form uses your default email application. No information is stored.</p>
          <p className="form-status" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, error, onChange, autoComplete }) {
  return <div className="field"><label htmlFor={name}>{label}</label><input id={name} name={name} type={type} maxLength="120" value={value} onChange={onChange} autoComplete={autoComplete} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />{error ? <span id={`${name}-error`} className="field-error">{error}</span> : null}</div>;
}