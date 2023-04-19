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
            <div class="result-title">The Life Path Number represents your life's purpose and the path you will take to fulfill it. It is derived from your birthdate and is a key aspect of your numerology chart. This number reveals your innate abilities, strengths, and weaknesses that will shape your journey through life. By understanding your Life Path Number, you can gain insights into your personality, challenges, and opportunities, enabling you to make better choices and achieve greater success in all areas of life. Embrace the unique energy of your Life Path Number to maximize your potential and make the most of the opportunities that come your way.</div>
        </div>
        <div class="result-section">
            <div class="result">Life Destiny Number: ${lifeDestinyNumber}</div>
            <div class="result-title">The Life Destiny Number, also known as the Expression Number, reflects your talents, abilities, and personal potential. It is derived from the numerical values of the letters in your full birth name. This number reveals how you express yourself in the world and the best ways for you to achieve your goals. By understanding your Life Destiny Number, you can identify your natural inclinations and the skills you possess that will help you excel in your chosen endeavors. Embrace the unique energy of your Life Destiny Number to tap into your innate talents, overcome challenges, and fulfill your purpose in life.</div>
        </div>
        <div class="result-section">
            <div class="result">Soul Number: ${soulNumber}</div>
            <div class="result-title">The Soul Number, also known as the Soul Urge Number, represents the inner desires and motivations that drive your actions and choices. It is derived from the numerical values of the vowels in your full birth name. This number reveals your true self, the core of your being, and the deepest desires of your heart. By understanding your Soul Number, you can gain insight into your emotional needs, passions, and the values that guide your decisions. Embrace the unique energy of your Soul Number to align your life with your soul's purpose, find inner harmony, and cultivate meaningful relationships with those who share your values and aspirations.</div>
        </div>
        <div class="result-section">
            <div class="result">Personality Number: ${personalityNumber}</div>
            <div class="result-title">The Personality Number reflects the way you present yourself to the world and how others perceive you. It is derived from the numerical values of the consonants in your full birth name. This number reveals the external aspects of your character, such as your communication style, social skills, and general demeanor. By understanding your Personality Number, you can gain insight into how you interact with others and the impression you make on those around you. Embrace the unique energy of your Personality Number to enhance your relationships, build a strong personal brand, and leverage your strengths to create a positive impact in your personal and professional life.</div>
        </div>
        <div class="result-section">
            <div class="result">Maturity Number: ${maturityNumber}</div>
            <div class="result-title">The Maturity Number represents the wisdom and personal growth you will achieve later in life, usually after the age of 30 or 40. It is derived by adding your Life Path Number and Life Destiny Number together and then reducing the sum to a single digit. This number reveals the traits and abilities that will emerge as you mature, guiding you toward a more fulfilling and purposeful existence. By understanding your Maturity Number, you can gain insight into the future direction of your personal and spiritual growth. Embrace the unique energy of your Maturity Number to make the most of your later years, achieve your aspirations, and find greater contentment and understanding of yourself and the world around you.</div>
        </div>
        <div class="result-section">
            <div class="result">Balance Number: ${balanceNumber}</div>
            <div class="result-title">The Balance Number represents your ability to maintain harmony and equilibrium during challenging times in your life. It is derived from the numerical value of the first initial of your full birth name. This number provides guidance on how to best cope with difficult situations and make decisions that will restore balance and well-being. By understanding your Balance Number, you can gain insight into the most effective ways to handle stress, resolve conflicts, and navigate emotional turmoil. Embrace the unique energy of your Balance Number to foster resilience, adaptability, and inner peace, allowing you to face life's challenges with confidence and grace.</div>
        </div>
        <div class="result-section">
            <div class="result">Personal Year Number: ${personalYearNumber}</div>
            <div class="result-title">The Personal Year Number represents the unique energy and opportunities that a particular year holds for you. It is derived by adding your birth month, birth day, and the current calendar year together, then reducing the sum to a single digit. This number provides insight into the themes, challenges, and potential growth areas you may encounter during the year. By understanding your Personal Year Number, you can align your actions and decisions with the prevailing energy to maximize your success and personal growth. Embrace the unique energy of your Personal Year Number to make the most of the opportunities it brings, overcome obstacles, and achieve your goals in the year ahead.</div>
        </div>
        <div class="result-section">
            <div class="result">Personal Month Number: ${personalMonthNumber}</div>
            <div class="result-title">The Personal Month Number represents the specific energy and opportunities that a particular month holds for you within the context of your Personal Year Number. It is derived by adding your Personal Year Number and the current calendar month together, then reducing the sum to a single digit. This number provides insight into the monthly themes, challenges, and potential growth areas you may encounter. By understanding your Personal Month Number, you can align your actions and decisions with the prevailing energy to maximize your success and personal growth on a month-to-month basis. Embrace the unique energy of your Personal Month Number to make the most of the opportunities it brings, navigate challenges, and achieve your short-term goals within the framework of your larger annual journey.</div>
        </div>
        <p class="description"><a href="https://hiddenstarpaths.com/blog" target="_blank">Learn More About Your Numbers</a></p>
    `;

    document.getElementById("results").innerHTML = resultsHtml;
});
