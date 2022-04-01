import IRecord from '../types/IRecord';
import request from './controller/request';
import getTemp from './utils/getTemp';
import getWID from './utils/getWID';
import timeUtils from './utils/timeUtils';

const doCheckin = async (now: Date) => {
  const savedReports = await request.getMyDailyReport();
  const lastReport: IRecord = savedReports.rows[0];
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
};

export default doCheckin;
