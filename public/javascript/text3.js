const burger = document.querySelector(".burger");
const links = document.querySelector(".nav-links");
const textArea13 = document.querySelector(".text-8");
const textArea14 = document.querySelector(".text-9");
const textAreaa = document.querySelector(".sb");

burger.addEventListener("click",()=> {
    links.classList.toggle("display");
    textArea13.classList.toggle("texthide13");
    textArea14.classList.toggle("texthide14");
    textAreaa.classList.toggle("texthidea");
})