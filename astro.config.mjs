import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkEmoji from 'remark-emoji';
import rehypeExternalLinks from 'rehype-external-links';

import cloudflare from "@astrojs/cloudflare";
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
  site: 'https://koioto.net',
  markdown: {
    processor: unified({
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
    }),
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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Koioto' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/kaF5Nc6' },
      ],
      sidebar: [
        {
          label: 'ガイド',
          items: [{autogenerate: { directory: 'guide' }}],
        },
        {
          label: 'ダウンロード',
          items: [{autogenerate: { directory: 'releases' }}],
        },
        {
          label: '機能',
          items: [{autogenerate: { directory: 'features' }}],
        },
        {
          label: '設定',
          items: [{autogenerate: { directory: 'config' }}],
        },
        {
          label: '開発者向け',
          items: [
            {
              label: 'テーマ',
              items: [{autogenerate: { directory: 'theme' }}],
            },
            {
              label: 'プラグイン',
              items: [{autogenerate: { directory: 'plugin' }}],
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});