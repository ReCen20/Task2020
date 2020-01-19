let days = [
    {
        date: "19 января",
        dayOfTheWeek: "Cегодня",
        cloudness: "Облачно",
        rain: "Без осадков",
        temperatureDay: 0,
        temperatureNight: -3,
    },
    {
        date: "20 января",
        dayOfTheWeek: "Понедельник",
        cloudness: "Облачно",
        rain: "Небольшой снег",
        temperatureDay: -1,
        temperatureNight: -1,
    },
    {
        date: "21 января",
        dayOfTheWeek: "Вторник",
        cloudness: "Облачно",
        rain: "Небольшой снег",
        temperatureDay: +1,
        temperatureNight: -1,
    },
    {
        date: "22 января",
        dayOfTheWeek: "Среда",
        cloudness: "Облачно",
        rain: "Снег",
        temperatureDay: +1,
        temperatureNight: -3,
    },
    {
        date: "23 января",
        dayOfTheWeek: "Четверг",
        cloudness: "Облачно",
        rain: "Небольшой снег",
        temperatureDay: -3,
        temperatureNight: -8,
    },
    {
        date: "24 января",
        dayOfTheWeek: "Пятница",
        cloudness: "Облачно",
        rain: "Небольшой снег",
        temperatureDay: -7,
        temperatureNight: -9,
    },
    {
        date: "25 января",
        dayOfTheWeek: "Суббота",
        cloudness: "Облачно",
        rain: "Небольшой снег",
        temperatureDay: -1,
        temperatureNight: -4,
    },
    {
        date: "26 января",
        dayOfTheWeek: "Воскресенье",
        cloudness: "Облачно",
        rain: "Без осадков",
        temperatureDay: -2,
        temperatureNight: -4,
    },
    {
        date: "27 января",
        dayOfTheWeek: "Понедельник",
        cloudness: "Облачно",
        rain: "Небольшой снег",
        temperatureDay: -3,
        temperatureNight: -4,
    },
    {
        date: "28 января",
        dayOfTheWeek: "Вторник",
        cloudness: "Облачно",
        rain: "Небольшой снег",
        temperatureDay: -2,
        temperatureNight: -8,
    },
]

let htmlBody = document.querySelector("body");
makeMaket();
let cardsContainer = htmlBody.querySelector(".weather__cards");
for(let i = 0; i < 4; i++) {
    cardsContainer.appendChild(createCard(days[i]));
}

let indexOfFirstElement = 0;
let cardsArray = cardsContainer.children;

let dayOfTheWeek = cardsArray[0].querySelector("div");
dayOfTheWeek.classList.add("today");

let leftArrow = htmlBody.querySelector(".left-arrow");
let rightArrow = htmlBody.querySelector(".right-arrow");
let emptyArrow = htmlBody.querySelectorAll(".empty-arrow");


function makeMaket() {
    let emptyArrow_1 = createElement('div', 'empty-arrow');
    htmlBody.appendChild(emptyArrow_1);
    let leftArrow = createElement('img', 'left-arrow');
    leftArrow.src = "assets/img/back_arrow_5821.png";
    leftArrow.classList.add('hidden');
    htmlBody.appendChild(leftArrow);

    let weather = createElement('div', 'weather');
    let weatherTitle = createElement('div', 'weather__title');
    let weatherCards = createElement('div', 'weather__cards');

    let titleText = createElement('div', 'title__text', "Прогноз погоды");
    weatherTitle.appendChild(titleText);
    let titleDate = createElement('div', 'title__date', "Самара, 19 января, воскресенье");
    weatherTitle.appendChild(titleDate);

    weather.appendChild(weatherTitle);
    weather.appendChild(weatherCards);
    htmlBody.appendChild(weather);

    let rightArrow = createElement('img', 'right-arrow');
    rightArrow.src = "assets/img/forwardarrow_haciaadelante_4836.png";
    htmlBody.appendChild(rightArrow);
    let emptyArrow_2 = createElement('div', 'empty-arrow');
    emptyArrow_2.classList.add('hidden');
    htmlBody.appendChild(emptyArrow_2);
}

