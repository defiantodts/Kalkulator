//mngambil element input dari class calculator-screen
const calculatorScreen = document.querySelector(".calculator-screen");

//mengupdate nilai calculatorScreen sesuai nilai tombol yg ditekan
const updateScreen = (number) => {
  calculatorScreen.value = number
}

//mengambil element button dari class number
const numbers = document.querySelectorAll(".number");

//definisi 3 variabel utk menyimpan 2 angka dan 1 operator
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let resultsNum = ''

//membuat function untuk menginput tombol angka
const inputNumber = (number) => {
  if(currentNumber === '0'){
    currentNumber = number
  }else {
    currentNumber += number
  }
}

//menambahkan eventlistener untuk menampilkan nilai setiap tombol angka
numbers.forEach((number) => {
  number.addEventListener("click",(event) => {
    inputNumber(event.target.value);
//mereset number setelah operasi kalkulasi
    afterResult(event.target.value);
    updateScreen(currentNumber);
  });
});

//mengamil element button dari class operator
const operators = document.querySelectorAll(".operator");

//memuat function untuk menginput tomol operator
const inputOperator = (operator) => {
  if(calculationOperator === ''){
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

//menambahkan eventListener untuk menampilkan nilai setiap tombol operator
operators.forEach((operator) => {
  operator.addEventListener("click",(event) => {
    inputOperator(event.target.value);
  });
});

//mengambil element button dari class equal-sign
const equalSign = document.querySelector(".equal-sign");

//membuat function calculate untuk melakukan kalkulasi
const calculate= () => {
  let result ='';
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break;
    default:
    result = "0";
  }
  resultsNum = result;
  calculationOperator = '';
}

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(resultsNum);
});

const afterResult = (number) =>{
  if(resultsNum){
    currentNumber = number
    resultsNum = ""
  }
}

//membuat fungsi clearAll untuk mereset layar
const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
  signPercent = "";
  resultsNum = "";
}

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener('click',(event) =>{
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if(currentNumber.includes('.')){
    return
  }
  currentNumber += dot
}
//memanggil element button dari class percentage
const percent = document.querySelector(".percentage");

percent.addEventListener('click',(event)=>{
  inputPercent(event.target.value);
  updateScreen(currentNumber);
});

const inputPercent = () => {
    currentNumber /= 100;
}
