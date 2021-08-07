# NUISTHealthReport-Serverless

南京信息工程大学 每日健康申报 Serverless 版

基于 GitHub Actions，每天自动填写健康申报

## 使用说明：

1. 首先 Fork 本仓库
2. 进入自己仓库的 Settings - Secrets 页面，创建两个 Secrets：
   - `USERNAME`：登录教务系统的学号
   - `PASSWORD`：教务系统的密码
3. （可选）如需完成情况 Telegram 推送功能，创建两个额外 Secrets：
   - `TELEGRAM_TO`：接受推送消息的 Telegram Chat ID
   - `TELEGRAM_TOKEN`：通过 [@BotFather](https://t.me/BotFather) 获得的 Bot Token
4. 进入 Actions 页面，手动执行一次 Action

然后每天的北京时间早上 9 点就会自动完成健康申报

