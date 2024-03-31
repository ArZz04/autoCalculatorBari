class Burger {
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

class User{
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }

    getName(){
        return this.name;
    }

    getPhone(){
        return this.phone;
    }

}

class Users{
    constructor(){
        this.users = [];
    }
    
    addUser(user){
        this.users.push(user);
    }
    
    getUsers(){
        return this.users;
    }
    
}

class BurgerCalculatorHistory {
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

const calculationHistory = new BurgerCalculatorHistory();

// Define the calcular function
function calculate() {
  const flag = document.getElementById("tflag");

  if (flag != null){
    flag.remove();
  }

  // Obtener los valores de los campos de entrada
  const password = document.getElementById("password").value;
  const quantity = document.getElementById("meat").value;

  // Crear una instancia de la clase Burger
  const burger = new Burger();

  burger.setMeat(quantity);

  calculationHistory.addCalculation(burger);

  const ingredients = burger.getIngredients();
  const historyList = calculationHistory.getHistory();

  const designDiv = `
  <div class="burger-ingredients">
      <div class="flex justify-center gap-16 p-6">
          <ul class="">
              <li><span class="font-semibold">Carne: </span>${ingredients.Carne}</li>
              <li><span class="font-semibold">Zanahoria: </span>${ingredients.Zanahoria}</li>
              <li><span class="font-semibold">Cebolla: </span>${ingredients.Cebolla}</li>
              <li><span class="font-semibold">Perejil: </span>${ingredients.Perejil}</li>
              <li><span class="font-semibold">Manzana: </span>${ingredients.Manzana}</li>
          </ul>
          <ul class="">
              <li><span class="font-semibold">Empanizador: </span>${ingredients.Empanizador}</li>
              <li><span class="font-semibold">Sal con Ajo: </span>${ingredients["Sal con Ajo"]}</li>
              <li><span class="font-semibold">Huevo: </span>${ingredients.Huevo}</li>
              <li><span class="font-semibold">Cebolla Molida: </span>${ingredients["Cebolla Molida"]}</li>
              <li><span class="font-semibold">Embulsificante: </span>${ingredients.Embulsificante}</li>
              <li><span class="font-semibold">Papigel: </span>${ingredients.Papigel}</li>
              <li><span class="font-semibold">Marinador: </span>${ingredients.Marinador}</li>
              <li><span class="font-semibold">Agua: </span>${ingredients.Agua}</li>
          </ul>
      </div>
  </div>`;

  // Ejemplo: Mostrar los valores en el segundo div
  const resultBox = document.getElementById("calculations");
  console.log(historyList);
}
