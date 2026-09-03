// ======================================
// SLIDER DO HERO
// ======================================

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;


function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}


// troca a cada 5 segundos

setInterval(changeSlide, 5000);



// ======================================
// CONTADOR DO CASAMENTO
// ======================================

const weddingDate = new Date("2027-05-22T00:00:00");


const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


function updateCountdown() {

    const now = new Date();

    const difference = weddingDate - now;


    // Caso a data já tenha chegado

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


// atualiza imediatamente
updateCountdown();


// depois atualiza a cada segundo
setInterval(updateCountdown, 1000);



// ======================================
// MENU MOBILE
// ======================================

const mobileButton =
    document.querySelector(".mobile-btn");

const mobileMenu =
    document.querySelector(".mobile-menu");


mobileButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});