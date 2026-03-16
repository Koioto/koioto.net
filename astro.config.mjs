import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkEmoji from 'remark-emoji';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://koioto.net',
  markdown: {
    remarkPlugins: [remarkEmoji],
    rehypePlugins: [
      [
        rehypeExternalLinks,{
          target: '_blank',
          content: {
            type: 'text',
            value: ' ⧉'
          },
        }
      ]
    ],
  },
  integrations: [
    starlight({
      title: 'Koioto',
      description: 'はつ恋のように新しい音を――The most modern taiko chart player.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      logo: {
        src: './src/assets/logo/brand.png',
      },
      favicon: '/favicon.ico',
      social: {
        github: 'https://github.com/Koioto',
        discord: 'https://discord.gg/kaF5Nc6',
      },
      sidebar: [
        {
          label: 'ガイド',
          autogenerate: { directory: 'guide' },
        },
        {
          label: 'ダウンロード',
          autogenerate: { directory: 'releases' },
        },
        {
          label: '機能',
          autogenerate: { directory: 'features' },
        },
        {
          label: '設定',
          autogenerate: { directory: 'config' },
        },
        {
          label: '開発者向け',
          items: [
            {
              label: 'テーマ',
              autogenerate: { directory: 'theme' },
            },
            {
              label: 'プラグイン',
              autogenerate: { directory: 'plugin' },
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
