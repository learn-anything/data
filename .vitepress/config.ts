import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"

export default defineConfig({
  title: "Learn Anything Docs",
  description: "",
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: generateSidebar({
      documentRootPath: "./",
      excludeFolders: ["data", "brand"],
      useTitleFromFileHeading: true,
      rootGroupText: "",
      useTitleFromFrontmatter: true,
      convertSameNameSubFileToGroupIndexPage: true,
      folderLinkNotIncludesFileName: true,
    }),

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/learn-anything/learn-anything.xyz",
      },
    ],

    search: {
      provider: "local",
    },
  },
})