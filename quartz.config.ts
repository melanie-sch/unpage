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
    pageTitleSuffix: " - Mel's un-page",
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
        header: "Lexend",
        body: "Rubik",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfcf7",
          lightgray: "#d1cfc1",
          gray: "#afac9d",
          darkgray: "#1f110a",
          dark: "#130b07",
          secondary: "#598b0e",
          tertiary: "#465606",
          highlight: "#9ea88f26",
          textHighlight: "#ffe13887",
        },
        darkMode: {
          light: "#1b1d1c",
          lightgray: "#484c4a",
          gray: "#606663",
          darkgray: "#edeeee",
          dark: "#f3f4f4",
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
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
