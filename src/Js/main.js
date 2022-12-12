let idConselho = document.querySelector(".card .titulo span");
let textoConselho = document.querySelector(".card .conselho");

const botaoConselhoAleatorio = document.querySelector("main footer img");

botaoConselhoAleatorio.addEventListener("click",
    async () => {
        let objetoConselho = await fetch("https://api.adviceslip.com/advice");
        let objetoConselhoJson = await objetoConselho.json();

        idConselho.innerHTML = objetoConselhoJson.slip.id;
        textoConselho.innerHTML = objetoConselhoJson.slip.advice;
    }
)