export class Burger {
    constructor() {
      this.meat = 0;
      this.carrot = 0;
      this.onion = 0;
      this.parsley = 0;
      this.apple = 0;
      this.breader = 0;
      this.saltGarlic = 0;
      this.egg = 0;
      this.groundOnion = 0;
      this.emulsifier = 0;
      this.papigel = 0;
      this.marinator = 0;
      this.water = 0;
    }
  
    setMeat(kgMeat) {
      this.meat = kgMeat;
      this.calculateIngredients(kgMeat);
    }
  
    calculateIngredients(kgMeat) {
      // Calcula la cantidad de ingredientes necesarios para la cantidad de kilogramos de carne dada
      this.meat = kgMeat; // Cantidad de carne especificada
      this.carrot = kgMeat * 0.15; // 150 gramos de zanahoria por cada kilogramo de carne
      this.onion = kgMeat * 0.1; // 100 gramos de cebolla por cada kilogramo de carne
      this.parsley = kgMeat * 0.04; // 40 gramos de perejil por cada kilogramo de carne
      this.apple = kgMeat * 0.1; // 0.1 manzana por cada kilogramo de carne
      this.breader = kgMeat * 0.016; // 16 gramos de empanizador por cada kilogramo de carne
      this.saltGarlic = kgMeat * 0.01; // 10 gramos de sal con ajo por cada kilogramo de carne
      this.egg = kgMeat * 1.1; // 1 huevo por cada kilogramo de carne
      this.groundOnion = kgMeat * 0.002; // 2 gramos de cebolla molida por cada kilogramo de carne
      this.emulsifier = kgMeat * 0.008; // 8 gramos de embulsificante por cada kilogramo de carne
      this.papigel = kgMeat * 0.006; // 6 gramos de Papigel por cada kilogramo de carne
      this.marinator = kgMeat * 0.015; // 15 gramos de marinador por cada kilogramo de carne
      this.water = kgMeat * 0.05; // 100 ml de agua por cada kilogramo de carne
  
      // Redondear a 2 decimales
      this.carrot = this.carrot.toFixed(3);
      this.onion = this.onion.toFixed(3);
      this.parsley = this.parsley.toFixed(3);
      this.apple = this.apple.toFixed(0);
      this.breader = this.breader.toFixed(3);
      this.saltGarlic = this.saltGarlic.toFixed(3);
      this.egg = this.egg.toFixed(0);
      this.groundOnion = this.groundOnion.toFixed(3);
      this.emulsifier = this.emulsifier.toFixed(3);
      this.papigel = this.papigel.toFixed(3);
      this.marinator = this.marinator.toFixed(3);
      this.water = this.water.toFixed(3);
    }
  
    getIngredients() {
      // Devuelve un objeto con los ingredientes calculados
      return {
        Carne: `${this.meat} kg`,
        Zanahoria: `${this.carrot} kg`,
        Cebolla: `${this.onion} kg`,
        Perejil: `${this.parsley} kg`,
        Manzana: `${this.apple} pz`,
        Empanizador: `${this.breader} kg`,
        "Sal con Ajo": `${this.saltGarlic} kg`,
        Huevo: `${this.egg} pz`,
        "Cebolla Molida": `${this.groundOnion} kg`,
        Embulsificante: `${this.emulsifier} kg`,
        Papigel: `${this.papigel} kg`,
        Marinador: `${this.marinator} kg`,
        Agua: `${this.water} L aprox.`,
      };
    }
  }