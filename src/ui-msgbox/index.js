import uiDialog from '../ui-dialog/';



export default class uiMsgBox extends uiDialog {

	constructor () {
		super();

	}

	static get is () { return 'ui-messagebox'; }


	onClosed () {
		super.onClosed();
		this.remove();
	}

}
