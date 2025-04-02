const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);

document.addEventListener("scroll", scrollPage);

function navToggle() {
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("stop-scrolling");
    menu.classList.toggle("show-menu");
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

window.addEventListener("scroll", () => {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        overlay.classList.remove("overlay-show");
    }
});

function countUp() {
    counters.forEach((counter) => {
        counter.innerHTML = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const c = +counter.innerHTML;
            const increment = target / 100;
            if (c < target) {
                counter.innerHTML = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 25);
            } else {
                counter.innerHTML = target;
            }
        };
        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = "0"));
}
