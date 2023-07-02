var firstName = "Ада";
var lastName = "Лавлейс";
document.write("Здравствуйте, " + firstName + " " + lastName + "!");
console.log("Здравствуйте, " + firstName + " " + lastName + "!");

document.write("<br>"); 

var number1 = 6;
var number2 = 9;

if (number1 === number2) {
    console.log("Числа равны.");
} else if (number1 > number2) {
    console.log("Первое число больше.");
} else {
    console.log("Второе число больше.");
}

document.write("<br>"); 

var color = "Желтый";

switch (color) {
    case "Зеленый":
    console.log("Идти.");
        break;
    case "Желтый":
    console.log("Ждать.");
        break;
    case "Красный":
    console.log("Стоять.");
        break;
}

const stars1 = 1;
let price1;

if (stars1 === 1 || stars1 === 2) {
  price1 = 20;
} else if (stars1 === 3 || stars1 === 4) {
  price1 = 30;
} else if (stars1 === 5) {
  price1 = 120;
} else {
  console.log("Такого количества звёзд нет.");
}

console.log("Стоимость отеля с " + stars1 + " звездами: $" + price1 + ".");