// Повідомлення про бездіяльність
let inactivityTimer;

function showInactiveMessage() {
    alert("Будь ласка, введіть дані до форми.");
}

document.addEventListener("DOMContentLoaded", () => {
    // Встановлення таймера при завантаженні сторінки
    inactivityTimer = setTimeout(showInactiveMessage, 60000);

    // Скидання таймера при взаємодії
    document.addEventListener("input", () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(showInactiveMessage, 60000);
    });
});


function validateForm() {
    const name = document.getElementById("full-name").value;
    const address = document.getElementById("billing-address").value;
    const zipCode = document.getElementById("zip-code").value;

    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const zipRegex = /^[0-9]{5}$/;

    if (!nameRegex.test(name)) {
        alert("Ім'я повинно містити лише літери і пробіли (3-50 символів).");
        return false;
    }
    if (address.length < 5) {
        alert("Адреса занадто коротка.");
        return false;
    }
    if (!zipRegex.test(zipCode)) {
        alert("ZIP-код повинен містити 5 цифр.");
        return false;
    }
    alert("Дані валідні!");
    return true;
}

class Student {
    constructor(name, surname, age, course) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.course = course;
    }

    getOlder(years) {
        this.age += years;
    }

    changeSurname(newSurname) {
        this.surname = newSurname;
    }

    moveToSecondCourse() {
        this.course += 1;
    }
}
