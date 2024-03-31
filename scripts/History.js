export class BurgerCalculatorHistory {
    constructor() {
        this.id = 0;
        this.history = [];
        this.date = new Date();
    }
    
    addCalculation(burger) {
        this.id++;
        this.history.push({ id: this.id, burger: burger, date: new Date() });
    }

    getHistory() {
        return this.history;
    }
}