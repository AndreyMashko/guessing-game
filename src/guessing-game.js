class GuessingGame {
    constructor() {
		let min;
		let max;
		let number;
	}

    setRange(min, max) {
		this.min = min;
		this.max = max;
    }

    guess() {
		this.number = Math.ceil((this.min + this.max) / 2);
		return this.number;
    }

    lower() {
		this.setRange(this.min, this.number);
    }

    greater() {
		this.setRange(this.number, this.max);
    }
}

module.exports = GuessingGame;
