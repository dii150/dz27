

let age = prompt("Скільки вам років?");
let ageNum = parseInt(age);

console.log('Скільки вам років?');
console.log(ageNum)

if (ageNum <= 11) {
    console.log("Ти маленький ще зовсім!");
} else if (ageNum >= 12 && ageNum <= 17) {
    console.log("Ти вже підліток");
} else if (ageNum >= 18 && ageNum <= 59) {
    console.log("Норм, вже можна пити пиво");
} else if (ageNum >= 60) {
    console.log("Ого, вже час переписувати квартиру на онуків");
} else {
    console.log("Ти шось не те написав");
}


let askNumber = prompt("Напиши число від 1 до 9, а я покажу, який там символ");
askNumber = parseInt(askNumber);

console.log("На твоїй цифрі ось такий символ:");
switch (askNumber) {
    case 1: {
        console.log("!");
        break;
    }
    case 2: {
        console.log("@");
        break;
    }
    case 3: {
        console.log("#");
        break;
    }
    case 4: {
        console.log("$");
        break;
    }
    case 5: {
        console.log("%");
        break;
    }
    case 6: {
        console.log("^");
        break;
    }
    case 7: {
        console.log("&");
        break;
    }
    case 8: {
        console.log("*");
        break;
    }
    case 9: {
        console.log("(");
        break;
    }
    case 0: {
        console.log(")");
        break;
    }
    default: {
        console.log("Шо ти написав?");
        break;
    }
}


let positiveNumbers = 0;
let negativeNumbers = 0;
let zeros = 0;
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Введи ${i} число:`));

    if (isNaN(num)) {
        console.log("Шо ти пишеш?");
        i--;
    } else {
        if (num > 0) {
            positiveNumbers++;
        } else if (num < 0) {
            negativeNumbers++;
        } else {
            zeros++;
        }

        if (num % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
}

console.log(`Кількість додатніх чисел: ${positiveNumbers}`);
console.log(`Кількість від'ємних чисел: ${negativeNumbers}`);
console.log(`Кількість нулів: ${zeros}`);
console.log(`Кількість парних чисел: ${evenNumbers}`);
console.log(`Кількість непарних чисел: ${oddNumbers}`);



let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let i = 0;

do {
    alert(`${days[i]}. Хочеш побачити наступний день?`);
    i++;
    if (i === days.length) {
        i = 0;
    }
} while (confirm("Хочеш ще?"));

