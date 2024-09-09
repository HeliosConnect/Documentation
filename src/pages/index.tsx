import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

import { PageLinkProps } from "../components/PageLink";
import PathLink from "../components/PathLink";
import styles from "../css/styles.module.css";
import PageHeader from "../layout/Header";

export const PathLinks: PageLinkProps[] = [
  {
    title: "Helios Connect Concepts",
    content:
      "Discover how helios connects works and how you cn leverage it to create interchain identities.",
    docName: "/Concepts",
    icon: "🖥️", // Changed to a more typical computer monitor icon.
  },
  {
    title: "Become a contributor",
    content:
      "Learn how to contribute to the Helios Connect project and become a part of our open source community.",
    docName: "/Contributors",
    icon: "⚙️", // Represents settings or machinery, suitable for backend processes.
  },
  {
    title: "User Guide",
    content:
      "Get started with Helios Connect and learn how to use it to manage your digital identity.",
    docName: "/Usermanual",
    icon: "🏦", // A bank icon to symbolize asset management.
  },
  {
    title: "Integration Guide",
    content:
      "Integrate Helios Connect into your applications and services to enable secure, decentralized identity management.",
    docName: "/Integration",
    icon: "🔍", // A magnifying glass icon to represent observation and insight.
  },
];

export default function Home(): JSX.Element {
  
  return (
    <Layout
      title="Helios Staking Persona Solution"
      description="The first Interchain Identity solution for the entire web3 ecosystem."
    >
      <PageHeader
        title="Helios Staking Persona Solution"
        subtitle="The first Interchain Identity solution for the entire web3 ecosystem."
        style={{ paddingBottom: "40px" }}
      />
      <section className={clsx("container", styles.fullWidthContainer)}>
        {PathLinks.map((props, idx) => (
          <PathLink key={idx} {...props} />
        ))}
      </section>
    </Layout>
  );
}
