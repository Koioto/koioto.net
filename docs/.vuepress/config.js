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
    locales: {
      '/': {
        label: '日本語',
        selectText: 'Languages',
        nav: [
          { text: 'トップページ', link: '/' },
          { text: 'ガイド', link: '/guide/' },
          { text: 'ダウンロード', link: '/donwload/'},
          { text: '設定', link: '/config/'},
          { text: 'テーマ', link: '/theme/'},
          { text: 'プラグイン', link: '/plugin/'},
          { text: 'Discord', link: 'https://discord.gg/kaF5Nc6' }
        ],
        sidebar: {
          '/guide/': [
              {
              title: 'ガイド',
              collapsable: false,
              children: [
                '',
                'rule',
                'env'
              ]
            }
          ]
        },
      }
    },
    sidebarDepth: 2,
    nextLinks: true,
    prevLinks: true,
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