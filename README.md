# 微信小程序转支付宝小程序示例

提供从微信官方 demo 转支付宝小程序的模板参考

## 步骤

1. 安装依赖

```
npm run init:convert
```

2. 微信端`npm 构建`
3. 全局安装 cli

```
npm i -g wx-convert
```

4. 执行

```sh
wx-convert aplugin  # `将生成支付宝项目到dist/aprogram`
```

## 个人项目使用

1. 拷贝 convert.config.js 到项目根目录
2. clone [convert 项目](https://github.com/wyyxdgm/convert.git) 到当前项目下

```bash
# cd my/wx/project
git clone https://github.com/wyyxdgm/convert.git
cd convert && npm inststall # 安装convert脚本依赖
cd -
wx-convert aplugin
```

5. 使用支付宝小程序工具预览 dist 目录下的 aprogram 项目

## 项目关系参考

模板工程 [convert-miniprogram-to-aliminiprogram-template](https://github.com/wyyxdgm/convert-miniprogram-to-aliminiprogram-template) 包含微信官方小程序和 cli 以及 convert 目录解析，用于总体模板工程结构参考
[cli](https://github.com/wyyxdgm/wx-convert) 本工程，cli，用于根据规则转换模板工程
[convert](https://github.com/wyyxdgm/convert) [convert-miniprogram-to-aliminiprogram-template](https://github.com/wyyxdgm/convert-miniprogram-to-aliminiprogram-template)内部子仓库，包含 convert 规则，用于迭代代码转换规则，可自定义扩展

## TODO

文档和案例完善中

## 贡献

如果你有 bug 反馈或其他任何建议，欢迎提 issue 给我们。
