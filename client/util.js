function formatNumber (num) {
	num = Math.round(0 + num * 100) / 100;
	return num.toLocaleString('en-GB', { minimumFractionDigits: 2 });
}


function timeAgo (dateStr) {
	if (!dateStr) return '';
	const date = new Date(dateStr);
	const now = new Date(new Date().toISOString().substr(0, 10));
	const diff = (now - date) / 1000;
	if  (diff < 0) return dateStr;
	// less than a day
	if (diff < 86400) return 'today';
	// less than 2 days ago
	if (diff < 172800) return 'yesterday';
	// up until a week
	if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
	// otherwise
	return dateStr;
}


export {
	formatNumber,
	timeAgo,
};
