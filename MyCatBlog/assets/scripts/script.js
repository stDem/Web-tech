let Name = prompt("Введите имя кота");//Основное задание 1.
switch(Name) {                        //Основное задание 2.
    case "кот": {
        alert("Да, это кот!!");
        break;
    }
    case "не кот": {
        alert("Это действительно не кот..");
        break;
    }
    case "кошка": {
        alert("Кошка! Это даже лучше");
        break;
    }
    default: {
        alert("это не кот...");
        break;
    }
}
function ChangedElement() {             //Доп задание 1.
    let elem = document.getElementById("el"); 
    console.log(elem);
    elem.classList.toggle("change");
    elem.textContent = elem.textContent == "Конечно этот кот шикарен!" ? "Без вопросов" : "Конечно этот кот шикарен!";
}
let batt2 = document.getElementById("batt1");
console.log(batt2);
batt2.addEventListener('click', ChangedElement);

function ChangedColorUl() {             //Доп задание 2.
    let elem = document.getElementById("el2"); 
    console.log(elem);
    elem.classList.toggle("change2");
}
let batt3 = document.getElementById("batt2");
console.log(batt3);
batt3.addEventListener('click', ChangedColorUl);
