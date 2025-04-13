const burger = document.querySelector(".burger");
const links = document.querySelector(".nav-links");
const textArea15 = document.querySelector(".text-10");
const textArea16 = document.querySelector(".text-11");

burger.addEventListener("click",()=> {
    links.classList.toggle("display");
    textArea15.classList.toggle("texthide15");
    textArea16.classList.toggle("texthide16");
})