import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"

export default defineConfig({
  title: "Learn Anything Docs",
  srcExclude: ["**/data/**", "**/brand/**"], // TODO: doesn't work properly
  ignoreDeadLinks: true, // can remove after above line is fixed, is here to make build work
  description:
    "Organize world's knowledge, explore connections and curate learning paths",
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
        link: "https://github.com/learn-anything/docs",
      },
    ],

    search: {
      provider: "local",
    },
  },
})
