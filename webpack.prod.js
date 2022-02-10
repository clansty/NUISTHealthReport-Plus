const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { TampermonkeyWebpackPlugin } = require('tampermonkey-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new TampermonkeyWebpackPlugin({
      minAlignSpace: 2,
      header: {
        author: 'lixiang810 & Clansty',
        name: ['NUISTHealthReport', ['zh', '南京信息工程大学每日健康申报']],
        version: '0.114.514',
        include: 'http://i.nuist.edu.cn/*',
        icon: 'https://github.githubassets.com/images/icons/emoji/unicode/1f389.png',
        grant: ['unsafeWindow', 'GM_setValue', 'GM_setValue', 'GM_xmlhttpRequest'],
      },
    }),
  ],
});
