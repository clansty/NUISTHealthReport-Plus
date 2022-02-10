/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import delay from 'delay';
import IRecord from '../types/IRecord';
import request from './controller/request';
import getTemp from './utils/getTemp';
import getWID from './utils/getWID';
import timeUtils from './utils/timeUtils';

(async ($) => {
  while (!$('div.bh-btn-default[data-action=showHistory]').length) {
    await delay(500);
  }
  delay(1000);
  const btn = document.createElement('div');
  btn.className = 'bh-btn bh-btn-primary';
  btn.innerText = '一键签到（今日）';
  $('div.bh-btn-default[data-action=showHistory]').after(btn);
  btn.onclick = async () => {
    const savedReports = await request.getMyDailyReport();
    const lastReport: IRecord = savedReports.rows[0];
    const now = new Date();
    console.log(savedReports);
    const WID = getWID(lastReport.USER_ID, now);
    console.log(WID === lastReport.WID);
    const time = timeUtils.getyyyyMMddHHmmss(now);
    const date = timeUtils.getyyyyMMdd(now);
    const reportToSend: IRecord = {
      ...lastReport,
      CREATED_AT: time,
      CZRQ: time,
      FILL_TIME: time,
      NEED_CHECKIN_DATE: date,
      WID,
      TODAY_TEMPERATURE: getTemp().toString(),
    };
    console.log(reportToSend);
    // 第一次（创建）时会强制设置日期，所以再来一次覆盖就好
    await request.HealthDailyInfoSave(reportToSend);
    const res = await request.HealthDailyInfoSave(reportToSend);
    console.log(res);
    console.log('签到完毕');
    alert('签到完毕');
  };
  return 0;
})(jQuery);
