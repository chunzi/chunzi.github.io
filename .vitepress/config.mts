import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Chunzi",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "x", link: "https://x.com/chunzi", ariaLabel: "X" },
            {
                icon: "instagram",
                link: "https://www.instagram.com/chunzi",
                ariaLabel: "Instagram",
            },
            {
                icon: "gmail",
                link: "mailto:chunzi@gmail.com",
                ariaLabel: "Gmail",
            },
            {
                icon: "github",
                link: "https://github.com/chunzi",
                ariaLabel: "GitHub",
            },
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/in/chunzi",
                ariaLabel: "LinkedIn",
            },
            {
                icon: "strava",
                link: "https://www.strava.com/athletes/chunzi",
                ariaLabel: "Strava",
            },
        ],
    },
});
