import { defineConfig } from '@osdoc-dev/avenger-cli'

export default defineConfig({
  cjs: false,
  esm: {
    type: 'rollup',
    minify: false, // esm 不要走压缩
  },
  runtimeHelpers: true,
  extraExternal: ['react', 'react-dom'],
})
