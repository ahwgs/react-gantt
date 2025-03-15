import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'rc-gantt',
    socialLinks: {
      github: 'https://github.com/ahwgs/react-gantt',
    },
  },
  resolve: {
    docDirs: ['./website'],
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  outputPath: './dist-website',
  base: '/react-gantt/',
  publicPath: '/react-gantt/',
});
