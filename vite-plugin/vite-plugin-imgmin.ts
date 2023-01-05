import viteImagemin from 'vite-plugin-imagemin'

export default () => {
  return viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    webp: {
      quality: 7,
    },
    mozjpeg: {
      quality: 7,
    },
    pngquant: {
      quality: [0.7, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeEmptyAttrs: false,
        },
      ],
    },
  })
}
