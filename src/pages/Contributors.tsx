import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";
import React from "react";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "Where to start?",
    content: "Learn how to contribute to the Helios Connect project.",
    docName: "/docs/contributors/intro",
    icon: "🔧", // Represents the tools and standards involved in ESDT.
  },
  {
    title: "Github Organisation",
    content: "Explore the Helios Connect Github organisation and repositories.",
    docName: "/docs/contributors/github-orga",
    icon: "📚", // Represents learning materials and resources.
  },
  {
    title: "Frontend",
    content:
      "Find how you can contribute to the Helios Connect project frontend.",
    docName: "/docs/intro",
    icon: "🖥️", // Represents a computer or software.
  },
  {
    title: "Smart Contracts",
    content:
      "Find how you can contribute to the Helios Connect smart contracts.",
    docName: "/docs/intro",
    icon: "🖥️", // Represents a computer or software.
  },
];

export default function Assets(): JSX.Element {
  return (
    <Layout title="Contributors">
      <PageHeader
        title="Become a contributor"
        subtitle="Learn how to contribute to the Helios Connect project."
      />
      <PageSection title="Core Concepts">
        {CoreConceptsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
