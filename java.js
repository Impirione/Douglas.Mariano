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

function setup(){
    const tabuleiro = getTabuleiro();
    for(let i=0; i<tabuleiro.length;i++){
        const casa = tabuleiro[i];
        const eCasa = c
    }
}

function disco(casa, k){
    const eDisco = document.createElement('div');
    eDisco.draggable = true;
    eDisco.dataset
}
