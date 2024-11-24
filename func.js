
// Функція для знаходження позиції першої голосної літери
function first_vowel(str) {
    const vowels = /[aeiouyAEIOUY]/;
    const match = str.search(vowels);
    return match >= 0 ? match : -1;
}

// Функція для отримання значення з введеного рядка і відображення результату
function findFirstVowel() {
    const inputString = document.getElementById("inputString").value;
    const result = first_vowel(inputString);

    if (result === -1) {
        document.getElementById("result").textContent = "Голосні літери не знайдені.";
    } else {
        document.getElementById("result").textContent = `Перша голосна знаходиться на позиції: ${result}`;
    }
}
