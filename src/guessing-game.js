class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.game = Math.round((this.min + this.max) / 2);
        return this.game;
    }

    lower() {
        this.max = this.game;
    }

    greater() {
        this.min = this.game;
    }
}

module.exports = GuessingGame;
