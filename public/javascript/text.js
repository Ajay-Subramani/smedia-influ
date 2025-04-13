const burger = document.querySelector(".burger");
const links = document.querySelector(".nav-links");
const textArea9 = document.querySelector(".text-4");
const textArea10 = document.querySelector(".text-5");

burger.addEventListener("click",()=> {
    links.classList.toggle("display");
    textArea9.classList.toggle("texthide9");
    textArea10.classList.toggle("texthide10");
})