import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '使用说明', link: '/markdown-examples' },
          { text: '打开网站', link: 'https://api.aigc369.com/' }
        ]
      }
    ],


  }
})
