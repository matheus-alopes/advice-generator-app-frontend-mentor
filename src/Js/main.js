let idConselho = document.querySelector(".card .title .advice-id");
let textoConselho = document.querySelector(".card .advice");

const botaoConselhoAleatorio = document.querySelector("main footer img");

botaoConselhoAleatorio.addEventListener("click",
    async () => {
        let objetoConselho = await fetch("https://api.adviceslip.com/advice");
        let objetoConselhoJson = await objetoConselho.json();

        idConselho.innerHTML = objetoConselhoJson.slip.id;
        textoConselho.innerHTML = objetoConselhoJson.slip.advice;
    }
)