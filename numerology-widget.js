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

function calculateLuckyNumber(birthdate) {
  const [_, day, year] = birthdate.split('/');
  const sum = parseInt(day) + parseInt(year);
  return reduceToSingleDigit(sum);
}

function calculateSignatureNumber(name) {
  const letters = name.toUpperCase().split('').filter(c => c.match(/[A-Z]/));
  const letterValues = letters.map(c => c.charCodeAt(0) - 64);
  const sum = letterValues.reduce((a, b) => a + b, 0);
  return sum % 9 === 0 ? 9 : sum % 9;
}

function calculateBirthdayNumber(birthdate) {
  const [_, day, _] = birthdate.split('/');
  return parseInt(day);
}

function calculatePersonalYearNumber(birthdate, currentYear) {
  const [month, day, _] = birthdate.split('/');
  const sum = parseInt(month) + parseInt(day) + parseInt(currentYear);
  return reduceToSingleDigit(sum);
}

function calculatePersonalMonthNumber(personalYearNumber, currentMonth) {
  return reduceToSingleDigit(personalYearNumber + currentMonth);
}


document.getElementById("numerology-form").addEventListener("submit", function (event) {
    event.preventDefault();

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
