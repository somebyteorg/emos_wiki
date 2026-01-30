import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'emos wiki',
  description: 'emos wiki',
  srcDir: './docs',
  lang: 'zh-CN',
  base: '/',
  outDir: './dist/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://emos.best/favicon.svg',
    search: {
      provider: 'local',
    },
    nav: [{ text: '主页', link: 'https://emos.best/' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/somebyteorg/emos_home' }],
    editLink: {
      pattern: 'https://github.com/somebyteorg/emos_wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          {
            text: '开始',
            link: '/introduction/start',
          },
          {
            text: '入群须知',
            link: '/introduction/join_group',
          },
          {
            text: '兼容性列表',
            link: '/introduction/compatibility',
          },
        ],
      },
      {
        text: '赞助榜',
        link: '/sponsor',
      },
      {
        text: '反代',
        link: '/proxy',
      },
      {
        text: '工具',
        link: '/tool',
      },
      {
        text: 'api',
        collapsed: true,
        items: [
          {
            text: '使用',
            link: '/api/use',
          },
          {
            text: '连接',
            link: '/api/link',
          },
          {
            text: '上传相关',
            link: '/api/upload',
          },
        ],
      },
    ],
  },
})
