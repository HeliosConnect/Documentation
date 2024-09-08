import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const IntegrationLinks: PageLinkProps[] = [
  {
    title: "Why should I integrate Helios connect to my dapp?",
    content:
      "Discover the advantages of running validator nodes on MultiversX.",
    docName: "/docs/integrator/intro",
    icon: "⚡", // Represents power and advantage.ping goo
    disabled: true,
  },
  {
    title: "Requirements",
    content: "What you need to integrate our solution.",
    docName: "/docs/integrator/requirements",
    icon: "📋", // Represents a checklist or requirements.
    disabled: true,
  },
];

const UsagesLinks: PageLinkProps[] = [
  {
    title: "Query our API",
    content:
      "Learn how to query our API to get information about the user personas.",
    docName: "/docs/integrators/api",
    icon: "🖥️", // Represents setting up and running servers.
    disabled: true,
  },
  {
    title: "Smart contracts Queries",
    content:
      "Learn how to directly query our smart contracts to get information about the user personas.",
    docName: "/docs/integrators/smartcontracts",
    icon: "📜", // Represents a document or paper
    disabled: true,
  },
];

export default function Validator(): JSX.Element {
  return (
    <Layout
      title="Integrator"
      description="Learn how to integrate Helios Connect to your business."
    >
      <PageHeader
        title="Integrator"
        description="Learn how to integrate Helios Connect to your business."
      />
      <PageSection title="">
        {IntegrationLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>

      <PageSection title="Usages">
        {UsagesLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
