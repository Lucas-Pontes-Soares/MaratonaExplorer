const resultado = document.getElementById("resposta");
const inputPergunta = document.getElementById("inputPergunta");

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]


function fazerPergunta(){
    if(inputPergunta.value == ""){
        resultado.innerHTML = "Faça a sua pergunta primeiro!"; 
    } else {
        const pergunta = "<div>" + inputPergunta.value + "</div>";
        const totalRespostas = (respostas.length) - 1;
        const sorteio = Math.floor(Math.random() * totalRespostas);
        resultado.innerHTML = pergunta + respostas[sorteio]; 
        setTimeout(function(){
            resultado.innerHTML = "";
        },3000);
    }
}
