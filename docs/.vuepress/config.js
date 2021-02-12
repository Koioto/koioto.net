module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'ja',
      title: 'Koioto',
      description: 'はつ恋のように新しい音を。',
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
  ],
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    nav: [
      { text: 'トップページ', link: '/' },
      { text: 'ガイド', link: '/guide/' },
      { text: 'ダウンロード', link: '/donwload/'},
      { text: '設定', link: '/config/'},
      { text: 'テーマ', link: '/theme/'},
      { text: 'プラグイン', link: '/plugin/'},
      { text: 'Discord', link: 'https://discord.gg/kaF5Nc6' }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    nextLinks: false,
    prevLinks: false,
    logo: '/logo/brand.png',
    smoothScroll: true,
    repo: 'Koioto'
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3]
    }
  },
  plugins: [
        ['@vuepress/google-analytics', {
          ga: 'UA-70020192-7'
    }]
 ]
}