export class PageService {
	private displayText = '';
	private fullText = '';
	private currentIndex = 0;
	private onUpdate: (text: string) => void;

	constructor(text: string, onUpdate: (text: string) => void) {
		this.fullText = text.toUpperCase();
		this.onUpdate = onUpdate;
	}

	start() {
		this.type();
	}

	private type() {
		if (this.currentIndex < this.fullText.length) {
			this.displayText = this.fullText.substring(0, this.currentIndex + 1);
			this.onUpdate(this.displayText);
			this.currentIndex++;
			setTimeout(() => this.type(), 150);
		} else {
			setTimeout(() => this.erase(), 2000);
		}
	}

	private erase() {
		if (this.displayText.length > 0) {
			this.displayText = this.displayText.substring(0, this.displayText.length - 1);
			this.onUpdate(this.displayText);
			setTimeout(() => this.erase(), 100);
		} else {
			this.currentIndex = 0;
			setTimeout(() => this.type(), 1000);
		}
	}

	stop() {
	}
}