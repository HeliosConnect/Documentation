import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "Introduction",
    content:
      "Discover helios connect and how you can leverage it to create interchain identities.",
    docName: "/docs/intro",
    icon: "🏛️", // Changed to represent a structured and stable architecture.
    disabled: false,
  },
  {
    title: "Technologies",
    content:
      "Learn about the technologies that power Helios Connect and how they work together.",
    docName: "/docs/concepts/technologies",
    icon: "🛠️", // Represents a set of tools and technologies.
  },
  {
    title:"Litepaper",
    content:"Read the Helios Connect Litepaper to understand the project's vision and goals.",
    docName:"/docs/concepts/litepaper",
    icon:"📜", // Represents a document or paper.
  }
];


export default function Concepts(): JSX.Element {
  return (
    <Layout title="Concepts" description="Main Concepts of Helios Connect">
      <PageHeader
        title="Concepts"
        subtitle="Learn the core concepts and guides to get started with Helios Connect."
      />
      <PageSection title="">
        {CoreConceptsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} />
        ))}
      </PageSection>
     
    </Layout>
  );
}