leftArrow.addEventListener('click', function() {
    if(indexOfFirstElement > 0) {
        cardsArray[3].remove();
        indexOfFirstElement--;
        cardsContainer.insertBefore(createCard(days[indexOfFirstElement]),cardsArray[0]);
    }
    if(indexOfFirstElement === 0) {
        leftArrow.classList.add("hidden");
        emptyArrow[0].classList.remove("hidden");
        let dayOfTheWeek = cardsArray[0].querySelector("div");
        dayOfTheWeek.classList.add("today");
    }
    if((indexOfFirstElement + 3) === (days.length - 2)) {
        rightArrow.classList.remove("hidden");
        emptyArrow[1].classList.add("hidden");
    }    
});

rightArrow.addEventListener('click', function() {
    if((indexOfFirstElement + 3) < (days.length - 1)) {
        cardsArray[0].remove();
        indexOfFirstElement++;
        cardsContainer.appendChild(createCard(days[(indexOfFirstElement + 3)]));
    }
    if((indexOfFirstElement + 3) === (days.length - 1)) {
        rightArrow.classList.add("hidden");
        emptyArrow[1].classList.remove("hidden");
    }
    if(indexOfFirstElement === 1) {
        leftArrow.classList.remove("hidden");
        emptyArrow[0].classList.add("hidden");
    }
});

function createElement(tag, tagClass, textContent) {
    let newItem = document.createElement(tag);
    newItem.classList.add(tagClass);
    if (textContent) newItem.textContent = textContent;
    return newItem
}

function createCard(day) {
    let newCard = createElement('div', 'card');

    let cardDayOfTheWeek = createElement('div', 'card__day-of-the-week', day.dayOfTheWeek);
    newCard.appendChild(cardDayOfTheWeek);

    let cardDate = createElement('div', 'card__date', day.date);
    newCard.appendChild(cardDate);

    let cardWeatherIconSrc;
    switch(day.cloudness) {
        case "Облачно":
            switch (day.rain) {
                case "Без осадков":
                    cardWeatherIconSrc = "assets/img/clouds_weather_cloud_4496.png";
                    break;
                case "Дождь":
                case "Сильный дождь":
                    cardWeatherIconSrc = "assets/img/rain_weather_4492.png";
                    break;
                case "Снег":
                case "Небольшой снег":
                    cardWeatherIconSrc = "assets/img/cloud-with-snowflakes-weather-symbol_icon-icons.com_54692.png";
                    break;
                default:
                    cardWeatherIconSrc = "assets/img/1487086345-cross_81577.png";
                    break;
            }
            break;
        case "Ясно":
            if (day.rain === "Без осадков") cardWeatherIconSrc = "assets/img/sunny-day-weather-stroke-symbol_icon-icons.com_54642.png";
            else cardWeatherIconSrc = "assets/img/1487086345-cross_81577.png";
            break;
        case "Гроза":
            switch (day.rain) {
                case "Без осадков":
                    cardWeatherIconSrc = "assets/img/electricalstormoutlinedweathersign_80751.png";
                    break;
                case "Дождь":
                case "Сильный дождь":
                    cardWeatherIconSrc = "assets/img/storm_weather_4850.png";
                    break;
                default:
                    cardWeatherIconSrc = "assets/img/1487086345-cross_81577.png";
                    break;
            }
            break;
        default:
            cardWeatherIconSrc = "assets/img/1487086345-cross_81577.png";
            break;
    }
    
    let cardWeatherIcon = createElement('img', 'card__weather-icon');
    cardWeatherIcon.src = cardWeatherIconSrc;
    newCard.appendChild(cardWeatherIcon);

    let cardTemperatureDay = createElement('div', 'card__temperature-day', `Днём: ${day.temperatureDay}`);
    newCard.appendChild(cardTemperatureDay);

    let cardTemperatureNight = createElement('div', 'card__temperature-night', `Ночью: ${day.temperatureNight}`);
    newCard.appendChild(cardTemperatureNight);

    let cloudness = createElement('div', 'card__weather', `${day.cloudness},`);
    newCard.appendChild(cloudness);

    let rain = createElement('div', 'card__weather', day.rain);
    newCard.appendChild(rain);

    return newCard;
}