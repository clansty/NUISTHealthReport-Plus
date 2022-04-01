/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import delay from 'delay';
import doCheckin from './doCheckin';
import timeUtils from './utils/timeUtils';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(async ($) => {
  while (!$('div.bh-btn-default[data-action=showHistory]').length) {
    await delay(500);
  }
  delay(1000);
  const datePicker = document.createElement('input');
  datePicker.style.marginLeft = '4px';
  datePicker.type = 'datetime-local';
  datePicker.value = timeUtils.getyyyyMMddHHmmss(new Date()).replace(' ', 'T');
  const btnCheckin = document.createElement('div');
  btnCheckin.className = 'bh-btn bh-btn-primary';
  btnCheckin.innerText = '一键签到';
  btnCheckin.onclick = async () => {
    const now = new Date(datePicker.value);
    console.log(now);
    await doCheckin(now);
    alert('签到完毕');
  };
  const btnCheckinUntil = document.createElement('div');
  btnCheckinUntil.className = 'bh-btn bh-btn-primary';
  btnCheckinUntil.innerText = '从今天签到到这天';
  btnCheckinUntil.onclick = async () => {
    const until = new Date(datePicker.value);
    until.setHours(23, 59, 59, 999);
    const now = new Date();
    while (true) {
      now.setHours(
        getRandomIntInclusive(8, 15),
        getRandomIntInclusive(0, 59),
        getRandomIntInclusive(0, 59),
        0,
      );
      if (now.getTime() > until.getTime()) {
        break;
      }
      await doCheckin(now);
      now.setDate(now.getDate() + 1);
    }
    alert('签到完毕');
  };
  $('div.bh-btn-default[data-action=showHistory]').after(datePicker, btnCheckin, btnCheckinUntil);
  return 0;
})(jQuery);
