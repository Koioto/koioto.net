const fs = require('fs');
const path = require('path');

const dir = "./docs/releases/";

const files = fs.readdirSync(dir).map(str => path.basename(str).split('.').slice(0, -1).join('.'));
const releases = [''].concat(files.filter(str => str != "index").reverse());

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
          { text: 'ガイド', link: '/guide/' },
          { text: 'ダウンロード', link: '/releases/'},
          { text: '機能', link: '/features/'},
          { text: '設定', link: '/config/'},
          {
            text: '開発者向け',
            items: [
              { text: 'テーマ', link: '/theme/'},
              { text: 'プラグイン', link: '/plugin/'},
              { text: 'GitHub', link: 'https://github.com/Koioto'}
            ]
          },
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
          '/releases/': [
            {
              title: 'ダウンロード',
              collapsable: false,
              children: releases
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
                'playing-options',
                'log'
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
                'plugins-json',
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
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    }
  },
  plugins: [
        ['@vuepress/google-analytics', {
          ga: 'UA-70020192-7'
    }],
    ['@vuepress/medium-zoom', {
        options: {
          margin: 16,
          background: "#000"
        }
      }
    ]
 ]
}