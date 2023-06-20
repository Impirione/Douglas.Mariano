const casa = document.querySelectorAll(".casa");
const disco = document.querySelector(".disco");

disco.addEventListener('dragstart', arrastar);

for (let i = 0; i<casa.length; i++) {
    const casas = casa[i];
    casa[1].addEventListener('dragover', passa);
    casa[1].addEventListener('drop', recebe);
}


let arrastado = null;

function arrastar(evento){

}

function recebe(evento){
    if(arrastado){
        evento.target.appendChild(arrastado);
        arrastado = null;
    }
}

function passa(evento){
    evento.preventDefault();
}
