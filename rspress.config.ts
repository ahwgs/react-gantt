import { pluginPreview } from '@rspress/plugin-preview'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  // 文档根目录
  base: '/react-gantt/',
  root: 'website',
  outDir: './dist-website',
  logoText: 'rc-gantt',
  lang: 'zh',
  plugins: [pluginPreview()],
  themeConfig: {
    enableAppearanceAnimation: false,
    footer: {
      message: 'Open-source MIT Licensed | Copyright © 2021',
    },
    hideNavbar: 'auto',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/ahwgs/react-gantt',
      },
    ],
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        searchNoResultsText: '未搜索到相关结果',
        searchPlaceholderText: '搜索文档',
        searchSuggestedQueryText: '可更换不同的关键字后重试',
        overview: {
          filterNameText: '过滤',
          filterPlaceholderText: '输入关键词',
          filterNoResultText: '未找到匹配的 API',
        },
      },
      {
        lang: 'en',
        label: 'English',
      },
    ],
  },
})
