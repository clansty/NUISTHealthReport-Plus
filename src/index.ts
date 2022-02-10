/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import delay from 'delay';
import doCheckin from './doCheckin';
import timeUtils from './utils/timeUtils';

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
  };
  $('div.bh-btn-default[data-action=showHistory]').after(datePicker, btnCheckin);
  return 0;
})(jQuery);
