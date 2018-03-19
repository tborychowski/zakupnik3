require('./index.css');
require('../components/month-picker');
require('../components/year-picker');

import {$} from '../core';

const today = new Date();
let el, btnToday, monthPicker, yearPicker;

const isSameDay = (d1, d2) => (Math.abs(d1 - d2) < 86400);



function goTo (day = today) {
	monthPicker[0].value = day.getMonth() + 1;
	yearPicker[0].value = day.getFullYear();
	btnToday.toggleClass('active', isSameDay(day, today));
}


function onTodayBtnClick () {
	goTo();
}

function onMonthPickerChange (e) {
	const day = new Date();
	day.setMonth(e.detail.value - 1);
	goTo(day);
}

function onYearPickerChange (e) {
	const day = new Date();
	day.setYear(e.detail.value);
	goTo(day);
}




function init () {
	el = $('header');
	btnToday = el.find('.btn-today');
	monthPicker = el.find('month-picker');
	yearPicker = el.find('year-picker');

	btnToday.on('click', onTodayBtnClick);
	monthPicker.on('change', onMonthPickerChange);
	yearPicker.on('change', onYearPickerChange);

	goTo();
}


export {
	init
};
