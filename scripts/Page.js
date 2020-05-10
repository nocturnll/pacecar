const makeChoice = (name, action, getTargetPage) => ({ 
	name,
	action,
	get targetPage() {
		return getTargetPage();
	}
});

export class Page {
	constructor(dialog) {
		this.dialog = dialog;
		this.choices = [];
	}

	addChoice(name, action, getTargetPage) {
		this.choices.push(makeChoice(name, action, getTargetPage));
		return this;
	}
}

Page.dialog = (d) => new Page(d);
