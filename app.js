//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
sorteioEfetuado = false;

function adicionarAmigo(){
    //Captura o amigo escrito no input e adiciona a lista
    let amigoParaAdicionar = document.getElementById('amigo').value;
    if (amigoParaAdicionar == "" || amigoParaAdicionar == " "){
        alert("Por favor digite um nome válido! O campo onde deve ser preenchido o nome está vázio.")
    }else{
        listaAmigos.push(amigoParaAdicionar);
        console.log(listaAmigos);

        //Adiciona o nome do ultimo amigo adicionado a lista exibida no site
        let listaExibicaoAmigos = document.getElementById('listaAmigos');
        let textoParaExibir = document.createElement('li');
        textoParaExibir.textContent = listaAmigos[listaAmigos.length-1];
        listaExibicaoAmigos.appendChild(textoParaExibir);
        let resultadoExibicao = document.getElementById('resultado');
        resultadoExibicao.innerHTML = null
        sorteioEfetuado = false;
    }
    
}

function sortearAmigo(){
    let resultadoExibicao = document.getElementById('resultado');
    let listaExibicaoAmigos = document.getElementById('listaAmigos');

    if (listaAmigos.length == 0){
        if(sorteioEfetuado){
            alert("Nenhum nome novo foi adicionado!");
        }else{
            alert("Nenhum nome foi adicionado!");
        }
    }else{
        let numeroSorteado = Math.floor(Math.random() * listaAmigos.length);
        console.log(`Número sorteado: ${numeroSorteado}`);
        listaExibicaoAmigos.innerHTML = null;
        resultadoExibicao.innerHTML =  `<li>O amigo(a) secreto sorteado é: ${listaAmigos[numeroSorteado]}</li>`;
        listaAmigos = []
        sorteioEfetuado = true;
    }
}

