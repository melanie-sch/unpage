import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mel's un-page",
    pageTitleSuffix: " | Mel's un-page",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://melanie-sch.github.io/unpage",
    ignorePatterns: ["private", "templates", ".obsidian", ".trash"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lexend", // Golos Text, Lexend
        body: "Rubik", // Inter, Noto Sans
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "hsl(20, 52%, 98%)", // #fbf9f8
          lightgray: "hsl(20, 15%, 79%)", // #d4c5bf
          gray: "hsl(20, 13%, 58%)", // #a48d84
          darkgray: "hsl(20, 52%, 8%)", // #462111
          dark: "hsl(20, 49%, 5%)", // #26150d
          secondary: "#608e1a", // #9d3925
          tertiary: "#526407", //ca614c
          highlight: "#9ea88f26", // #8f9fa926
          textHighlight: "#ffe13887",
        },
        darkMode: {
          light: "#1b1d1c", // #1a1d1d
          lightgray: "#393c3b", // #3f4a49
          gray: "#8b928f", // #849398
          darkgray: "#edeeee", // #dfeae9
          dark: "#f3f4f4", // #e5f0ed
          secondary: "#5ebfd2",
          tertiary: "#83e3dd",
          highlight: "#8f9fa926",
          textHighlight: "#b89c0070",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ 
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true,
       }),
      Plugin.Description(),
      // Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
