import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "Helios Connect User Manual",
    content:
      "Learn how to use the Helios Connect platform to create and manage your interchain identities.",
    docName: "/docs/usermanual/intro",
    icon: "📚", // Represents learning materials and resources.
    disabled: true,
  },
  {
    title: "Personas",
    content:
      "Understand what are personas and how they can be used to manage your identities.",
    docName: "/docs/usermanual/persona",
    icon: "👤", // Represents a person or user.
  },
];


export default function UserManual(): JSX.Element {
  return (
    <Layout
      title="User Manual"
      description="Learn how to use the Helios Connect platform."
    >
      <PageHeader
        title="User Manual"
        subtitle="Learn how to use the Helios Connect platform to create and manage your interchain identities."
        />
      <PageSection title="Core Concepts">
        {CoreConceptsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    
    </Layout>
  );
}
