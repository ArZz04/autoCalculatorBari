import { BurgerCalculatorHistory } from './History.js';
import { Burger } from './Burger.js';
import { getModalDiv } from './variables.js';

const calculationHistory = new BurgerCalculatorHistory();

let result = '';
  
// Define la función para calcular
function calculate() {
    // Crea una instancia de la clase Burger
    const burger = new Burger();
    // Obtiene los valores de los campos de entrada
    const quantity = document.getElementById("meat").value;
    burger.setMeat(quantity);
    calculationHistory.addCalculation(burger);
    result = burger.getIngredients();
    const historyList = calculationHistory.getHistory();
    console.log(result);
    console.log(historyList);
}

function openModal(event) {
    event.preventDefault();

    const modalContainer = document.querySelector('#modal-box');
    modalContainer.innerHTML = getModalDiv(result);
}

function closeModal() {
    const modalContainer = document.querySelector('#modal-box');
    modalContainer.innerHTML = '';
}

// Verifica los botones cuando se hace clic en cualquier parte del documento
document.addEventListener('click', () => {
    const btnCloseModal = document.getElementById("btn-close-modal");

    if (btnCloseModal) {
        btnCloseModal.addEventListener("click", () => closeModal());
    }
});

const btnAction = document.getElementById("btn-calculate");

if (btnAction) {
    btnAction.addEventListener("click", () => {
        calculate();
        openModal(event);
    });
}
