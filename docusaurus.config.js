// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Dev4Ops',
    tagline: 'Dev4Ops by Janno Tjarks',
    url: 'https://dev4ops.tjarks.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'JannoTjarks',
    projectName: 'dev4ops-tjarks-dev',

    i18n: {
        defaultLocale: 'de-DE',
        locales: ['de-DE'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: false,
                blog: {
                    routeBasePath: '/',
                    path: 'blog',
                    blogTitle: "Dev4Ops",
                    blogDescription: "Ein Blog ueber Dev fuer Ops",
                    blogSidebarTitle: "Alle Eintraege",
                    postsPerPage: 10,
                    showReadingTime: true,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} Dev4Ops by Janno Tjarks, Built with Docusaurus.`,
                    },
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: 'Dev4Ops by Janno Tjarks',
                logo: {
                    alt: 'dev4ops.tjarks.dev logo',
                    src: 'img/logo.png',
                },
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Kontakt',
                        items: [
                            {
                                label: 'Xing',
                                href: 'https://www.xing.com/profile/Janno_Tjarks',
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/janno-tjarks',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/JannoTjarks',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Dev4Ops by Janno Tjarks, Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
