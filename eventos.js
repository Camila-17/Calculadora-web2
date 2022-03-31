const botonSumar = document.querySelector('#btnSumar');

botonSumar.addEventListener('click', function(){

    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado =parseInt(numeroUno)+parseInt(numeroDos);
    const mostrarResultado = document.querySelector('#resultadoSuma');
    console.log(resultado);
    mostrarResultado.textContent=resultado;
});

const botonResta = document.querySelector('#btnResta');

botonResta.addEventListener('click', function(){
    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado = parseInt(numeroUno)-parseInt(numeroDos);
    const mostrarResultado = document.querySelector('#resultadoResta');
    mostrarResultado.textContent= resultado;
    
});

const botonMultiplicar = document.querySelector('#btnMultiplicar');

botonMultiplicar.addEventListener('click', function(){
    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado = parseInt(numeroUno)*parseInt(numeroDos);
    const mostrarResultado = document.querySelector('#resultadoMultiplicar');
    mostrarResultado.textContent=resultado;
});

const botonDividir = document.querySelector('#btnDividir');

botonDividir.addEventListener('click', function(){
    const numeroUno = document.getElementById('numeroUno').value;
    const numeroDos = document.getElementById('numeroDos').value;
    const resultado = parseInt(numeroUno)/parseInt(numeroDos);
    const mostrarResultado = document.querySelector('#resultadoDividir');
    
    if(numeroUno === null || numeroDos === null){
        mostrarResultado.textContent='No hay valor';
    }else{
        if(isNaN(numeroUno) || isNaN(numeroDos)){
            mostrarResultado.textContent ='Estas bien?'
        }else{
            mostrarResultado.textContent=resultado;
        }
    }
});


