require('./index.css');
require('../components/month-picker');
require('../components/year-picker');

import { $ } from '../core';

const today = new Date();
let el, btnToday, monthPicker, yearPicker, currentDate;


//TODO: move to "core"
const format = d => d.toISOString().substr(0, 10);	// yyyy-mm-dd
const isSameDay = (d1, d2) => format(d1) === format(d2);



function goTo (day = today) {
	currentDate = day;
	monthPicker[0].value = day.getMonth() + 1;
	yearPicker[0].value = day.getFullYear();
	el.toggleClass('is-today', isSameDay(day, today));
}


function onMonthPickerChange (e) {
	const day = new Date(currentDate);
	day.setMonth(e.detail.value - 1);
	goTo(day);
}

function onYearPickerChange (e) {
	const day = new Date(currentDate);
	day.setYear(e.detail.value);
	goTo(day);
}




function init () {
	el = $('header');
	btnToday = el.find('.btn-today');
	monthPicker = el.find('month-picker');
	yearPicker = el.find('year-picker');

	btnToday.on('click', () => goTo());
	monthPicker.on('change', onMonthPickerChange);
	yearPicker.on('change', onYearPickerChange);

	goTo();
}


export {
	init
};
