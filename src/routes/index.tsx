import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prachi Satish Nawale | Software Developer & QA Engineer" },
      { name: "description", content: "Portfolio of Prachi Satish Nawale, an Information Technology student and aspiring software developer and QA engineer skilled in Java, React, testing, and databases." },
      { property: "og:title", content: "Prachi Satish Nawale | Software Developer & QA Engineer" },
      { property: "og:description", content: "Explore Prachi's software projects, technical skills, experience, and certifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Prachi Satish Nawale portfolio"
      src="/portfolio.html"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
