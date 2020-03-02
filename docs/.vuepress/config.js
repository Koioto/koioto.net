module.exports = {
    title: 'Koioto',
    description: 'はつ恋のように新しい音を。',
    theme: 'default-prefers-color-scheme',
    themeConfig: {
      nav: [
        { text: 'トップページ', link: '/' },
        { text: 'ルール', link: '/rule/' },
        { text: 'Twitter', link: 'https://twitter.com/koiotonet/' }
      ],
      sidebar: [
        '/',
        '/rule/',
        '/env/',
        '/chart-making/',
        '/theme/',
        '/plugin/',
        '/config/'
      ],
      logo: '/logo/brand.png',
      smoothScroll: true,
      repo: 'Koioto/koioto.net',
    }
  }