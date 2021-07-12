import { defineConfig } from 'dumi'
export default defineConfig({
  title: ' ',
  mode: 'site',
  resolve: {
    includes: ['./website'],
    previewLangs: [],
  },
  locales: [['zh-CN', '中文']],
  logo: 'https://static.ahwgs.cn/gantt_logo.png',
  favicon: './website/favicon.ico',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/ahwgs/react-gantt',
    },
  ],
  hash: true,
  history: {
    type: 'hash',
  },
  base: '/react-gantt',
  publicPath: '/react-gantt/',
  outputPath: './dist-website',
})
