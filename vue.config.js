module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
  devServer: {
    proxy: {
      "/oauth2.0": {
        target: "https://nid.naver.com/",
        changeOrigin: true,
      },
      "/v1": {
        target: "https://openapi.naver.com/",
        changeOrigin: true,
      },
    },
  },
  // configureWebpack: {
  //   plugins: [
  //     new webpack.DefinePlugin({
  //       'process.env': {
  //         VUE_APP_KAKAO_MAP_API_KEY: JSON.stringify(process.env.VUE_APP_KAKAO_MAP_API_KEY)
  //       }
  //     })
  //   ]
  // }
};
