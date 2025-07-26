
var corpo = document.getElementById("corpo");
 
var botao = document.getElementById("botao");

// quando alguém clicar no botão eu irei executar uma função.
botao.addEventListener("click", function(){
    var cor = window.getComputedStyle(corpo).backgroundColor;
    console.log(cor);

    if(cor === "rgb(0, 0, 0)") {
        corpo.style.backgroundColor = "white";
        botao.style.backgroundColor = "black";
    } else{
         corpo.style.backgroundColor = "black";
        botao.style.backgroundColor = "white";

    }

});