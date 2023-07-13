//definicao das variaveis de  altura e largura para criar a janela do jogo 
let altura = 0;
let largura = 0;

//funcao para resgatar o valor da janela, altura e largura 
function ajustaTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura,largura );
}


//chamada da funcao do tamanho 
ajustaTamanho()



function posicaoRandomica(){
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
    mosca.className = 'mosca1';

    //atribucao dos valores das posicoes para o estilo do elemento
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';

}


