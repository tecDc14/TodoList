var controle = 0
function soma(){
    var valor = 862;    
    if(valor % 2 == 0){
        valor = valor + 1;
        console.log('numero par')
        controle = controle + 1
        if( controle < 10){
            soma();
        }
        
    }else{
        valor = valor + 1
        console.log('não é par, é ímpar')
        controle = controle + 1
        if( controle < 10){
            soma();
        }
    }
}

soma() 