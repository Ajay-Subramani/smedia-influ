const burger = document.querySelector(".burger");
const links = document.querySelector(".nav-links");
const textArea11 = document.querySelector(".text-6");
const textArea12 = document.querySelector(".text-7");
const textAreab = document.querySelector(".bpbd");

burger.addEventListener("click",()=> {
    links.classList.toggle("display");
    textArea11.classList.toggle("texthide11");
    textArea12.classList.toggle("texthide12");
    textAreab.classList.toggle("texthideb");
})