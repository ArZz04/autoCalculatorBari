
import { BurgerCalculatorHistory } from './History.js';
import { Burger } from './Burger.js';
import { modalDiv } from './variables.js';

const calculationHistory = new BurgerCalculatorHistory();
  
  // Define the calcular function
function calculate() {
    // Crear una instancia de la clase Burger
    const burger = new Burger();
    // Obtener los valores de los campos de entrada
    const quantity = document.getElementById("meat").value;
  
    burger.setMeat(quantity);
  
    calculationHistory.addCalculation(burger);
  
    const historyList = calculationHistory.getHistory();
  
    console.log(historyList);
}

function openModal(event) {
    event.preventDefault();

    const modalContainer = document.querySelector('#modal-box');
    modalContainer.innerHTML = modalDiv;
}

function closeModal() {
    const modalContainer = document.querySelector('#modal-box');
    modalContainer.innerHTML = '';
}

const btnCloseModal = document.getElementById("btn-close-modal");
if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => {
        closeModal();
    });
}


const btnAction = document.getElementById("btn-calculate");

btnAction.addEventListener("click", () => {
    calculate();
    openModal(event);
});
