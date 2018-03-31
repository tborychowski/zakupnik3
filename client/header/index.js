require('./index.css');

import YearPicker from '../year-picker';
import MonthPicker from '../month-picker';
import { $ } from '../core';


const today = new Date();
let el, btnToday, monthPicker, yearPicker, currentDate;


//TODO: move to "core"
const format = d => d.toISOString().substr(0, 7);	// yyyy-mm-dd
const isSameDay = (d1, d2) => format(d1) === format(d2);



function goTo (day = today) {
	currentDate = day;
	el.toggleClass('is-today', isSameDay(day, today));
}

function goToToday () {
	const day = today;
	monthPicker.value = day.getMonth() + 1;
	yearPicker.value = day.getFullYear();
	goTo();
}

function onMonthPickerChange (e) {
	const day = new Date(currentDate);
	day.setMonth(e.data.value - 1, 1);
	yearPicker.value = day.getFullYear();
	goTo(day);
}

function onYearPickerChange (e) {
	const day = new Date(currentDate);
	day.setYear(e.data.value);
	monthPicker.value = day.getMonth() + 1;
	goTo(day);
}




function init () {
	el = $('header');
	btnToday = el.find('.btn-today');
	monthPicker = new MonthPicker('#month-picker');
	yearPicker = new YearPicker('#year-picker');


	btnToday.on('click', goToToday);
	monthPicker.on('change', onMonthPickerChange);
	yearPicker.on('change', onYearPickerChange);

	goTo();
}


export {
	init
};
