module.exports = {
    title: 'Koioto',
    description: 'はつ恋のように新しい音を。',
    theme: 'default-prefers-color-scheme',
    themeConfig: {
      nav: [
        { text: 'トップページ', link: '/' },
        { text: 'ルール', link: '/rule/' },
        { text: 'Discord', link: 'https://discord.gg/kaF5Nc6' }
      ],
      sidebar: [
        '/',
        '/rule/',
        '/env/',
        // '/chart-making/',
        '/theme/',
        '/plugin/'
        // '/config/'
      ],
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
    }
  }