document.getElementById("numerology-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();

    if (!name || !birthdate) {
        return;
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    // Numerology functions

function reduceToSingleDigit(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum > 9 ? reduceToSingleDigit(sum) : sum;
}

function calculateLifePathNumber(birthdate) {
    const [month, day, year] = birthdate.split("/").map((part) => parseInt(part, 10));
    const sum = month + day + year;
    return reduceToSingleDigit(sum);
}

function calculateLifeDestinyNumber(name) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nameUpperCase = name.toUpperCase().replace(/[^A-Z]/g, "");
    let sum = 0;

    for (const char of nameUpperCase) {
        sum += letters.indexOf(char) + 1;
    }

    return reduceToSingleDigit(sum);
}

function calculateSoulNumber(name) {
    const vowels = "AEIOU";
    const nameUpperCase = name.toUpperCase().replace(/[^A-Z]/g, "");
    let sum = 0;

    for (const char of nameUpperCase) {
        if (vowels.includes(char)) {
            sum += calculateLifeDestinyNumber(char);
        }
    }

    return reduceToSingleDigit(sum);
}

function calculatePersonalityNumber(name) {
    const vowels = "AEIOU";
    const nameUpperCase = name.toUpperCase().replace(/[^A-Z]/g, "");
    let sum = 0;

    for (const char of nameUpperCase) {
        if (!vowels.includes(char)) {
            sum += calculateLifeDestinyNumber(char);
        }
    }

    return reduceToSingleDigit(sum);
}

function calculateMaturityNumber(lifePathNumber, lifeDestinyNumber) {
    const sum = lifePathNumber + lifeDestinyNumber;
    return reduceToSingleDigit(sum);
}

function calculateBalanceNumber(name) {
    const nameUpperCase = name.toUpperCase().replace(/[^A-Z]/g, "");
    const firstLetter = nameUpperCase.charAt(0);
    return calculateLifeDestinyNumber(firstLetter);
}

function calculateLuckyNumber(birthdate) {
    const lifePathNumber = calculateLifePathNumber(birthdate);
    return reduceToSingleDigit(lifePathNumber * 9);
}

function calculateSignatureNumber(name) {
    const nameUpperCase = name.toUpperCase().replace(/[^A-Z]/g, "");
    return reduceToSingleDigit(nameUpperCase.length);
}

function calculateBirthdayNumber(birthdate) {
    const [, day] = birthdate.split("/").map((part) => parseInt(part, 10));
    return reduceToSingleDigit(day);
}

function calculatePersonalYearNumber(birthdate, currentYear) {
    const [month, day] = birthdate.split("/").map((part) => parseInt(part, 10));
    const sum = month + day + currentYear;
    return reduceToSingleDigit(sum);
}

function calculatePersonalMonthNumber(personalYearNumber, currentMonth) {
    const sum = personalYearNumber + currentMonth;
    return reduceToSingleDigit(sum);
}


    // ... (paste the numerology functions here)

    // Numerology calculations

    const lifePathNumber = calculateLifePathNumber(birthdate);
    const lifeDestinyNumber = calculateLifeDestinyNumber(name);
    const soulNumber = calculateSoulNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);
    const maturityNumber = calculateMaturityNumber(lifePathNumber, lifeDestinyNumber);
    const balanceNumber = calculateBalanceNumber(name);
    const luckyNumber = calculateLuckyNumber(birthdate);
    const signatureNumber = calculateSignatureNumber(name);
    const birthdayNumber = calculateBirthdayNumber(birthdate);
    const personalYearNumber = calculatePersonalYearNumber(birthdate, currentYear);
    const personalMonthNumber = calculatePersonalMonthNumber(personalYearNumber, currentMonth);

    const resultsHtml = `
        <h2>Results</h2>
        <p>Life Path Number: ${lifePathNumber}</p>
        <p>Life Destiny Number: ${lifeDestinyNumber}</p>
        <p>Soul Number: ${soulNumber}</p>
        <p>Personality Number: ${personalityNumber}</p>
        <p>Maturity Number: ${maturityNumber}</p>
        <p>Balance Number: ${balanceNumber}</p>
        <p>Lucky Number: ${luckyNumber}</p>
        <p>Signature Number: ${signatureNumber}</p>
        <p>Birthday Number: ${birthdayNumber}</p>
        <p>Personal Year Number: ${personalYearNumber}</p>
        <p>Personal Month Number: ${personalMonthNumber}</p>
    `;

    document.getElementById("results").innerHTML = resultsHtml;
});
