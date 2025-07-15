import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import * as path from 'path'

import react from '@astrojs/react'

const defaultLocale = 'ru'
const locales = ['en', 'ru']

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
    playformCompress({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
  ],
  prefetch: {
    defaultStrategy: 'hover',
  },

  // Vite config
  vite: {
    server: {
      watch: {
        // For hot reload on server components
        usePolling: true,
      },
      host: true,
    },
    resolve: {
      alias: {
        '@pages': path.resolve('src/pages'),
        '@layouts': path.resolve('src/layouts'),
        '@sections': path.resolve('src/components/sections'),
        '@ui': path.resolve('src/components/ui'),
        '@assets': path.resolve('src/assets'),
      },
    },
    plugins: [tailwindcss()],
    publicDir: 'public',
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.svg'],
  },
})
