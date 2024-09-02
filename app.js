let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let dificuldadeDeZeroAte = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${dificuldadeDeZeroAte}` );
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagenTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor`);
        } else{
            exibirTextoNaTela('p', `O número secreto é maior`);
        }
        tentativas++;
        limparCampo();
        
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhuido = parseInt(Math.random() *dificuldadeDeZeroAte +1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNalista == numeroLimite){
        listaDeNumerosSorteados =[];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhuido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhuido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhuido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
