function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value ) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'HOMEM'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','foto-crianca.png')
            }else if ( idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem.png')
            }else if( idade < 50){
                //adulto
                img.setAttribute('src','foto-adulto.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'MULHER'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','foto-mocinha.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','foto-moca.png')
            }else if( idade < 50 ){
                //adulto
                img.setAttribute('src','foto-adulta.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos genero ${genero} com idade ${idade} anos.`
        res.appendChild(img)
    }


}
//atentar se aos erros de escrita e espaço no código, junto do fechamento correto, para não ocorrer mais erros 