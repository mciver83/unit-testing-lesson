class Tick {
    constructor() {
        this.timer = 0;
    }
    tick() {
        this.timer++;
    }
    checkTimer() {
        return this.timer;
    }
}

module.exports = Tick;