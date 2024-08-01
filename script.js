function insert(num){
    document.getElementById('resultado').innerHTML+=  num

}

function clean(){
    document.getElementById('resultado').innerHTML= ''
}
 
function apagar(){
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length -1)
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML 
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        window.alert('Por favor insira um numero válido.')
    }
}