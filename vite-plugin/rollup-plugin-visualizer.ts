import { visualizer } from 'rollup-plugin-visualizer'

export default () => {
  return {
    // visualizer({
    //   gzipSize: true,
    //   brotliSize: true,
    //   open: true,
    // }),
    enforce: 'post',
    apply: 'build',
  }
}
