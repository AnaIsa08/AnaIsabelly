var inputvalorhora = document.querySelector("#valor-hora")

var inputhorasprojeto = document.querySelector("#horas-projeto")

function calcular(){ // criei a função
    var valorhora = inputvalorhora.valueAsNumber // valor do salario
    var horasprojeto = inputhorasprojeto.valueAsNumber // valor das horas
    var resultado = valorhora*horasprojeto
    document.querySelector("#resposta").textContent = resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}


