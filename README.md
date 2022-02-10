# 南京信息工程大学 每日健康申报

这是一个油猴脚本。以后会有 Node 版本的，稍安勿躁。

使用该脚本前，请先确保你已手动填写过一次健康申报，因为签到内容会根据最近一次签到生成。

## 如何使用

在拥有油猴插件的情况下，点击[此处](https://0w.al/NUISTHealthReport.user.js)即可一键安装。然后，进入[打卡页面](http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/index.do#/healthClock)，页面上将会增加一个日期时间选择框和一键打卡按钮。点击按钮就可以一键完成今天的打卡。你也可以使用日期选择框选择日期并补打或提前打其他日期的卡（不太推荐）。

如果没有安装油猴插件，可以先安装油猴插件（GreaseMonkey / TamperMonkey）。

如果懒得安装油猴插件，也可以打开[打卡页面](http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/index.do#/healthClock)，按 <kbd>F12</kbd>，选择 Console（控制台），然后把[脚本内容](https://0w.al/NUISTHealthReport)**全部**复制，粘贴到控制台并回车。一键打卡按钮将会出现。

## 参与开发

你可以用如下方式进行开发：

```bash
yarn dev # 启动开发服务器
```

开发完后，使用如下方式构建：

```bash
yarn build
```

把 `dist` 里的 `bundle.user.js` 拖到浏览器里面，如果你的浏览器已经安装了油猴插件，那么浏览器接下来会打开一个安装界面，安装即可。

如果懒得安装油猴插件，也可以打开[打卡页面](http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/index.do#/healthClock)，按 <kbd>F12</kbd>，选择 Console（控制台），然后把 `dist/bundle.user.js` 里的东西**全部**复制，粘贴到控制台并回车。
