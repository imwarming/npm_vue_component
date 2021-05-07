// module.exports = {
//     pages: {
//       index: {
//         // 修改入口
//         entry: 'examples/main.js',
//         template: 'public/index.html',
//         filename: 'index.html'
//       }
//     },
//     chainWebpack: config => {
//         config.module
//           .rule('js')
//           .include
//             .add('/packages')
//             .end()
//           .use('babel')
//             .loader('babel-loader')
//             .tap(options => {
//               return options
//           })
//      }
// }
const devConfig = require('./config/config.dev');
const buildConfig = require('./config/config.build');
module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig;