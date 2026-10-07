let num1 = prompt("Ingrese el primer numero");
num1 = parseInt(num1);
let operacion = prompt("Ingrese la operacion (+, -, *, /)");
let num2 = prompt("Ingrese el segundo numero");
num2 = parseInt(num2);

if (isNaN(num1) || isNaN(num2)) {
    alert("Entrada no valida, debes escribir numeros");
}
else if (operacion == "+") {
    alert("Resultado: " + num1 + " + " + num2 + " = " + (num1 + num2));
}
else if (operacion == "-") {
    alert("Resultado: " + num1 + " - " + num2 + " = " + (num1 - num2));
}
else if (operacion == "*") {
    alert("Resultado: " + num1 + " * " + num2 + " = " + (num1 * num2));
}
else if (operacion == "/") {
    if (num2 == 0) {
        alert("No se puede dividir entre cero");
    }
    else {
        alert("Resultado: " + num1 + " / " + num2 + " = " + (num1 / num2));
    }
}
else {
    alert("Operacion no valida, usa +, -, * o /");
}