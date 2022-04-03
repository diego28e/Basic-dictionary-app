'use strict'

function redireccionar () {
    var input = document.querySelector('.numero').value;
    var valor = document.querySelector('#languages').value;
    if(valor == 'english'){
        function abrirDiccionarioEn (url){
            window.open(url,"", "width=400,height=300");
        }
        abrirDiccionarioEn(`https://www.wordreference.com/es/translation.asp?tranword=${input}`);
    }

    else{
        function abrirDiccionarioEs (url){
            window.open(url,"", "width=400,height=400");
        }
        abrirDiccionarioEs(`https://www.wordreference.com/es/en/translation.asp?spen=${input}`);
    }
           
}