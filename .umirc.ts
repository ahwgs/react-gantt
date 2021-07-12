import { defineConfig } from 'dumi'
export default defineConfig({
  title: 'rc-gantt',
  mode: 'site',
  resolve: {
    includes: ['./website'],
    previewLangs: [],
  },
  locales: [['zh-CN', '中文']],
  logo: 'https://static.ahwgs.cn/avenger_logo.jpeg',
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
  base: '/rc-gantt',
  publicPath: '/rc-gantt/',
  outputPath: './dist-website',
})
