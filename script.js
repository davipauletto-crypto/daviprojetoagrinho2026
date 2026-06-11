function info(tipo){

  if(tipo === "agro"){
    alert(
      "🌳 Sistema Agroflorestal: combina árvores e agricultura para produzir de forma sustentável."
    );
  }

  if(tipo === "desmatamento"){
    alert(
      "🚫 O desmatamento reduz a biodiversidade e contribui para as mudanças climáticas."
    );
  }

  if(tipo === "poluicao"){
    alert(
      "🏭 A poluição afeta o ar, a água e o solo."
    );
  }

}

let arvores = 0;

function plantar(){

  arvores++;

  document.getElementById("contador").innerHTML =
  arvores;

  if(arvores === 10){
    alert("🏆 Parabéns! Você ajudou a reflorestar a área.");
  }

}let tamanhoFonte = 16;

function modoEscuro(){
  document.body.classList.add("dark-mode");
}

function modoClaro(){
  document.body.classList.remove("dark-mode");
}

function aumentarFonte(){
  tamanhoFonte += 2;
  document.body.style.fontSize =
  tamanhoFonte + "px";
}

function diminuirFonte(){

  if(tamanhoFonte > 10){
    tamanhoFonte -= 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";
  }
}
