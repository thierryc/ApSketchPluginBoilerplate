/* eslint-disable */
const webpack = require('webpack');

module.exports = config => {
  config.devtool = 'source-map';
  config.module.rules.push({
    test: /\.(html)$/,
    use: [
      {
        loader: '@skpm/extract-loader',
      },
      {
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'link:href'],
          interpolate: true,
        },
      },
    ],
  })

  config.module.rules.push({
    test: /index.scss$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "sass-loader",
      },
    ],
  })

  config.module.rules.push({
    test: /components.*\.scss$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          modules: true,
        }
      },
      {
        loader: "sass-loader",
      },
    ],
  })

  config.module.rules.push({
    test: /components.*\.(png|jpg|svg)$/,
    use: [
      {
        loader: "url-loader",
        options: { limit: 10000 }
      }
    ],
  })

}
