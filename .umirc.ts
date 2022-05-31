import { defineConfig } from 'dumi'

import fs from 'fs'
import path from 'path'

const resolveCss = () => {
  const data = fs.readFileSync(path.resolve(__dirname, './website/global.css'), 'utf-8')
  return data.toString()
}

export default defineConfig({
  title: ' ',
  mode: 'site',
  resolve: {
    includes: ['./website'],
    previewLangs: [],
  },
  locales: [['zh-CN', '中文']],
  logo: 'https://static.ahwgs.cn/gantt_logo.png',
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
  // base: '/react-gantt',
  publicPath: '/react-gantt/',
  outputPath: './dist-website',
  styles: [resolveCss()],
})
