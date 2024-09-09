import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Helios Connect - Documentation",
  tagline: "Complete documentation about the Helios Connect Project",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.heliosconnect.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "Helios Staking",
  projectName: "heliosconnect-docs",

  onBrokenLinks: "warn", //"throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: "support_us",
      content:
        'Connect to our Dapp: <a target="_blank" rel="noopener noreferrer" href="https://heliosconnect.net">Mainnet</a> or <a target="_blank" rel="noopener noreferrer" href="https://devnet.heliosconnect.net">Devnet</a>',
      backgroundColor: "#00FFFF",
      textColor: "#091E42",
      isCloseable: false,
    },
    // Replace with your project's social card
    navbar: {
      logo: {
        alt: "Helios Connect",
        src: "img/logo.svg",
        href: "/",
      },

      items: [
        {
          href: "/Concepts",
          label: "Concepts",
        },
        {
          href: "/Contributors",
          label: "Become a contributor",
        },
        {
          href: "/Usermanual",
          label: "Usermanual",
        },
        {
          href: "/Integration",
          label: "Integration",
        },
        {
          href: "https://github.com/Helios-collabathon",
          label: "GitHub",
          position: "right",
        },
      ],
      
    },
    colorMode: {
      // Disable the light/dark mode switch and force dark mode
      defaultMode: "dark",
      disableSwitch: true,
    },
    stylesheets: ["src/css/custom.css"],
    footer: {
      style: "light",
      copyright: `Made with ❤️ by a lot of amazing people.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
