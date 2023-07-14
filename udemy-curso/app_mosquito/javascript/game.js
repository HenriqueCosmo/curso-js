//definicao das variaveis de  altura e largura para criar a janela do jogo 
let altura = 0;
let largura = 0;
let vidas = 1;

//funcao para resgatar o valor da janela, altura e largura 
function ajustaTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura,largura );
}


//chamada da funcao do tamanho 
ajustaTamanho()


function posicaoRandomica(){
    /*condicao que verifica se existe algum elemento id com a tag 'mosca', caso exista ele ira remover o item, essa condicao foi usada para permitir que sejam incluidas moscas em um intervalo de tempo, e que a cada mosca incluida, a anterior seja removida antes */
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
        //condicao para verificar se o numero de vidas retiradas  é maior que 3, enquanto nao for o usuario ainda consegue jogar 
        if(vidas > 3){
            alert('game over')
        }else{

            document.getElementById('life' + vidas).src = "../imagens/coracao_vazio.png"
            vidas++ 
        }
    }

    /*cria uma posicao aleatoria para x e y, multiplcando pela altura e largura, possibilitando a criacao das moscas em diferentes areas da janela de forma aleatoria */
    let posicaoX = Math.floor( Math.random() * largura) - 90;
    let posicaoY = Math.floor( Math.random() * altura) - 90 ;

    console.log(posicaoX,posicaoY);

    //condição para verificar se o valor de x e y vao ser menores que 0, caso aconteça, receberão um novo valor que é 0
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    
    //criacao de variavel que recebe um elemento de img, para receber o link da imagem utilizada no jogo, que e atribuida dentro do body como elemento filho
    let mosca = document.createElement('img');
    mosca.src = '../imagens/mosca.png';
    document.body.appendChild(mosca);
    mosca.className = tamanhoMosca() + ' ' + ladoAleatorio();
    mosca.id = 'mosca'
    //atribucao dos valores das posicoes para o estilo do elemento
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    //funcao apartir do metodo onclick que remove a mosca antes dela ser removida automaticamente
    mosca.onclick = function(){
        this.remove()
    }
}
//funcao que define tres tamanhos para a mosca, atravez de atribuicao de uma classe que esta ligada ao atributo do css e com tamanhos pre definidos 
function tamanhoMosca(){
    let classe = Math.floor(Math.random()* 3);

    switch (classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

//funcao que define um lado aleatorio para a mosca, se for um valor 0 ela vira pra um lado, se for 1 ela vira para o outro, esta funcao tbm esta atribuindo uma classe ao css com lados configurados 
function ladoAleatorio(){
    classe =  Math.floor(Math.random() * 2)   

    switch (classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

