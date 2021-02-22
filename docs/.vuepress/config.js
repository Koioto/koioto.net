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
          { text: '機能', link: '/features/'},
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
                'env',
                'breakfast',
                'manage-song',
                'how2play',
                'help'
              ]
            }
          ],
          '/features/': [
            {
              title: '機能',
              collapsable: false,
              children: [
                '',
                'screenshot',
                'measure-move',
                'song-folder',
                'hotreload',
                'playing-options'
              ]
            }
          ],
          '/config/': [
            {
              title: '設定',
              collapsable: false,
              children: [
                '',
                'settings-json',
                'soundmode'
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