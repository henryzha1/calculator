// business logic
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
  
// user interface logic 
const num1 = parseInt(prompt("Enter a number:"));
const num2 = parseInt(prompt("Enter another number:"));

window.alert("The addition of your numbers equals " + add(num1,num2) + ". The subtraction of your numbers equals " + subtract(num1,num2) + ". The multiplication of your numbers equals " + multiply(num1,num2) + ". The division of your numbers equals " + divide(num1,num2) + ".");
window.alert(num1 + " + " + num2 + " = " + add(num1,num2) + ", " + num1 + " - " + num2 + " = " +  + subtract(num1,num2) + ", " + num1 + " * " + num2 + " = " + multiply(num1,num2) + ", and " + num1 + " / " + num2 + " = " + divide(num1,num2) + ".");