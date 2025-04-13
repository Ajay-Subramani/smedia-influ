const burger = document.querySelector(".burger");
const links = document.querySelector(".nav-links");
const textArea1 = document.querySelector(".text-center");
const textArea2 = document.querySelector(".text");
const textArea3 = document.querySelector(".text-1");
const textArea4 = document.querySelector(".text-2");
const textArea5 = document.querySelector(".text-3");


    burger.addEventListener("click",()=> {
        links.classList.toggle("display");
        textArea1.classList.toggle("texthide1");
        textArea2.classList.toggle("texthide2");
        textArea3.classList.toggle("texthide3");
        textArea4.classList.toggle("texthide4");
        textArea5.classList.toggle("texthide5");
    })