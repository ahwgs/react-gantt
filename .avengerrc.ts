import { defineConfig } from '@osdoc-dev/avenger-cli'

export default defineConfig({
  cjs: false,
  esm: {
    type: 'rollup',
    minify: true,
  },
  runtimeHelpers: true,
  extraExternal: ['react', 'react-dom'],
})
