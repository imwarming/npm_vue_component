# vue-component-npm-upload

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 前提

```
1.你至少得用会 vue
2.简单的封装过一些组件
```

### 项目准备

```
1.创建一个vue的项目（可直接使用vue-cli脚手架直接搭建）
2.修改src目录为examples
3.新建packages文件夹----用来存放编写的vue组件
4.vue.config.js----请参考config文件
```
此时项目结构为 [Image text](https://github.com/imwarming/npm_vue_component/blob/master/README_img/1.jpg)
### 组件的编写

```
1.按照正常的vue组件编写就可以了
2.重新编译打包命令----直接看config.build.js文件
```

### 组件引用
```
1. 按需引入
main.js
// import vdButton from '../lib/vdButton'
// Vue.use(vdButton)
2.导入组件库
import votreDieu from '../packages'
// 注册组件库
Vue.use( votreDieu )
3. 接下来你就可以在.vue文件中使用<vd-button></vd-button>组件了
```

### 上传准备

```
1.注册npm账号
2.命令行输入 npm login  
3.按提示输入你的账号密码
4.登录成功之后输入 npm publish
5.tips：执行npm publish时，若想再次提交，需要修改package.json的version
```
