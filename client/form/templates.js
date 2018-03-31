
function getOptionHtml (opt) {
	return `<option value="${opt.id}">${opt.name}</option>`;
}

function getGroupHtml (grp) {
	if (!grp.items) return '';
	const options = grp.items.map(getOptionHtml).join('');
	return `<optgroup label="${grp.name}">${options}</optgroup>`;
}


function getButton (idx) {
	return idx === 0 ?
		'<button type="button" title="Split" class="btn-split"></button>' :
		'<button type="button" title="Remove" class="btn-unsplit"></button>';
}


function getOptions (categories) {
	return categories.map(getGroupHtml).join('');
}


function row (categories, idx = 0, description = '') {
	return `<div class="form-row">
		<input type="hidden" name="id">
		<select name="category_id" class="category">${getOptions(categories)}</select>
  		<input name="description" class="description" placeholder="description" value="${description}">
		<input name="amount" class="amount" placeholder="0.00">
		${getButton(idx)}
	</div>`;
}



function form () {
	return `<form class="form">
		<div class="subforms"></div>
		<div class="form-row form-row-repeat">
			<label>Repeat every month, for </label>
			<input class="repeater" min="1" max="12" name="repeat" type="number" value="1">
			<label> months</label>
		</div>
		<div class="form-row form-row-buttons">
			<button type="button" class="danger btn-remove">Remove</button>
			<div class="flex-filler"></div>
			<button type="button" class="btn-cancel">Cancel</button>
			<button type="submit" class="success btn-save">Save</button>
			<button type="submit" class="success btn-add">Add</button>
		</div>
	</form>`;
}



export default {
	form,
	row,
};
