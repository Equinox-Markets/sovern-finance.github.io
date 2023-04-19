// Numerology functions
function reduceToSingleDigit(number) {
    return number <= 9 ? number : reduceToSingleDigit(number.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0));
}

function calculateLifePathNumber(birthdate) {
    const [month, day, year] = birthdate.split('/');
    const sum = parseInt(month) + parseInt(day) + parseInt(year);
    return reduceToSingleDigit(sum);
}

function calculateLifeDestinyNumber(name) {
    const letters = name.toUpperCase().split('').filter(c => c.match(/[A-Z]/));
    const letterValues = letters.map(c => c.charCodeAt(0) - 64);
    return reduceToSingleDigit(letterValues.reduce((a, b) => a + b, 0));
}

function calculateSoulNumber(name) {
    const vowels = name.toUpperCase().split('').filter(c => 'AEIOU'.includes(c));
    const vowelValues = vowels.map(c => c.charCodeAt(0) - 64);
    return reduceToSingleDigit(vowelValues.reduce((a, b) => a + b, 0));
}

function calculatePersonalityNumber(name) {
    const consonants = name.toUpperCase().split('').filter(c => c.match(/[A-Z]/) && !'AEIOU'.includes(c));
    const consonantValues = consonants.map(c => c.charCodeAt(0) - 64);
    return reduceToSingleDigit(consonantValues.reduce((a, b) => a + b, 0));
}

function calculateMaturityNumber(lifePathNumber, lifeDestinyNumber) {
    return reduceToSingleDigit(lifePathNumber + lifeDestinyNumber);
}

function calculateBalanceNumber(name) {
    const firstInitial = name[0].toUpperCase();
    return firstInitial.charCodeAt(0) - 64;
}

function calculatePersonalYearNumber(birthdate, currentYear) {
    const [month, day, _] = birthdate.split('/');
    const sum = parseInt(month) + parseInt(day) + parseInt(currentYear);
    return reduceToSingleDigit(sum);
}

function calculatePersonalMonthNumber(personalYearNumber, currentMonth) {
    return reduceToSingleDigit(personalYearNumber + currentMonth);
}

// Widget logic
document.getElementById("numerology-form").addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();

    if (!name || !birthdate) {
        return;
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const lifePathNumber = calculateLifePathNumber(birthdate);
    const lifeDestinyNumber = calculateLifeDestinyNumber(name);
    const soulNumber = calculateSoulNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);
    const maturityNumber = calculateMaturityNumber(lifePathNumber, lifeDestinyNumber);
    const balanceNumber = calculateBalanceNumber(name);
    const personalYearNumber = calculatePersonalYearNumber(birthdate, currentYear);
    const personalMonthNumber = calculatePersonalMonthNumber(personalYearNumber, currentMonth);

    const resultsHtml = `
<h2 class="result-title">Results</h2>
        <div class="result-section">
            <div class="result">Life Path Number: ${lifePathNumber}</div>
            <div class="result-title">Description for Life Path Number</div>
        </div>
        <div class="result-section">
            <div class="result">Life Destiny Number: ${lifeDestinyNumber}</div>
            <div class="result-title">Description for Life Destiny Number</div>
        </div>
        <div class="result-section">
            <div class="result">Soul Number: ${soulNumber}</div>
            <div class="result-title">Description for Soul Number</div>
        </div>
        <div class="result-section">
            <div class="result">Personality Number: ${personalityNumber}</div>
            <div class="result-title">Description for Personality Number</div>
        </div>
        <div class="result-section">
            <div class="result">Maturity Number: ${maturityNumber}</div>
            <div class="result-title">Description for Maturity Number</div>
        </div>
        <div class="result-section">
            <div class="result">Balance Number: ${balanceNumber}</div>
            <div class="result-title">Description for Balance Number</div>
        </div>
        <div class="result-section">
            <div class="result">Personal Year Number: ${personalYearNumber}</div>
            <div class="result-title">Description for Personal Year Number</div>
        </div>
        <div class="result-section">
            <div class="result">Personal Month Number: ${personalMonthNumber}</div>
            <div class="result-title">Description for Personal Month Number</div>
        </div>
        <p class="description"><a href="https://hiddenstarpaths.com/blog" target="_blank">Learn More About Your Numbers Here</a></p>
        <p class="description">Feel Free To Use Our Search bar</p>
    `;

    document.getElementById("results").innerHTML = resultsHtml;
});
